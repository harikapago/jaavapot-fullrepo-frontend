import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useCart, useDispatchCart } from "../components/ContextReducer";

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  const [showSummary, setShowSummary] = useState(true);
  const [isAddress, setIsAddress] = useState(false);
  const cart = useCart();

  const [errorMsg, setErrorMsg] = useState("");

  const [address, setAddress] = useState({
    name: "",
    email: "",
    phoneNo: "",
    location: "",
    city: "",
    pincode: "",
  });

  const onChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Using this pincode list to validate
    const pincodeList = [
      "500003",
      "500101",
      "500078",
      "500029",
      "500039",
      "500050",
      "500029",
      "500008",
      "500038",
      "501301",
      "500055",
      "501101",
      "500045",
      "500013",
      "500008",
      "500015",
      "500092",
      "500087",
      "500095",
      "500008",
    ];

    // const cityList=["Hyderabad"]

    // Validate that the address is located in Hyderabad
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address.location},${address.city},${address.pincode}&key=AIzaSyAdkoYYorJ9XICIk4pcAKmvjc1dd1gMWgo`
    );
    const hyderabadAddress =
      response.data.results[0].formatted_address.includes("Hyderabad");

    if (!hyderabadAddress) {
      setErrorMsg(
        "Sorry, we currently only deliver to addresses in Hyderabad."
      );
      return;
    }

    // Validate the pincode entered by the user
    const pincodeMatches = pincodeList.includes(address.pincode);
    if (!pincodeMatches) {
      setErrorMsg("Sorry, the entered pincode is not serviceable.");
      return;
    }

    // Address is in Hyderabad and pincode is valid, continue with form submission
    if (hyderabadAddress && pincodeMatches) {
      setErrorMsg("");
      setIsAddress(true);
      alert(
        "Your Address has been saved Successfully please go to chekout and make payment"
      );
      // console.log(address);
    }
  };

  const toggleShowSummary = () => {
    setShowSummary(!showSummary);
  };

  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center text-white fs-3">
          The Cart is Empty!
        </div>
      </div>
    );
  }

  const handleCheckOut = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://www.localhost:5000/api/getkey");

    const {
      data: { order },
    } = await axios.post("http://localhost:5000/api/checkout", {
      amount,
    });
    // console.log(order);
    const newData = [{ data: data }, { address: address }];
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Jaavapot",
      description: "Food ordering",
      // image: "https://avatars.githubusercontent.com/u/25058652?v=4",
      order_id: order.id,
      callback_url: "http://localhost:5000/api/paymentverification",
      handler: async function (response) {
        // console.log("paid...........!!!!!!1");
        let userEmail = localStorage.getItem("userEmail");
        let responses = await axios.post(
          "http://localhost:5000/api/orderData",
          {
            order_data: [data, address],
            // order_data: newData,
            // order_address:address,
            email: userEmail,
            order_date:
              new Date().toDateString() + " " + new Date().toTimeString(),
          }
        );

        // console.log("JSON RESPONSE:::::", responses.status)
        if (responses.status === 200) {
          dispatch({ type: "DROP" });
        }
      },
      prefill: {
        name: address.name,
        email: address.email,
        contact: address.phoneNo,
      },
      notes: {
        city: address.city,
        address: address.location,
        pincode: address.pincode,
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  let amount = data.reduce((total, food) => total + food.price, 0);
  const GST = amount * 0.18; // calculate GST amount
  amount += GST; // add GST to the total amount
  amount = Math.round(amount * 100) / 100; // round off to 2 decimal places
  return (
    <div>
      <div className="text-white">
        {showSummary ? (
          <div className="container text-white m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md">
            <table className="table table-dark table-hover">
              <thead className=" text-success fs-5">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Option</th>
                  <th scope="col">Taxable Amount</th>
                  <th scope="col">GST</th>
                  <th scope="col">Amount</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody className="text-white">
                {data.map((food, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{food.name}</td>
                    <td>{food.qty}</td>
                    <td>{food.size}</td>
                    <td>{food.price}</td>
                    <td>{food.price * 0.18}</td>
                    <td>{food.price * 0.18 + food.price}</td>
                    <td className="text-white">
                      <button type="button" className="btn btn-light p-0">
                        <DeleteIcon
                          onClick={() => {
                            dispatch({ type: "REMOVE", index: index });
                          }}
                        />
                      </button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <h1 className="fs-2">Total Price: {amount}/-</h1>
            </div>
            {/* <div>
         <button className='btn bg-success mt-5 ' onClick={()=>handleCheckOut(amount)}> Check Out </button>
       </div> */}
            <div>
              <button
                className="btn bg-success mt-5 "
                onClick={toggleShowSummary}
              >
                {" "}
                {showSummary ? "Next" : "Back"}
              </button>
            </div>
          </div>
        ) : (
          //deliver address page

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <h1>Delivery Address</h1>
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={address.name}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={address.email}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phoneNo">Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phoneNo"
                      name="phoneNo"
                      pattern="^[1-9]{1}[0-9]{9}$"
                      value={address.phoneNo}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="location">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      name="location"
                      value={address.location}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      value={address.city}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pincode">Pincode</label>
                    <input
                      type="text"
                      className="form-control"
                      id="pincode"
                      name="pincode"
                      value={address.pincode}
                      onChange={onChange}
                      required
                    />
                  </div>
                  {errorMsg && (
                    <div className="alert alert-danger">{errorMsg}</div>
                  )}

                  <div className="d-flex justify-content-between">
                    <div>
                      {" "}
                      <button type="submit" className="btn btn-primary">
                        Save Address
                      </button>
                    </div>
                    <div>
                      <button
                        className="btn bg-success mt-5"
                        onClick={toggleShowSummary}
                      >
                        {showSummary ? "Next" : "Back"}
                      </button>
                    </div>
                    <div>
                      {isAddress && (
                        <button
                          className="btn bg-success mt-5"
                          type="button"
                          onClick={() => handleCheckOut(amount)}
                        >
                          Check Out and Payment
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

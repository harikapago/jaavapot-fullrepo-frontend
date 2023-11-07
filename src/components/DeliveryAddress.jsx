// import React, { useState } from 'react';
// import axios from 'axios';

// const DeliveryAddress = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNo, setPhoneNo] = useState('');
//   const [location, setLocation] = useState('');
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [errorMsg, setErrorMsg] = useState('');
//   const [phoneNoError, setPhoneNoError] = useState('');

// const handleFormSubmit = async (e) => {
//     e.preventDefault();
  
//     const pincodeList =['500003','500101','500078','500029','500039','500050','500029','500008','500038','501301','500055','501101','500045','500013','500008','500015','500092','500087','500095','500008'];
//     // const cityList=["Hyderabad"]
  
//     // Validate that the address is located in Hyderabad
//     const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address},${city},${pincode}&key=AIzaSyAdkoYYorJ9XICIk4pcAKmvjc1dd1gMWgo`);
//     const hyderabadAddress = response.data.results[0].formatted_address.includes('Hyderabad');
//     console.log(response.data);
  
//     if (!hyderabadAddress) {
//       setErrorMsg('Sorry, we currently only deliver to addresses in Hyderabad.');
//       return;
//     }
  
//     // Validate the pincode entered by the user
//     if (!pincodeList.includes(pincode)) {
//       setErrorMsg('Sorry, the entered pincode is not serviceable.');
//       return;
//     }
  
//     // Address is in Hyderabad and pincode is valid, continue with form submission
//     console.log("accepted");
//     setErrorMsg('')
//   }

//   return (
    
//     <div className="container">
//   <div className="row justify-content-center">
//     <div className="col-md-6">
//       <h1>Delivery Address</h1>
//       <form onSubmit={handleFormSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="phoneNo">Phone</label>
//           <input type="tel" className="form-control" id="phoneNo" pattern="^[1-9]{1}[0-9]{9}$" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="address">Address</label>
//           <input type="text" className="form-control" id="address" value={location} onChange={(e) => setLocation(e.target.value)} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="city">City</label>
//           <input type="text" className="form-control" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="pincode">Pincode</label>
//           <input type="text" className="form-control" id="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
//         </div>
//         {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   </div>
// </div>

//   );
// };

// export default DeliveryAddress;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useCart,useDispatchCart } from './ContextReducer';

// const DeliveryAddress = () => {
//   const cart = useCart();
//   const dispatch = useDispatchCart();
//   const [errorMsg, setErrorMsg] = useState('');
//   const [phoneNoError, setPhoneNoError] = useState('');


//   const [address,setAddress] =useState({
//     name: "",
//     email: "",
//     phoneNo: "",
//     location: "",
//     city: "",
//     pincode: "",
//   })

//   const onChange = (e) => {
//     setAddress({ ...address, [e.target.name]: e.target.value });
//   };

// const handleFormSubmit = async (e) => {
//     e.preventDefault();
  
//     const pincodeList =['500003','500101','500078','500029','500039','500050','500029','500008','500038','501301','500055','501101','500045','500013','500008','500015','500092','500087','500095','500008'];
//     // const cityList=["Hyderabad"]
  
//     // Validate that the address is located in Hyderabad
//     const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address.location},${address.city},${address.pincode}&key=AIzaSyAdkoYYorJ9XICIk4pcAKmvjc1dd1gMWgo`);
//     const hyderabadAddress = response.data.results[0].formatted_address.includes('Hyderabad');
//     console.log(response.data);
  
//     if (!hyderabadAddress) {
//       setErrorMsg('Sorry, we currently only deliver to addresses in Hyderabad.');
//       return;
//     }
  
//     // Validate the pincode entered by the user
//     if (!pincodeList.includes(address.pincode)) {
//       setErrorMsg('Sorry, the entered pincode is not serviceable.');
//       return;
//     }
  
//     // Address is in Hyderabad and pincode is valid, continue with form submission
//     setErrorMsg('')
//     // console.log(address);
//     const newAddress =address;
//     dispatch({ type: "ADD_DELIVERY_ADDRESS", payload: newAddress });
//   }

//   return (
    
//     <div className="container">
//   <div className="row justify-content-center">
//     <div className="col-md-6">
//       <h1>Delivery Address</h1>
//       <form onSubmit={handleFormSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input type="text" className="form-control" id="name" name="name" value={address.name} onChange={onChange} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input type="email" className="form-control" id="email" name="email" value={address.email} onChange={onChange} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="phoneNo">Phone</label>
//           <input type="tel" className="form-control" id="phoneNo" name="phoneNo" pattern="^[1-9]{1}[0-9]{9}$" value={address.phoneNo} onChange={onChange} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="location">Address</label>
//           <input type="text" className="form-control" id="location" name="location" value={address.location} onChange={onChange} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="city">City</label>
//           <input type="text" className="form-control" id="city" name="city" value={address.city} onChange={onChange} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="pincode">Pincode</label>
//           <input type="text" className="form-control" id="pincode" name="pincode" value={address.pincode} onChange={onChange} required />
//         </div>
//         {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   </div>
// </div>

//   );
// };

// export default DeliveryAddress;



import React, { useState } from 'react';
import axios from 'axios';
import { useCart,useDispatchCart } from './ContextReducer';
import DeleteIcon from '@mui/icons-material/Delete';

const DeliveryAddress = () => {
  const cart = useCart();
  const dispatch = useDispatchCart();
  const [errorMsg, setErrorMsg] = useState('');
  const [phoneNoError, setPhoneNoError] = useState('');


  const [address,setAddress] =useState({
    name: "",
    email: "",
    phoneNo: "",
    location: "",
    city: "",
    pincode: "",
  })

  const onChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    const pincodeList =['500003','500101','500078','500029','500039','500050','500029','500008','500038','501301','500055','501101','500045','500013','500008','500015','500092','500087','500095','500008'];
    // const cityList=["Hyderabad"]
  
    // Validate that the address is located in Hyderabad
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address.location},${address.city},${address.pincode}&key=AIzaSyAdkoYYorJ9XICIk4pcAKmvjc1dd1gMWgo`);
    const hyderabadAddress = response.data.results[0].formatted_address.includes('Hyderabad');
    console.log(response.data);
  
    if (!hyderabadAddress) {
      setErrorMsg('Sorry, we currently only deliver to addresses in Hyderabad.');
      return;
    }
  
    // Validate the pincode entered by the user
    if (!pincodeList.includes(address.pincode)) {
      setErrorMsg('Sorry, the entered pincode is not serviceable.');
      return;
    }
  
    // Address is in Hyderabad and pincode is valid, continue with form submission
    setErrorMsg('')
    // console.log(address);
    const newAddress =address;
    dispatch({ type: "ADD_DELIVERY_ADDRESS", payload: newAddress });
  }

  return (
    
    <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <h1>Delivery Address</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={address.name} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={address.email} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo">Phone</label>
          <input type="tel" className="form-control" id="phoneNo" name="phoneNo" pattern="^[1-9]{1}[0-9]{9}$" value={address.phoneNo} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="location">Address</label>
          <input type="text" className="form-control" id="location" name="location" value={address.location} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" className="form-control" id="city" name="city" value={address.city} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pincode</label>
          <input type="text" className="form-control" id="pincode" name="pincode" value={address.pincode} onChange={onChange} required />
        </div>
        {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</div>

  );
};

export default DeliveryAddress;
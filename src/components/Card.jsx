// import React, { useEffect, useRef, useState } from "react";
// import "../assets/css/main.css";

// function Card(props) {
//   let options = props.options;
//   let priceOption = Object.keys(options);
//   let foodItem =props.foodItem;
//   const[qty,setQty]=useState(1);
//   const[size,setSize]=useState("");


//   useEffect(()=>{
//     setSize(priceRef.current.value)
//   },[])

//   let finalPrice= qty * parseInt(options[size]);
  
//   return (
//     <div>
//       {/* style={{ width: "18rem", maxHeight: "360px" }} */}
//        <div className="member-info card mt-3 " >
//         <img
//           src={foodItem.img}
//           className="card-img-top"
//           alt="..."
//           style={{ height: "250px", objectFit: "fill" }}
//         />
//         <div className="card-body">
//           <h5 className="card-title">{foodItem.name}</h5>
//           <p className="card-text">{foodItem.description}</p>
//           <div className="container w-100">
//             <select className="m-2 h-100 bg-success rounded" onChange={(e)=> setQty(e.target.value)}>
//               {Array.from(Array(6), (e, i) => {
//                 return (
//                   <option key={i + 1} value={i + 1}>
//                     {i + 1}
//                   </option>
//                 );
//               })}
//             </select>
//             <select className="m-2 h-100 bg-success rounded"  onChange={(e)=> setSize(e.target.value)}>
//               {priceOption.map((data) => {
//                 return (
//                   <option key={data} value={data}>
//                     {data}
//                   </option>
//                 );
//               })}
//             </select>
//             <div className="d-inline h-100 fs-5">
//             ₹{finalPrice}/-
//             </div>
//           </div>
//           <hr />
//           <button
//             className={`btn btn-success justify-content-center ms-2`}
//             // onClick={handleAddToCart}
//           >
//             Add to Cart
//           </button>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Card


import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart,useCart } from "./ContextReducer";

export default function Card(props) {

  const dispatch = useDispatchCart();
  let data = useCart()
  let priceRef=useRef();
  let options = props.options;
  let priceOption = Object.keys(options);
  let foodItem =props.foodItem;
  const[qty,setQty]=useState(1);
  const[size,setSize]=useState("");

  const handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === foodItem._id) {
        food = item;

        break;
      }
    }
    console.log(food)
    console.log(new Date())
    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }

    await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })


    // setBtnEnable(true)

  }

  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])

  let finalPrice= qty * parseInt(options[size]);
  

  return (
    <div>
      <div className="card mt-3" >
        <img
          src={foodItem.img}
          className="card-img-top"
          alt="..."
          style={{ height: "150px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{foodItem.name}</h5>
          <p className="card-text">{foodItem.description}</p>
                    <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded" onChange={(e)=> setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e)=> setSize(e.target.value)}>
              {priceOption.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100 fs-5">
            ₹{finalPrice}/-
            </div>
          </div>
          <hr />
          <button
            className={`btn btn-success justify-content-center ms-2`}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

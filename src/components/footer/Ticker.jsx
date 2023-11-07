// import React, { useEffect, useRef } from 'react';
// import './footer.css';

// const Ticker = () => {
//   const healthClaims = [
//     'Dairy Free',
//     'Gluten Free',
//     'Halal',
//     'Lactose Free',
//     'MSG Free',
//     'No Artificial Colours',
//     'No Artificial Flavours',
//     'No Artificial Preservatives',
//     'No Cholesterol',
//     'No Preservatives',
//     'No Trans Fat',
//     'Non GMO',
//     'Organic',
//     'Vegan',
//     'Vegetarian',
//   ];

//   // Ref to the ticker element
//   const tickerRef = useRef(null);

//   // Function to reset the animation
//   const resetAnimation = () => {
//     tickerRef.current.style.animation = 'none';
//     void tickerRef.current.offsetWidth; // Trigger reflow
//     tickerRef.current.style.animation = 'scroll 60s linear infinite';
//   };

//   // Reset the animation when the component mounts
//   useEffect(() => {
//     resetAnimation();
//   }, []);

//   return (
//     <div className="ticker-container">
//       <div className="ticker" ref={tickerRef}>
//         {healthClaims.map((claim, index) => (
//           <div key={index} className="ticker-item">
//             <span className="custom-mdi mdi mdi-check"></span>
//             <a href={`https://www.hunterfoods.com/health-claim/${claim.toLowerCase()}/`}>
//               {claim}
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Ticker;


import React from 'react';
import './footer.css';

const Ticker = () => {

  return (
    <div className="ticker-container">
        <div className='ticker'>
        <span className="custom-mdi mdi mdi-check"></span><a href="#">Dairy Free</a>
    <span className="custom-mdi mdi mdi-check"></span><a href="#">Gluten Free</a>
    <span className="custom-mdi mdi mdi-check"></span><a href="#">Halal</a>
    <span className="custom-mdi mdi mdi-check"></span><a href="#">Lactose Free</a>
    <span className="custom-mdi mdi mdi-check"></span><a href="#">MSG Free</a>
    <span className="custom-mdi mdi mdi-check"></span><a href="#">No Artificial Colours</a>
    <span className="custom-mdi mdi mdi-check"></span><a href="#">No Artificial Flavours</a>
    <span className="custom-mdi mdi mdi-check"></span><a href="#">No Artificial Preservatives</a>
    <span className="custom-mdi mdi mdi-check"></span><a href="#">No Cholesterol</a>
    <span className="custom-mdi mdi mdi-check"></span><a href="#">No Preservatives</a>
    <span className="custom-mdi mdi mdi-check"></span><a href="#">No Trans Fat</a>
    <span className="custom-mdi mdi mdi-check"></span><a href="#">Non GMO</a>
    <span className="custom-mdi mdi mdi-check"></span><a href="#">Organic</a>
    <span className="custom-mdi mdi mdi-check"></span><a href="#">Vegan</a>
    <span className="custom-mdi mdi mdi-check"></span><a href="#">Vegetarian</a>
    </div>
  </div>
  );
};

export default Ticker;




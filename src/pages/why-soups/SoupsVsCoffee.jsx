//-------------Model One -----------
// import React from 'react';
// import './Infographic.css';

// function SoupsVsCoffee() {
//     const containerStyle = {
//         marginTop: '5rem',
//         marginBottom: '5rem',
//       };
    
//     const sectionStyle = {
//         marginBottom: '3rem',
//       };
    
//       const titleStyle = {
//         fontSize: '28px',
//         marginBottom: '1.5rem',
//       };
//   return (
//     <div className="container" style={containerStyle}>
//           <div style={sectionStyle}>
//       <h2 style={titleStyle}>A CUP OF SOUP Vs A CUP OF COFFEE</h2>
//       <div className="infographic-container">
//       <div className="category">
//         <h2>Nutritional Component</h2>
//         <h3>Soups (per 100g)</h3>
//         <h3>Coffee (per 100ml)</h3>
//       </div>
//       <div className="data">
//         <div className="component">
//           <p>Energy (kcal)</p>
//           <p>~40-80 kcal</p>
//           <p>~2 kcal</p>
//         </div>
//         <div className="component">
//           <p>Fats (g)</p>
//           <p>~1-5 g</p>
//           <p>~0.2 g</p>
//         </div>
//         <div className="component">
//           <p>Sugars (g)</p>
//           <p>~1-5 g</p>
//           <p>~0 g</p>
//         </div>
//         <div className="component">
//           <p>Saturates (g)</p>
//           <p>~0.1-2 g</p>
//           <p>~0.1 g</p>
//         </div>
//         <div className="component">
//           <p>Salt (g)</p>
//           <p>~0.5-1.5 g</p>
//           <p>~0.01-0.03 g</p>
//         </div>
//       </div>
//     </div>
//     </div>
//     </div>
//   )
// }

// export default SoupsVsCoffee

//--------Model Two---------

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const InfographicContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  font-weight: bold;
`;

const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: white;
`;

const Title = styled.p`
  font-weight: bold;
`;

function SoupsVsCoffee() {
  return (
    <InfographicContainer
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.5 }}
  >
    <CategoryContainer>
      <Title>A CUP OF SOUP Vs A CUP OF COFFEE</Title>
    
    </CategoryContainer>
    <DataContainer>
    <ComponentContainer>
    <Title>Nutritional Component</Title>
        <Title>Soups (per 100g)</Title>
        <Title>Coffee (per 100ml)</Title>
      </ComponentContainer>
      <ComponentContainer>
        <p>Energy (kcal)</p>
        <p>~40-80 kcal</p>
        <p>~2 kcal</p>
      </ComponentContainer>
      <ComponentContainer>
        <p>Fats (g)</p>
        <p>~1-5 g</p>
        <p>~0.2 g</p>
      </ComponentContainer>
      <ComponentContainer>
        <p>Sugars (g)</p>
        <p>~1-5 g</p>
        <p>~0 g</p>
      </ComponentContainer>
      <ComponentContainer>
        <p>Saturates (g)</p>
        <p>~0.1-2 g</p>
        <p>~0.1 g</p>
      </ComponentContainer>
      <ComponentContainer>
        <p>Salt (g)</p>
        <p>~0.5-1.5 g</p>
        <p>~0.01-0.03 g</p>
      </ComponentContainer>
    </DataContainer>
  </InfographicContainer>
  )
}

export default SoupsVsCoffee
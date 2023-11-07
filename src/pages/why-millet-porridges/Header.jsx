import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@mdi/font/css/materialdesignicons.min.css';
// import './App.css';

function Header() {
    const containerStyle = {
        marginTop: '2rem',
        marginBottom: '5rem',
        backgroundColor:'#F8F8F8',
        padding:'2rem',
      };
    
      const descriptionStyle = {
        fontSize: '18px',
        marginBottom: '2rem',
      };
  return (
    <div className="container" style={containerStyle}>
      <div className="row">
        <div className="col-md-6">
          <h2 className="mb-4">Why Our Millet-Porridges </h2>
          <p style={descriptionStyle}>We Keep your gut healthy is easy with our Millet-Porridge, packed with diverse plant goodness. You'll love their happy taste buds and healthy gut because they are enriched with fibers to boost your mighty microbes.</p>
        </div>
      </div>
    </div>
  )
}

export default Header

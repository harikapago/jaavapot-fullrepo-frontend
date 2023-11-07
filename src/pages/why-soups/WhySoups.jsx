import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@mdi/font/css/materialdesignicons.min.css';

function WhySoups() {
    const containerStyle = {
        marginTop: '2rem',
        marginBottom: '5rem',
        backgroundColor:'#F8F8F8',
        padding:'2rem',
      };
    
      const sectionStyle = {
        marginBottom: '3rem',
      };
    
      const titleStyle = {
        fontSize: '28px',
        marginBottom: '1.5rem',
      };
    
      const listItemStyle = {
        fontSize: '18px',
        marginBottom: '0.5rem',
        paddingLeft: '1.5rem',
        position: 'relative',
      };
    
      const bulletIconStyle = {
        fontSize: '18px',
        position: 'absolute',
        left: '-2rem',
        top: '0.2rem',
        color: '#3498db',
      };
    
      const imageContainerStyle = {
        overflowX: 'scroll',
        whiteSpace: 'nowrap',
      };
    
      const soupImageStyle = {
        width: '200px',
        height: '200px',
        marginRight: '20px',
      };
  return (
    <div className="container" style={containerStyle}>
    <div className="row">
      <div className="col-md-12">
        <h1 className="mb-4">Why Our Millet Soup?</h1>
        <p className="lead">Try Our Soup Over Coffee?</p>
        <p>Though coffee is the easiest choice around the world, a honey habit nobody likes to give up. But caffeine compulsion certainly makes us feel a certain way with its side effects such as insomnia, dehydration, anxiety, etc. Finding alternatives to caffeine consumption is our Intention.</p>
        <p>Why Not Our Millet Soups?</p>
        <p>Certainly, one healthy eating habit may completely change your health eco-system over a period of time. The richness of millet, the freshness of soup, goodness of veggies rejuvenates you and makes the evening a perfect one to transform. Millet soups help with weight concerns and calorie diet consumers. Millet soup is rich in Dietary Fibre, controls Bad cholesterol, and provides micronutrients to the body.</p>
      </div>
    </div>

    <div style={sectionStyle}>
      <h2 style={titleStyle}>Soups for All Occasions</h2>
      <p style={listItemStyle}>
        <i className="mdi mdi-check" style={bulletIconStyle}></i> For breakfast
      </p>
      <p style={listItemStyle}>
        <i className="mdi mdi-check" style={bulletIconStyle}></i> Before Lunch
      </p>
      <p style={listItemStyle}>
        <i className="mdi mdi-check" style={bulletIconStyle}></i> Evening refreshment
      </p>
      <p style={listItemStyle}>
        <i className="mdi mdi-check" style={bulletIconStyle}></i> Dinner soup choice
      </p>
    </div>
  </div>
  )
}

export default WhySoups

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@mdi/font/css/materialdesignicons.min.css';
import SideBarContent from './SideBarContent';
import './super.css'

function SuperFoodsMilletPage() {
  const containerStyle = {
    marginTop: '5rem',
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

  const callToActionStyle = {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center',
  };

  const superfoodStyle = {
    fontSize: '24px',
    marginBottom: '1rem',
  };

  const descriptionStyle = {
    fontSize: '18px',
    marginBottom: '1rem',
  };
  return (
    <div className="container" style={containerStyle}>
      {/* <SideBarContent/> */}
    <div className="row">
      <div className="col-md-12">
        <h1 className="mb-4">Wholegrain Nourishment!</h1>
        <p>An excellent day begins with a tummy full of nutrients and taste. The whole grain of Millet. Remarkably, how much sustainable nutrition and health benefits of wholesome breakfast options can be obtained from such a simple grain? With good reason, it has been referred to as a 'Super Food' throughout its long history. The slow release of energy makes them different from other foods and an excellent source of a balanced diet. The family-friendly meals are designed with natural ingredients and contain no gluten.</p>

        <div style={sectionStyle}>
          <button className="btn btn-primary" style={callToActionStyle}>
            <h2>Your Health Guide</h2>
            <p>Call to action in a box</p>
          </button>
        </div>

        <div style={sectionStyle}>
          <h2 style={superfoodStyle}>A Superfood that’s Super-Tasty!</h2>
          <p style={descriptionStyle}>A humbly grown grain that became super food and super delicious is sensational. Millets are cooked both in savory and sweet. Its versatile nature has got the attention of super moms and super chefs by creating and inventing new state-of-art recipes. A perfect treat for your Tongue, Eyes, and Nose!</p>
        </div>

        <div style={sectionStyle}>
        <h2 style={superfoodStyle}>Tastes Delicious, Smells Good, and Looks Amazing!</h2>
          {/* <p>Tastes Delicious, Smells Good, and Looks Amazing!</p> */}
        </div>

        <div style={sectionStyle} className='ml=5'>
          <p>Stay in the loop!</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default SuperFoodsMilletPage

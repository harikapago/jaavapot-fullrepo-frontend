import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@mdi/font/css/materialdesignicons.min.css';

function FoodForEveryone() {
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
        fontSize: '24px',
        marginBottom: '1rem',
      };
    
      const listItemStyle = {
        fontSize: '18px',
        marginBottom: '0.5rem',
        paddingLeft: '1rem',
        position: 'relative',
      };
    
      const bulletIconStyle = {
        fontSize: '18px',
        position: 'absolute',
        left: '-1.5rem',
        top: '0.2rem',
        color: '#3498db',
      };
  return (
    <div className="container" style={containerStyle}>
      <div className="row">
        <div className="col-md-12">
          <h1 className="mb-4">Food For Everyone</h1>
          <p>We are passionate about creating delicious gluten-free and celiac-friendly breakfast and snack foods grew. We crafted and created an innovative recipe that fits everyone. Realizing that people around the country craved nutritious, versatile, and easy-to-eat and digest foods.</p>

          <div style={sectionStyle}>
            <h2 style={titleStyle}>Nutrient-Rich</h2>
            <p style={listItemStyle}>
              <i className="mdi mdi-check" style={bulletIconStyle}></i> Millet is rich in essential nutrients like magnesium, Phosphorus, and B vitamins. These nutrients are important for bone health, energy production, and overall well-being.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={titleStyle}>Variety</h2>
            <p style={listItemStyle}>
              <i className="mdi mdi-check" style={bulletIconStyle}></i> We offer different toppings and flavorings to cater to various preferences, such as fresh veggies, nuts, sprouts, and seeds.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={titleStyle}>Texture</h2>
            <p style={listItemStyle}>
              <i className="mdi mdi-check" style={bulletIconStyle}></i> We customize the desired texture, like thicker and thinner!
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={titleStyle}>Dietary Restrictions</h2>
            <p style={listItemStyle}>
              <i className="mdi mdi-check" style={bulletIconStyle}></i> Our Millet Porridges are suitable for various dietary needs, including gluten-free, vegetarian, and vegan diets.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={titleStyle}>Infants</h2>
            <p style={listItemStyle}>
              <i className="mdi mdi-check" style={bulletIconStyle}></i> For Infants porridges play a vital role in their daily nourishment.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={titleStyle}>Elderly</h2>
            <p style={listItemStyle}>
              <i className="mdi mdi-check" style={bulletIconStyle}></i> By Choosing whole-grain options by adding nuts and sprouts as a comforting option.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={titleStyle}>Adaptability</h2>
            <p style={listItemStyle}>
              <i className="mdi mdi-check" style={bulletIconStyle}></i> Our Porridges are served hot and cold, and it is both savory and sweet. The way it adopts the tastebuds makes it more accessible to all sets of consumers.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={titleStyle}>Varieties</h2>
            {/* Add content for varieties here */}
          </div>

          <div style={sectionStyle}>
            <h2 style={titleStyle}>Packing</h2>
            {/* Add content for packing here */}
          </div>
          <div className="row mt-5">
        <div className="col-md-12 text-center">
          <h2 className="mb-4">Eating the Right food helps us to heal and makes us better!</h2>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default FoodForEveryone

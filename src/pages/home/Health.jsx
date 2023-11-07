import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@mdi/font/css/materialdesignicons.min.css';

// function Health() {
//     const circleInfographicStyle = {
//         width: '200px',
//         height: '200px',
//         backgroundColor: '#3498db',
//         borderRadius: '50%',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginBottom: '20px',
//       };
    
//       const iconStyle = {
//         fontSize: '48px',
//         color: '#fff',
//       };
    
//       const benefitStyle = {
//         textAlign: 'center',
//         marginBottom: '20px',
//       };
    
//       const benefitIconStyle = {
//         fontSize: '36px',
//         color: '#3498db',
//         marginBottom: '10px',
//       };
    
//       const benefitTitleStyle = {
//         fontSize: '18px',
//         color: '#333',
//       };
    
//       return (
//         <div className="container mt-5" data-aos="fade-up">
//           <div className="row">
//             <div className="col-md-6">
//               <h1 className="mb-4">Millets & Your Health</h1>
//               <div style={circleInfographicStyle}>
//                 {/* Place your MIUI-based infographic here */}
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="row">
//                 <div className="col-md-6">
//                   <div style={benefitStyle}>
//                     <i className="mdi mdi-weight" style={benefitIconStyle}></i>
//                     <h4 style={benefitTitleStyle}>Weight Control</h4>
//                   </div>
//                   <div style={benefitStyle}>
//                 <i className="mdi mdi-emoticon-outline" style={benefitIconStyle}></i>
//                 <h4 style={benefitTitleStyle}>Gluten-free</h4>
//               </div>
//               <div style={benefitStyle}>
//                 <i className="mdi mdi-leaf" style={benefitIconStyle}></i>
//                 <h4 style={benefitTitleStyle}>Vegan</h4>
//               </div>
//             </div>
//             <div className="col-md-6">
//             <div style={benefitStyle}>
//                 <i className="mdi mdi-scale-bathroom" style={benefitIconStyle}></i>
//                 <h4 style={benefitTitleStyle}>Balance Diet</h4>
//               </div>
//               <div style={benefitStyle}>
//                 <i className="mdi mdi-account-child-outline" style={benefitIconStyle}></i>
//                 <h4 style={benefitTitleStyle}>Children</h4>
//               </div>
//                   {/* Other health benefits */}
//                 </div>
//                 {/* Other columns */}
//               </div>
//             </div>
//           </div>
//         </div>
//       );
// }

// export default Health


// import React from 'react';
import './health.css'

const Health = () => {
        const benefitStyle = {
        textAlign: 'center',
        marginBottom: '20px',
      };
            const iconStyle = {
        fontSize: '48px',
        color: '#fff',
      };
          const benefitIconStyle = {
        fontSize: '36px',
        color: '#3498db',
        marginBottom: '10px',
      };
    
  return (
    <section className="home-feature-panel menu-bg" data-aos="fade-in">
      <h3 className="aligncenter">Millets &amp; Your Health</h3>

      <div className="home-feature-panel-content">
        <a href="#" className="home-feature-panel-icon-cta-link">
          <label className="home-feature-panel-icon-cta-label">Fitness</label>
          {/* <i className="mdi mdi-leaf" style={benefitIconStyle}></i> */}
          <img
            width="50"
            height="50"
            src="/wp-content/uploads/2019/12/flahavans-icon-fitness.png"
            className="attachment-fullsize size-fullsize"
            alt="Oats - Fitness"
            decoding="async"
            loading="lazy"
            srcSet="https://www.flahavans.ie/wp-content/uploads/2019/12/flahavans-icon-fitness.png 50w, https://www.flahavans.ie/wp-content/uploads/2019/12/flahavans-icon-fitness-150x150.png 150w, https://www.flahavans.ie/wp-content/uploads/2019/12/flahavans-icon-fitness-750x750.png 750w"
            sizes="(max-width: 50px) 100vw, 50px"
          />
        </a>

        <a href="#" className="home-feature-panel-icon-cta-link">
          <label className="home-feature-panel-icon-cta-label">Children</label>
          <img
            width="50"
            height="50"
            src="/wp-content/uploads/2019/12/flahavans-icon-children.png"
            className="attachment-fullsize size-fullsize"
            alt="Oats - Children"
            decoding="async"
            loading="lazy"
            srcSet="https://www.flahavans.ie/wp-content/uploads/2019/12/flahavans-icon-children.png 50w, https://www.flahavans.ie/wp-content/uploads/2019/12/flahavans-icon-children-150x150.png 150w, https://www.flahavans.ie/wp-content/uploads/2019/12/flahavans-icon-children-750x750.png 750w"
            sizes="(max-width: 50px) 100vw, 50px"
          />
        </a>

        <a href="#" className="home-feature-panel-icon-cta-link">
          <label className="home-feature-panel-icon-cta-label">Balanced<br />Diet</label>
          <img
            width="50"
            height="50"
            src="/wp-content/uploads/2019/12/flahavans-icon-balanceddiet.png"
            className="attachment-fullsize size-fullsize"
            alt="Oats - Balanced Diet"
            decoding="async"
            loading="lazy"
            srcSet="https://www.flahavans.ie/wp-content/uploads/2019/12/flahavans-icon-balanceddiet.png 50w, https://www.flahavans.ie/wp-content/uploads/2019/12/flahavans-icon-balanceddiet-150x150.png 150w, https://www.flahavans.ie/wp-content/uploads/2019/12/flahavans-icon-balanceddiet-750x750.png 750w"
            sizes="(max-width: 50px) 100vw, 50px"
          />
        </a>

        <a href="#" className="home-feature-panel-icon-cta-link">
          <label className="home-feature-panel-icon-cta-label">Gluten<br />Free</label>
          <img
            width="50"
            height="50"
            src="/wp-content/uploads/2019/12/flahavans-icon-glutenfree.png"
            className="attachment-fullsize size-fullsize"
            alt="Oats - Gluten Free"
            decoding="async"
            loading="lazy"
            srcSet="https://www.flahavans.ie/wp-content/uploads/2019/12/flahavans-icon-glutenfree.png 50w, https://www.flahavans.ie/wp-content/uploads/2019/12/flahavans-icon-glutenfree-150x150.png 150w, https://www.flahavans.ie/wp-content/uploads/2019/12/flahavans-icon-glutenfree-750x750.png 750w"
            sizes="(max-width: 50px) 100vw, 50px"
          />
        </a>

        <a href="#" className="home-feature-panel-icon-cta-link">
          <label className="home-feature-panel-icon-cta-label">Vegan</label>
          <img
            width="50"
            height="50"
            // src="/wp-content/uploads/2019/12/flahavans-icon-vegan.png"
            className="attachment-fullsize size-fullsize"
            alt="Oats - Vegan"
            decoding="async"
            loading="lazy"
            srcSet="https://www.flahavans.ie/wp-content/uploads/2019/12/flahavans-icon-vegan.png 50w, https://www.flahavans.ie/wp-content/uploads/2019/12/flahavans-icon-vegan-150x150.png 150w, https://www.flahavans.ie/wp-content/uploads/2019/12/flahavans-icon-vegan-750x750.png 750w"
            sizes="(max-width: 50px) 100vw, 50px"
          />
        </a>

        <a href="#" className="home-feature-panel-icon-cta-link">
          <label className="home-feature-panel-icon-cta-label">Dairy<br />Intolerant</label>
          <img
            width="50"
            height="50"
            src="/wp-content/uploads/2019/12/flahavans-icon-dairyfree.png"
            className="attachment-fullsize size-fullsize"
            alt="Oats - Dairy Free"
            decoding="async"
            loading="lazy"
            srcSet="https://www.flahavans.ie/wp-content/uploads/2019/12/flahavans-icon-dairyfree.png 50w, https://www.flahavans.ie/wp-content/uploads/2019/12/flahavans-icon-dairyfree-150x150.png 150w, https://www.flahavans.ie/wp-content/uploads/2019/12/flahavans-icon-dairyfree-750x750.png 750w"
            sizes="(max-width: 50px) 100vw, 50px"
          />
        </a>

        <a href="#" className="home-feature-panel-icon-cta-link">
          <label className="home-feature-panel-icon-cta-label">Golden<br />Older</label>
          <img
            width="50"
            height="50"
            src="/wp-content/uploads/2019/12/flahavans-icon-oldies.png"
            className="attachment-fullsize size-fullsize"
            alt="Oats - Golden Older"
            decoding="async"
            loading="lazy"
            srcSet="https://www.flahavans.ie/wp-content/uploads/2019/12/flahavans-icon-oldies.png 50w, https://www.flahavans.ie/wp-content/uploads/2019/12/flahavans-icon-oldies-150x150.png 150w, https://www.flahavans.ie/wp-content/uploads/2019/12/flahavans-icon-oldies-750x750.png 750w"
            sizes="(max-width: 50px) 100vw, 50px"
          />
        </a>

        <a className="home-feature-panel-link" href="#">
          <div className="home-feature-panel-link-content">
            <h4 className="h5">Make your choice</h4>
            <span className="cta-link">View All</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Health;

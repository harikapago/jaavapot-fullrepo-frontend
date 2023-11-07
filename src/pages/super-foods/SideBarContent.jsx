import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@mdi/font/css/materialdesignicons.min.css';
// import './SideBarContent.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Superfoods = () => (
  <div>
    <h2>SUPER FOODS</h2>
    {/* Add content for SUPER FOODS */}
  </div>
);

const MilletsTypes = () => (
  <div>
    <h2>MILLET AND THE TYPES</h2>
    {/* Add content for MILLET AND THE TYPES */}
  </div>
);

const YourHealth = () => (
  <div>
    <h2>YOUR HEALTH</h2>
    {/* Add content for YOUR HEALTH */}
  </div>
);

const FAQs = () => (
  <div>
    <h2>FAQs</h2>
    {/* Add content for FAQs */}
  </div>
);

const SideBarContent = () => {
  const containerStyle = {
    marginTop: '5rem',
    marginBottom: '5rem',
  };

  const sidebarStyle = {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '1rem',
  };

  const sectionStyle = {
    marginBottom: '3rem',
  };

  const titleStyle = {
    fontSize: '28px',
    marginBottom: '1.5rem',
  };

  return (
    <div>
      <div className="container" style={containerStyle}>
        <div className="row">
          <div className="col-md-3">
            <div style={sidebarStyle}>
              <h3>Sidebar</h3>
              <ul className="list-unstyled">
                <li><Link to="/superfoods">SUPER FOODS</Link></li>
                <li><Link to="/millets">MILLET AND THE TYPES</Link></li>
                <li><Link to="/yourhealth">YOUR HEALTH</Link></li>
                <li><Link to="/faqs">FAQs</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-9">
            <h1 className="mb-4">Millets Page</h1>

            {/* <Route path="/superfoods" component={Superfoods} />
            <Route path="/millets" component={MilletsTypes} />
            <Route path="/yourhealth" component={YourHealth} />
            <Route path="/faqs" component={FAQs} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarContent;

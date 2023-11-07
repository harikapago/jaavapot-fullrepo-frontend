import Footer from "./components/footer/Footer";
// import BlogPage from "./pages/BlogPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupForm from "./pages/SignupForm";
import LoginScreen from "./pages/LoginPage";
import "../src/assets/css/main.css";
import MenuScreen from "./pages/MenuPage";
import ChefScreen from "./pages/ChefPage";
import ContactScreen from "./pages/ContactPage";
import EventScreen from "./pages/EventPage";
import GalleryScreen from "./pages/blogs/GalleryPage";
import 'bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import OnlineOrderPage from "./pages/OnlineOrderPage";
  
import MyOrderHistoryPage from "./pages/MyOrderHistoryPage";
import { CartProvider } from "./components/ContextReducer";
import { DeliveryAddressProvider } from "./components/AddressContext";
import PaymentSuccess from "./components/PaymentSuccess";

import Header from './components/navbar/Header'
import BlogsPage from "./pages/blogs/BlogsPage";
import WhyPorridgePage from "./pages/why-millet-porridges/WhyPorridgePage";
import SuperFoodsMilletPage from "./pages/super-foods/SuperFoodsMilletPage";
import OfferingsPage from "./pages/offerings/OfferingsPage";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import WhySoupsPage from "./pages/why-soups/WhySoupsPage";
import MilletTypes from "./pages/super-foods/millets-types/MilletTypes";
import PorridgesPage from "./pages/offerings/PorridgesPage";
import SoupsPage from "./pages/offerings/SoupsPage";
import Details from "./pages/offerings/Details";
import OfferingsMainPage from "./pages/offerings/OfferingsMainPage";

function App() {
  return (
    <div>
      <DeliveryAddressProvider>
      <CartProvider>
      <Router>
        <Header/>
        <Routes>
          {/* <Route exact path="/" element={<HomeScreen />} /> */}
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/about" element={<AboutPage/>} />  
          <Route exact path="/whyporridge" element={<WhyPorridgePage/>} />
          <Route exact path="/whysoups" element={<WhySoupsPage/>} />
          <Route exact path="/superfoodsmillet" element={<SuperFoodsMilletPage/>} />
          <Route exact path="/millettypes" element={<MilletTypes/>} />
          {/* <Route exact path="/offerings" element={<OfferingsPage/>} /> */}
          <Route exact path="/offerings-main" element={<OfferingsMainPage/>} />
          <Route exact path="/details/:id" element={<Details/>} />
          <Route exact path="/porridges" element={<PorridgesPage/>} />
          <Route exact path="/soups" element={<SoupsPage/>} />
          <Route exact path="/menu" element={<MenuScreen />} />
          <Route exact path="/events" element={<EventScreen />} />
          <Route exact path="/chefs" element={<ChefScreen />} />
          <Route exact path="/gallery" element={<GalleryScreen />} />
          {/* <Route exact path="/blogscreen" element={<BlogPage />} /> */}
          <Route exact path="/blogspage" element={<BlogsPage />} />
          <Route exact path="/contact" element={<ContactScreen />} />
          <Route exact path="/signup" element={<SignupForm />} />
          <Route exact path="/login" element={<LoginScreen />} />
          <Route exact path="/onlineorder" element={<OnlineOrderPage />} />
          <Route exact path="/orderhistory" element={<MyOrderHistoryPage />} />
          <Route exact path='/paymentsuccess' element={<PaymentSuccess/>} />
        </Routes>
        <Footer />
      </Router>
      </CartProvider>
      </DeliveryAddressProvider>
    </div>
  );
}

export default App;

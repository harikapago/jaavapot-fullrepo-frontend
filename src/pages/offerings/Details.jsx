import React from "react";
import { useParams } from "react-router-dom";
import FoodData from "../../data";

import { useNavigate } from "react-router-dom";
import "./offerings.css";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import OfferingsPage from "./OfferingsPage";

// Initialize Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // const selectedItem = FoodData.find((item) => item.id === parseInt(id));

  // if (!selectedItem) {
  //   return <div>Item not found</div>;
  // }

  // const itemsToShow = [
  //   selectedItem,
  //   ...FoodData.filter((item) => item.id !== selectedItem.id),
  // ];

  const selectedId = id || '1';

 

  // Find the selected item based on the selectedId

  const selectedItem = FoodData.find((item) => item.id === parseInt(selectedId));

 

  // if (!selectedItem) {
  //   return <div>Item not found</div>;
  // }
  // Filter the items to show

  const itemsToShow = [selectedItem, ...FoodData.filter((item) => item.id !== selectedItem.id)];

  return (
    <div>
      <div className="container menu-bg">
        {itemsToShow && itemsToShow.length > 0 && (
          <Swiper
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
              // You can access swiper instance here if needed
            }}
          >
            {itemsToShow.map((foodItem) => (
              <SwiperSlide key={foodItem.id}>
                <div
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    width: "80vw",
                  }}
                >
                  <div className="col-1"></div>
                  <div className="col-3">
                    <div className="painted-heading"><h1>millet</h1></div>
                    
                    <h1>{foodItem.name}</h1>
                    <p>
                      Description of your dish goes here,
                      <br /> Some special ingredients
                    </p>
                    <ul>
                      <li>EXTRA SALMON $15</li>
                      <li>EXTRA RICE $5</li>
                      <li>SODA</li>
                    </ul>
                    <button>Order Now</button>
                  </div>
                  <div className="col-4">
                    <img
                      src={foodItem.image}
                      alt={`Image ${foodItem.id}`}
                      style={{
                        height: "250px",
                        width: "250px",
                        borderRadius: "150px",
                        paddingLeft: "5%",
                        paddingRight: "5%",
                      }}
                    />
                  </div>
                  <div className="col-3">
                    <>
                      <span
                        style={{
                          marginBottom: "5px",
                          backgroundColor: "#e6cfc1",
                          color: "#ed694c",
                          fontWeight: "bold",
                        }}
                      >
                        NUTRITIONAL FACTS
                      </span>
                      <br />
                      <p style={{ marginBottom: "10px", fontWeight: "600" }}>
                        COUNTRY : THIS PLATE HAS
                      </p>
                      <div>
                        <button className="btn1">
                          FAT <br></br>
                          <span className="span1">{foodItem.fat}G</span>
                        </button>
                        <button className="btn1">
                          SODIUM <br></br>
                          <span className="span1">{foodItem.sodium}G</span>
                        </button>
                        <button className="btn1">
                          PROTEIN <br></br>
                          <span className="span1">{foodItem.proteins}G</span>
                        </button>
                        <button className="btn1">
                          CARBS <br></br>
                          <span className="span1">{foodItem.carbs}G</span>
                        </button>
                      </div>
                      <p style={{ marginBottom: "5px", fontWeight: "600" }}>
                        DAILY NUTRIENTS
                      </p>
                      <br />

                      <button
                        className="btn btn2"
                        style={{ padding: "4px", fontSize: "12px" }}
                      >
                        MORE
                      </button>

                      <p>{foodItem.description}</p>
                    </>
                  </div>
                  <div className="col-1"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <div>
        <OfferingsPage />
      </div>
    </div>
  );
};

export default Details;

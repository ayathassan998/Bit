import React, { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import Subscription from "../Subscription/Subscription";
import Product from "../Product/Product";
import { ProductContext } from "./../ProductContext/ProductContext";
import style from "./Home.module.css";
import colors from "./../../Mainstyles/ThemeColors.module.css"


export default function Home() {
  let { sliderImg } = useContext(ProductContext);

  return (
    <>
      {sliderImg.length > 0 ? (
        <div className={`slider ${colors.backGray}`}>
          <div className="container">
            <Carousel>
              {sliderImg.map((slider, index) => (
                <Carousel.Item key={index}>
                  <div>
                    <img className="w-100" src={slider.img} />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      ) : (
        <div className={`loadingSpinner mt-4`}>
          <i className={`fa fa-spinner fa-spin`}></i>
        </div>
      )}

      <div className="container ">
        <div className={`${style.productSection}`}>
          <div className={`${style.productHeader}`}>
            <h3>Explore Products</h3>
          </div>
          <Product></Product>
        </div>
      </div>

      <Subscription></Subscription>
    </>
  );
}

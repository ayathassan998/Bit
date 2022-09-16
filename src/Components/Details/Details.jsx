import React, { useContext } from "react";
import { ProductContext } from "../ProductContext/ProductContext";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import style from "./Details.module.css";
import Product from "./../Product/Product";
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import colors from "./../../Mainstyles/ThemeColors.module.css";

const Details = () => {
  let { productItem } = useContext(ProductContext);

  let [searchParam, setSearchParam] = useSearchParams();
  let [productItemDetails, getproductItemDetails] = useState({});
  let [loading, setLoading] = useState(true);


  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  let currentId = searchParam.get("id");

  let starRating = {
    count: 5,
    color: "#AAAAAA",
    activeColor: "#FFCF09",
    value: productItemDetails[0]?.numberOfStars,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
  };
  const getDetails = async () => {
    let data = productItem;
    let item = data.filter(
      (i) => JSON.stringify(i.id) === JSON.stringify(currentId)
    );
    getproductItemDetails(item);
    setLoading(false);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      {!loading ? (
        <div className="container">
          <div className={`${style.sectionDetails}`}>
            <div className="row">
              <div className={`${style.detailsGallary} col-lg-6 col-12`}>
                <div className="row">
                  <div className="col-2">
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      direction={"vertical"}
                      slidesPerView={4}
                      spaceBetween={10}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="allGallarySwiper"
                    >
                      {productItemDetails[0]?.img.map((item, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <img src={item} />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>

                  <div className="col-10">
                    <Swiper
                      navigation={true}
                      loop={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      thumbs={{ swiper: thumbsSwiper!== null ? thumbsSwiper : 0 }} 
                      
                      modules={[Autoplay, FreeMode, Navigation, Thumbs]}
                      className="viewdImgSwiper"
                    >
                      {productItemDetails[0]?.img.map((item, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <img src={item} />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
              </div>

              <div className={`${style.detailsData} col-lg-6 col-12`}>
                <div
                  className={`${style.apple} d-flex justify-content-between`}
                >
                  <span className={`text-uppercase ${colors.textGray}`}>
                    apple
                  </span>
                  <img src="./images/heart.png" />
                </div>

                <div className={`${style.dataHeader}`}>
                  <h4>{productItemDetails[0]?.name}</h4>
                </div>

                <div className={`d-flex align-items-center mt-3 mb-2`}>
                  <div className={`${style.rate}`}>
                    <ReactStars {...starRating} />
                  </div>

                  <div className={`${style.reviews}`}>
                    <span className={`${colors.textSecondaryGray}`}>
                      ( {productItemDetails[0]?.numberOfReviews} Reviews )
                    </span>
                  </div>
                </div>

                <div className={`${style.dataPrice}`}>
                  <div className={`productprice`}>
                    <div className={`price d-flex justify-content-between`}>
                      {productItemDetails[0]?.inStock == 0 ? (
                        <h5 className={`fw-bolder fs-1 m-0`}>
                          ${productItemDetails[0]?.price}
                        </h5>
                      ) : (
                        <h5 className={`fw-bolder fs-1 m-0 ${colors.textBlue}`}>
                          ${productItemDetails[0]?.price}
                        </h5>
                      )}
                    </div>

                    {productItemDetails[0]?.inStock == 0 ? (
                      <>
                        <span className={`outofstock fs-s ${colors.textRed}`}>
                          outofstock
                        </span>
                      </>
                    ) : (
                      <>
                        <span className={`instock fs-s ${colors.textGreen}`}>
                          instock
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className={`${style.dataPurchase} d-flex  mt-4`}>
                  <div className={`${style.Increase}`}>
                    <i className={`fa-solid fa-plus`}></i>
                  </div>

                  <h4>1</h4>

                  <div className={`${style.deacrese}`}>
                    <i className={`fa-solid fa-minus`}></i>
                  </div>
                </div>

                <div>
                  <div className={`d-flex mt-2`}>
                    <div className={`${style.border} ${style.boxData}`}>
                      <p className={`m-0`}>Full Price</p>
                    </div>
                    <div
                      className={`${style.border} ${style.boxData} ${style.active}`}
                    >
                      <h5 className={`f-bolder m-0`}>Installments</h5>
                    </div>
                  </div>
                </div>

                <div>
                  <div className={`d-flex mt-2`}>
                    <div
                      className={`${style.border} ${style.boxData} ${style.active}`}
                    >
                      <img
                        className={`w-100 f-bolder m-0`}
                        src="./images/CIB_logo.png"
                      />
                    </div>
                    <div className={`${style.border} ${style.boxData}`}>
                      <img className="w-100" src="./images/CIB_logo.png" />
                    </div>
                    <div className={`${style.border} ${style.boxData}`}>
                      <img className="w-100" src="./images/CIB_logo.png" />
                    </div>
                    <div className={`${style.border} ${style.boxData}`}>
                      <img className="w-100" src="./images/CIB_logo.png" />
                    </div>
                  </div>
                </div>

                <div className={`${style.memory}`}>
                  <h4 className={`text-left`}>memory</h4>

                  <div className={`d-flex flex-wrap mt-2`}>
                    <div
                      className={`${style.border} ${style.boxData} ${style.active} mt-1`}
                    >
                      <h5 className={`f-bolder m-0`}>128GB</h5>
                      <h5 className={`m-0`}>$999.00</h5>
                    </div>
                    <div className={`${style.border} ${style.boxData} mt-1`}>
                      <h5 className={`f-bolder m-0`}>256GB</h5>
                      <h5 className={`m-0`}>$999.00</h5>
                    </div>
                    <div className={`${style.border} ${style.boxData} mt-1`}>
                      <h5 className={`m-0`}>512GB</h5>
                      <h5 className={`m-0`}>$999.00</h5>
                    </div>
                    <div className={`${style.border} ${style.boxData} mt-1`}>
                      <h5 className={`f-bolder m-0`}>1TB</h5>
                      <h5 className={`m-0`}>$999.00</h5>
                    </div>
                  </div>
                </div>

                <div className={`${style.color}`}>
                  <h4>color</h4>

                  <div className={`d-flex mt-2`}>
                    <div className={`${style.border} ${style.boxData}`}>
                      <h5 className={`f-bolder m-0`}>Silver</h5>
                      <div className={`${style.circle}`}></div>
                    </div>

                    <div
                      className={`${style.border} ${style.boxData} ${style.active}`}
                    >
                      <h5 className={`f-bolder m-0`}>Sierra Blue</h5>
                      <div className={`${style.circle}`}></div>
                    </div>
                  </div>
                </div>

                <div className={`${style.Insurance}`}>
                  <h4>Insurance</h4>

                  <div className={`d-flex mt-2`}>
                    <div className={`${style.border} ${style.boxData}`}>
                      <p className={`m-0`}>1 year</p>
                      <p className={`m-0`}>$99.00</p>
                    </div>
                    <div
                      className={`${style.border} ${style.boxData} ${style.active}`}
                    >
                      <p className={`m-0`}>2 year</p>
                      <p className={`m-0`}>$159.00</p>
                    </div>
                  </div>
                </div>

                <div className={`${style.addChart}`}>
                  {productItemDetails[0]?.inStock == 0 ? (
                    <button>Add to cart</button>
                  ) : (
                    <button className={` ${colors.backBlue}`}>
                      Add to cart
                    </button>
                  )}
                </div>

                <hr></hr>

                <div className={`${style.notes}`}>
                  <div className={`d-flex`}>
                    <div>
                      <img className="w-100" src="./images/group-file.png" />
                    </div>

                    <p>Free shipping, arrives by Tue, Nov 23</p>
                  </div>

                  <div className={`d-flex`}>
                    <div>
                      <img className="w-100" src="./images/3d-cube.png" />
                    </div>

                    <p>Free 10-day return window starts Dec 26th Details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className={`${style.detailsProduct}`}>
        <Product></Product>
      </div>
    </>
  );
};
export default Details;

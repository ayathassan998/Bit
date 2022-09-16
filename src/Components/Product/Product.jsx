import React, { useContext } from "react";
import { ProductContext } from "../ProductContext/ProductContext";
import { useNavigate } from "react-router-dom";
import style from "./Product.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import colors from "./../../Mainstyles/ThemeColors.module.css";

export default function Product() {
  let { productItem } = useContext(ProductContext);
  let navigate = useNavigate();
  const goToDetails = (id) => {
    navigate({
      pathname: "/Details",
      search: `?id=${id}`,
    });
  };

  return (
    <>
      <div className="product d-lg-block d-none ">
        {productItem.length > 0 ? (
          <Swiper
            slidesPerView={4}
            spaceBetween={0}
            slidesPerGroup={4}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <>
              {productItem.map((product, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`${style.product_item} `}
                    onClick={() => goToDetails(product.id)}
                  >
                    <div className={`${style.imgWrapper}`}>
                      <img className="w-100" src={product.img[0]} alt="" />
                    </div>

                    <div className={`${style.product_body}`}>
                      <h5 className={`${style.body_header}`}>{product.name}</h5>

                      <div className={`${style.productprice}`}>
                        <div
                          className={`${style.price} d-flex justify-content-between`}
                        >
                          {product.priceAfterdiscount === product.price ? (
                            <>
                              <h5 className={`${colors.textRed}`}>
                                ${product.price}
                              </h5>
                              <h5
                                className={`text-decoration-line-through ${colors.textGray}`}
                              >
                                {product.priceAfterdiscount}
                              </h5>
                            </>
                          ) : (
                            <h5>${product.price}</h5>
                          )}
                        </div>

                        {product.inStock === 0 ? (
                          <>
                            {" "}
                            <span className={`outofstock ${colors.textRed}`}>
                              outofstock
                            </span>
                          </>
                        ) : (
                          <>
                            <span className={`instock ${colors.textGreen}`}>
                              instock
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </>
          </Swiper>
        ) : (
          <div className={`loadingSpinner mt-4`}>
            <i className={`fa fa-spinner fa-spin`}></i>
          </div>
        )}
      </div>

      <div className={`${style.product} product d-lg-none d-block `}>
        <div className="row">
          {productItem.length > 0 ? (
            <>
              {productItem.map((product, index) => (
                <div className="col-6" key={index}>
                  <div
                    className={`${style.product_item}`}
                    onClick={() => goToDetails(product.id)}
                  >
                    <div className={`${style.imgWrapper}`}>
                      <img className="w-100" src={product.img[0]} alt="" />
                    </div>

                    <div className={`${style.product_body}`}>
                      <h5 className={`${style.body_header}`}>{product.name}</h5>

                      <div className={`${style.productprice}`}>
                        <div
                          className={`${style.price} d-flex justify-content-between`}
                        >
                          {product.priceAfterdiscount === product.price ? (
                            <>
                              <h5 className={`${colors.textRed}`}>
                                ${product.price}
                              </h5>
                              <h5
                                className={`text-decoration-line-through ${colors.textGray}`}
                              >
                                {product.priceAfterdiscount}
                              </h5>
                            </>
                          ) : (
                            <h5>${product.price}</h5>
                          )}
                        </div>

                        {product.inStock === 0 ? (
                          <>
                            {" "}
                            <span className={`outofstock ${colors.textRed}`}>
                              outofstock
                            </span>
                          </>
                        ) : (
                          <>
                            <span className={`instock ${colors.textGreen}`}>
                              instock
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className={`loadingSpinner mt-4`}>
              <i className={`fa fa-spinner fa-spin`}></i>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

import { createContext, useState } from "react";
import axios from "axios";
import React, { useEffect } from "react";

export let ProductContext = createContext(0);

export function ProductContextProvider(props) {
  let [sliderImg, getSliderImg] = useState([]);
  let [productItem, getproductItem] = useState([]);

  

const getSliderItems=async()=> {
    let { data } = await axios.get("https://63189f2cf6b281877c71eab0.mockapi.io/slider");
    getSliderImg(data);
  }

const getProductItems=async()=> {
    let { data } = await axios.get("https://63189f2cf6b281877c71eab0.mockapi.io/products");
    getproductItem(data);
  }

  useEffect(() => {
    getSliderItems();
    getProductItems();
  },[]);

  return (
    <ProductContext.Provider value={{ sliderImg, productItem }}>
      {props.children}
    </ProductContext.Provider>
  );
}

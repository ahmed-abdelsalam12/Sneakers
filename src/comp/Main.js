import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, initialportal, addtocart } from "./Rudex";
import Navbar from "./Navbar";


const Main = () => {

  const counter = useSelector((state) => state.counter.value);
const pr = useSelector((state) => state.counter.price);
const dispatch = useDispatch();
  return (
    <>
      <div className="main-body">
        <div id="package">
          <div
            id="productCarousel"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="image-product-1.jpg"
                  class="d-block w-100"
                  alt="Shoe 1"
                />
              </div>

              <div class="carousel-item">
                <img
                  src="image-product-2.jpg"
                  class="d-block w-100"
                  alt="Shoe 2"
                />
              </div>

              <div class="carousel-item">
                <img
                  src="image-product-3.jpg"
                  class="d-block w-100"
                  alt="Shoe 3"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="image-product-4.jpg"
                  class="d-block w-100"
                  alt="Shoe 3"
                />
              </div>
            </div>
          </div>

          <div class="thumbs d-flex justify-content-center mt-3">
            <img
              src="image-product-1-thumbnail.jpg"
              data-bs-target="#productCarousel"
              data-bs-slide-to="0"
              class="active"
              alt="Thumb 1"
            />
            <img
              src="image-product-2-thumbnail.jpg"
              data-bs-target="#productCarousel"
              data-bs-slide-to="1"
              alt="Thumb 2"
            />
            <img
              src="image-product-3-thumbnail.jpg"
              data-bs-target="#productCarousel"
              data-bs-slide-to="2"
              alt="Thumb 3"
            />
            <img
              src="image-product-4-thumbnail.jpg"
              data-bs-target="#productCarousel"
              data-bs-slide-to="3"
              alt="Thumb 4"
            />
          </div>
        </div>

        <div className="content">
          <div id="text">
            <p id="p-header">SNEAKER COMPANY</p>
            <h1>Fall Limited Edition Sneakers</h1>
            <p id="p-footer">
              These low-profile sneakers are your perfect casual wear companion
              featuring a durable rubber outer sole,they `ll withstand
              everything the weather can offer.{" "}
            </p>
          </div>
          <div id="add-product">
            <div id="price" style={{ marginTop: "1rem" }}>
              <h5>${pr}.00</h5>
              <p>50%</p>
            </div>
            <del>$250.00</del>

            <div id="b">
              <div id="btn">
                <img
                
                  onClick={() => dispatch(decrement())}
                  id="min"
                  src="icon-minus.svg"
                />
                <h5>{counter}</h5>
                <img
                  onClick={() => dispatch(increment())}
                  id="plus"
                  src="icon-plus.svg"
                />
              </div>
              <div
                id="pay"
                
                onClick={() => dispatch(addtocart())}
              >
                <img id="trash" src="icon-cart.svg" width={"15px"} />
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

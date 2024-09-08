import React from "react";
import "./Project.css";
import Images from "../../Images/Everlane.jpg"
import Red from "../../Images/red-store.jpg"
import Food from "../../Images/food.png"

const Project = () => {
  return (
    <div>
      <div className="project-section" id="project">
        <h1>Project</h1>
        <div className="project-container">
          <div className="project-box">
            <div className="img-box">
              <img src={Images} alt="Everlane" />
            </div>
            <div>
              <p>
                Project Overview : The LADIES AND MENS clothing store website
                project aims to establish a robust online platform that
                showcases and sells the store's diverse collection of apparel
                for both men and women. •Key Features: Product display and
                purchase Easy navigation and search Technology : React.js
                Bootstrap Axios Db.json
              </p>
              <div className="p-btn-box">
                <button className="product-btn">
                  <a
                    href="https://github.com/divyeshborse2002/EVERLANE"
                    target="_blank"
                  >
                    Code
                  </a>
                </button>
                <button className="product-btn">
                  <a href="https://everlanestore.netlify.app" target="_blank">
                    Live
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="project-box">
            <div className="img-box">
              <img src={Red} alt="" />
            </div>
            <div>
              <p>
                Menu Display: A visually appealing and interactive menu
                showcasing food items with descriptions, prices, and images.
                Online Ordering: A secure and efficient online ordering system
                with various payment options and order tracking. Technology :
                Html Css Bootstrap Javascript
              </p>
              <div className="p-btn-box">
                <button className="product-btn">
                  <a
                    href="https://github.com/divyeshborse2002/Food-Web"
                    target="_blank"
                  >
                    Code
                  </a>
                </button>
                <button className="product-btn">
                  <a
                    href="https://soft-lily-c15c9a.netlify.app"
                    target="_blank"
                  >
                    Live
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="project-box">
            <div className="img-box">
              <img src={Food} alt="" />
            </div>
            <div>
              <p>
                Project Overview: To create a comprehensive online platform that
                provides sports enthusiasts with Product Catalog: A wide range
                of sports clothing and equipment, including: Apparel: T-shirts,
                shorts, hoodies, jackets, leggings, and more. Technology : HTML,CSS,Bootstrap
              </p>
              <div className="p-btn-box">
                <button className="product-btn">
                  <a
                    href="https://github.com/divyeshborse2002/red_store"
                    target="_blank"
                  >
                    Code
                  </a>
                </button>
                <button className="product-btn">
                  <a
                    href="https://serene-tiramisu-f41004.netlify.app"
                    target="_blank"
                  >
                    Live
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

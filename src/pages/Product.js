// import React from 'react';

// const Product = () => {
//     return (
//         <div>
//             <h1>Comment</h1>
//         </div>
//     );
// };

// export default Product;

import React, { Component } from "react";
import Slider from "react-slick";
import Slider4 from "../Img/dashboard/image_1.jpg" 
import Slider1 from "../Img/dashboard/image_2.jpg"
import Slider2 from "../Img/dashboard/image_3.jpg"
import Slider3 from "../Img/dashboard/image_4.jpg"


export default class Product extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
      
    };
    const settings2 = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 2,
        dots:true
      };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3><img src={Slider1} width="100%" height="600px"/></h3>
          </div>
          <div>
            <h3><img src={Slider2} width="100%" height="600px"/></h3>
          </div>
          <div>
            <h3><img src={Slider3} width="100%" height="600px"/></h3>
          </div>
          <div>
            <h3><img src={Slider4} width="100%" height="600px"/></h3>
          </div>
          <div>
            <h3> <h3><img src={Slider1} width="100%" height="600px"/></h3></h3>
          </div>
          <div>
            <h3><img src={Slider3} width="100%" height="600px"/></h3>
          </div>
        </Slider>
        {/* <h2>Multiple Rows</h2>
        <Slider {...settings2}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
          <div>
            <h3>10</h3>
          </div>
          <div>
            <h3>11</h3>
          </div>
          <div>
            <h3>12</h3>
          </div>
          <div>
            <h3>13</h3>
          </div>
          <div>
            <h3>14</h3>
          </div>
          <div>
            <h3>15</h3>
          </div>
          <div>
            <h3>16</h3>
          </div>
        </Slider> */}
      </div>
    );
  }
}
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ResponsiveSlider() {
  // Custom Arrow Components with external positioning
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-0 z-10 p-2 -translate-x-1/2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-all"
        aria-label="Previous slide"
        style={{ top: "50%", transform: "translateY(-50%) translateX(-50%)" }}
      >
        <span className="bi bi-caret-left-fill text-2xl text-gray-800"></span>
      </button>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-0 z-10 p-2 translate-x-1/2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-all"
        aria-label="Next slide"
        style={{ top: "50%", transform: "translateY(-50%) translateX(50%)" }}
      >
        <span className="bi bi-caret-right-fill text-2xl text-gray-800"></span>
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: true,
    swipeToSlide: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container  max-w-screen-xl mx-auto mt-18 relative ">
    
      <div className="relative "> 
        <Slider {...settings}>
          {[
            "https://plus.unsplash.com/premium_photo-1672883552341-eaebc9240719?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1661329971924-13892d896c0b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FWhat_is_E_commerce_and_What_are_its_Applications_2_d2eb0d4402.jpg&w=750&q=90",
            "https://d1u4v6449fgzem.cloudfront.net/2020/03/The-Ecommerce-Business-Model-Explained.jpg",
            "https://magnetoitsolutions.com/wp-content/w3-webp/uploads/2020/07/What-is-eCommerce-1024x536.jpgw3.webp"
          ].map((img, index) => (
            <div key={index} className="px-2">
              <div className="rounded-xl  shadow-xl">
                <img 
                  src={img} 
                  alt={`Slide ${index + 1}`} 
                  className="w-full  h-[400px] object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ResponsiveSlider;
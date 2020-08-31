import React from "react";
import Slider from "react-slick";
import axios from "axios";
import { sliderURL } from "../utils/utilities";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    this.getImages();
  }

  carouselImages() {
    return this.state.images.map((val, index) => (
        <img key={index} src={val.images} />
    ));
  }

  carouselTitle() {
    return this.state.images.map((val, index) => (
      <h1 key={index}>{val.title}</h1>
  ));
  }

  getImages() {
    axios
      .get(sliderURL)
      .then((res) => {
        console.log(res.data);
        this.setState({ images: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const slider_settings = {
      dots: false,
      autoplay: true,
      fade: true,
      speed: 500,
      autoplaySpeed: 5000,
      cssEase: "linear",
      pauseOnHover: false,
    };
    return (
        <>
          <div className="text-center position-relative"
               style={{zIndex:100, color:"white", top:200}}
          >
            <Slider {...slider_settings}>
              {this.carouselTitle()}
            </Slider>
          </div>
          <div className="position-relative" style={{top:-100}}>
          <Slider {...slider_settings}>
            {this.carouselImages()}
          </Slider>
          </div>
    <style jsx>{`
      h1 {
        font-size:52pt;
        font-weight: 600;
      }
    `}</style>
        </>
    );
  }
}

export default Carousel;

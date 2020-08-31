import React from "react";
import {Carousel, EmptyData} from "../components";
import { Link } from "react-router-dom";
import { sliderURL } from "../utils/utilities";
import axios from "axios";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: true,
    };
  }

  componentDidMount() {
    axios(sliderURL)
      .then((res) => this.setState({ isConnected: true }))
      .catch((err) => this.setState({ isConnected: false }));
  }

  render() {
    if (!this.state.isConnected)
      return <EmptyData />

    return (
      <div>
        <img
          src="/icon.png"
          alt="icon"
          className="position-absolute z-100"
          width="70px"
          style={{ zIndex: 50, left: "47%", top: 12, translate: "" }}
        />
        <main style={{ overflow: "hidden" }}>
          <div
            className="position-absolute w-100 h-100"
            style={{ background: "rgba(0,0,0,.7)", zIndex: 10 }}
          />
          <Carousel />
          <Link to="/products">
            <button
              type="button"
              className="position-absolute bg-prime-h text-white p-2 px-5"
              style={{ bottom: 200, left: "42%", zIndex: 20 }}
            >
              View products
            </button>
          </Link>
        </main>
        <style jsx global>{`
          body {
            overflow: hidden;
          }
        `}</style>
      </div>
    );
  }
}

export default Index;

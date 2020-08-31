import React, { useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { productURL, price_formatter } from "../utils/utilities";
import { BadgeCategory, EmptyData } from "../components";
import { Form, FormGroup, Input } from "reactstrap";
import { FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";

const getImages = (product) => {
  if (product.images) {
    return product.images.map((v) => <img src={v} />);
  }
};

const getSize = (product) => {
  if (product.stock) {
    return product.stock.map(v => <option value={v.code}>{v.code}</option>)
  }
}

const getStock = (size, product) => {
  if(product.stock) {
    return size == 0
      ? product.stock[0].total
      : product.stock.map(v => {
        if(v.code == size)
          return v.total
      })
  }
}

const badge = (product, token, clickable) => {
  if(product) {
    let arr = product.split(token)
    return arr.map(v => <BadgeCategory text={v.trim()} clickable={clickable} />)
  }
}

const Details = () => {
  let [isConnected, setConnected] = React.useState(true);
  let [product, setProduct] = React.useState({});
  let [size, setSize] = React.useState(null);
  let [stock, setStock] = React.useState(0);
  let {id} = useParams();

  useEffect(() => {
    axios(productURL)
      .then((res) => {
        setConnected(true);
        res.data.map(v => {
          if(v.id == id)
            setProduct({
              name: v.name,
              category: v.category,
              brand: v.brand,
              rating: v.rating,
              colour: v.colour,
              description: v.description,
              price: v.price,
              stock: v.stock,
              images: v.images
            })
        })
      })
      .catch((err) => setConnected(false));
  }, []);

  const slider_settings = {
    dots: true,
    infinite: true,
    speed: 500,
    className: "mx-auto",
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  if(!isConnected)
    return <EmptyData />

  return (
    <main className="mb-5 overflow-hidden">
      <Link to="/products">
        <button
          type="button"
          className="position-absolute m-3 rounded-circle orange"
          style={{
            zIndex: 10,
            width: "40px",
            height: "40px",
            background: "white",
            boxShadow: "0 0 3px rgba(0,0,0,.3)",
          }}
        >
          <FaArrowLeft />
        </button>
      </Link>
      <Slider {...slider_settings}>{getImages(product)}</Slider>
      <div className="d-flex justify-content-between mt-5">
        <div className="pl-3" style={{ width: "40%" }}>
          <h3 className="font-weight-bold">
            {product ? product.name : ""}
          </h3>
          <div
            className="w-100 my-3"
            style={{
              borderBottom: "1px solid lightgrey",
              marginLeft: "-1rem",
            }}
          />
          <p className="text-secondary">
            {product ? product.description : ""}
          </p>
          <div>
            {badge(product.category, ',', false)}
          </div>
        </div>
        <div className="d-flex">
          <div className="text-secondary mr-5">
            <p className="mb-4">Price</p>
            <p className="mb-4">Color</p>
            <p className="mb-4">Size</p>
            <p>Stock</p>
          </div>
          <div>
            <h3 className="orange mb-2">
              IDR {product ? price_formatter(product.price) : ""}
            </h3>
            <div className="mb-3">
              {badge(product.colour, ' ', true)}
            </div>
            <Form>
              <FormGroup>
                <Input
                  type="select"
                  className="col-4"
                  style={{ fontSize: "10pt" }}
                  innerRef={val => setSize(val)}
                  onChange={() => setStock(getStock(size.value, product))}
                >
                  {getSize(product)}
                </Input>
              </FormGroup>
            </Form>
            <p className="mt-3" style={{ fontWeight: "bold" }}>
              {size ? getStock(size.value, product) : ""}
            </p>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="bg-prime-h d-block text-white p-1 px-5 rounded mr-5"
            style={{ fontSize: "14pt", fontWeight: 600 }}
          >
            buy
          </button>
        </div>
      </div>
    </main>
  );
};

export default Details;

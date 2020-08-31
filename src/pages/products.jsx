import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Sidebar,
  BadgeCategory,
  Social,
  OptionButton,
  Card,
  EmptyData,
} from "../components/";
import { FaVenus, FaMars, FaUsers } from "react-icons/fa";
import { productURL, price_formatter, get_category } from "../utils/utilities";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: true,
      man: false,
      women: false,
      products: [],
      category: []
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    axios(productURL)
      .then((res) => this.setState({ products: res.data }))
      .catch((err) => this.setState({ isConnected: false }));
  }

  getCategory() {
    this.state.products.forEach((v) => {
      let arr = v.category;
    });
  }

  listProducts() {
    return this.state.products.map((v) => (
      <Link to={`/product/${v.id}`}>
        <Card
          img={v.images[0]}
          name={v.name}
          price={price_formatter(v.price)}
          brand={v.brand}
        />
      </Link>
    ));
  }

  render() {
    let badge_category = [];
    let categories = get_category(this.state.products);

    categories.forEach((v) => {
      switch (v) {
        case "Man":
        case "Men":
        case "Women":
          break;
        default:
          badge_category.push(<BadgeCategory text={v} clickable={true} />);
      }
    });

    return (
      <main>
        <Sidebar width="300px">
          <input
            id="search"
            type="text"
            className="d-block mx-auto rounded-pill border-0 p-1 px-2 w-100 text-center mt-5"
            style={{
              fontWeight: 300,
              fontSize: "11pt",
            }}
            placeholder="Search product"
          />

          <div className="mt-4" id="gender">
            <OptionButton content={[<FaMars />, <FaVenus />]} />
          </div>
          <div id="category" className="mt-4">
            <h5 className="orange-d">Category</h5>
            <div className="mt-3">
              {badge_category}
            </div>
          </div>
          <div
            className="position-absolute orange"
            style={{ bottom: 30, fontSize: "18pt", left: "25%" }}
          >
            <Social />
          </div>
        </Sidebar>
        <Link to="/form">
          <button
            type="button"
            className="position-fixed bg-prime-h text-white px-2 py-1 pl-3"
            style={{
              right: 0,
              borderRadius: "10px 0 0 10px",
              fontSize: "16pt",
              boxShadow: "0 0 3px rgba(0,0,0,.3)",
              top: 20,
            }}
          >
            <FaUsers />
          </button>
        </Link>
        <div
          id="catalogue"
          style={{ marginLeft: "330px", marginRight: "12px" }}
        >
          {this.listProducts()}
        </div>
        <style jsx global>{`
          body {
            background: #f9f9f9;
          }

          #search {
            background: #f0f0f0;
          }

          #search:focus {
            background: #f7f7f7;
          }
        `}</style>
      </main>
    );
  }
}

export default Products;

const axios = require("axios");
const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || "8000";

const rootURL =
  PORT === "443"
    ? `https://${HOSTNAME}:${PORT}/`
    : `http://${HOSTNAME}:${PORT}/`;

export const productURL = rootURL + "products";
export const formURL = rootURL + "form";
export const sliderURL = rootURL + "slider";

export const getProduct = (arr) =>
  arr.map((v) => {
    return {
      id: v.id,
      name: v.name,
      brand: v.brand,
      description: v.description,
      price: v.price,
    };
  });

export const get_category = (arr) => {
  let processed_array = []
  let category = arr.map((v) => {
    v.category.split(",").forEach(v => processed_array.push(v));
  });

  let result = processed_array.map((v,i) => processed_array[i] = v.trim())
  
  return new Set(result);
};

export const price_formatter = value => {
  let arr = `${value}`.split('')
  let val = ""
  for(let i = 0; i < arr.length; i++) {
    if(arr.length % 3 == 1) {
      if(i%3 == 0 && arr[i+1]) {
        val+=`${arr[i]}.`
        continue;
      }
    } else {
      if((i+1)%3 == 0 && arr[i+1]) {
        val+=`${arr[i]}.`
        continue;
      }
    }
    val+=arr[i]
  }

  return val
}

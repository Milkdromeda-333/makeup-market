import axios from "axios";

const getAllProducts = () => {
    return axios.get("https://makeup-api.herokuapp.com/api/v1/products.json");
};

const getProductsByCategory = (category) => {
    return axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${category}`);
};

const getProductsByTag = (tag) => {
    return axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=${tag.split("-").join("+")}`);
};

const getProductaByBrand = (brand) => {
    return axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand.trim()}`);
};


export { getProductsByCategory, getProductsByTag, getProductaByBrand, getAllProducts };
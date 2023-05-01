import axios from "axios";

let serverIP = "https://server.alvarodominguezmora.com/";

export function getServerURL() {
  let serverURL = "https://server.alvarodominguezmora.com/";

  return serverURL;
}

export function postVisitorDetails() {
  let url = getServerURL() + "api/visitor";

  axios.post(url);
}

export async function getWebInfo() {
  let url = getServerURL() + "api/webinfo";

  return axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function getAllCategories() {
  let url = getServerURL() + "api/categories";

  return axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function getAllProducts() {
  let url = getServerURL() + "api/products";

  return axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function getProductsByCategory(category) {
  let url = getServerURL() + "api/products/category=" + category;

  return axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function getProductsBySubcategory(subcategory) {
  let url = getServerURL() + "api/products/subcategory=" + subcategory;

  return axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function getProductsByFeatureNew() {
  let url = getServerURL() + "api/products/feature=new";

  return axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function getProductsByFeatureTopSellers() {
  let url = getServerURL() + "api/products/feature=topseller";

  return axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

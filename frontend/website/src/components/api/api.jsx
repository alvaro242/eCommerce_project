import axios from "axios";

export function getServerURL() {
  let serverURL = "http://127.0.0.1:8000/";

  return serverURL;
}

axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

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

export async function getSubcategoriesByCategoryName(Category) {
  let url = getServerURL() + "api/subcategories/category=" + Category;

  return axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function getProductByID(id) {
  let url = getServerURL() + "api/products/id=" + id;

  return axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function getProductsByInput(search) {
  let url = getServerURL() + "api/products/search=" + search;

  return axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function login(data) {
  let url = getServerURL() + "api/login";

  return axios
    .post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function signUp(data) {
  let url = getServerURL() + "api/signup";

  return axios
    .post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function addToBasket(data) {
  let url = getServerURL() + "api/addtobasket";

  return axios
    .post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function getUserData() {
  let url = getServerURL() + "api/user";

  return axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function getBasket() {
  let url = getServerURL() + "api/basket";

  return axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function deleteFromBasket(id) {
  let url = getServerURL() + "api/removebasket=" + id;

  return axios
    .delete(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function newOrder(data) {
  let url = getServerURL() + "api/neworder";

  return axios
    .post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function payment(data) {
  let url = getServerURL() + "api/payment";

  return axios
    .post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function myOrders() {
  let url = getServerURL() + "api/myorders";

  return axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function getProductsFromOrder(id) {
  //requires token
  let url = getServerURL() + "api/order=" + id;

  return axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}

export function getCategoriesSuccess(categories) {
  return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories };
}

export function getCategories() {
  return function (dispatch) {
    let url = "https://api.collectapi.com/news/getNews?country=tr&tag=general";
    return fetch(url, {
      headers: {
        "content-type": "application/json",
        authorization: "apikey 7dWTHs1Pp6DKCiSia4bBYA:5K2uRl77olGdaWBdLADzRp",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data.result));
  };
}

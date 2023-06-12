import * as actionTypes from "./actionTypes";

export function getBlogsSuccess(blogs) {
  return { type: actionTypes.GET_BLOGS_SUCCESS, payload: blogs };
}

export function addToBlog(blogs) {
  return { type: actionTypes.ADD_TO_BLOGS_DETAILS, payload: blogs };
}
  
export function getBlogs(category) {
  return function (dispatch) {
    let url = "https://api.collectapi.com/news/getNews?country=tr&tag=general";
    if (category) {
      url = url + "?source=" + category;
    }
    return fetch(url, {
      headers: {
        "content-type": "application/json",
        authorization: "apikey 7dWTHs1Pp6DKCiSia4bBYA:5K2uRl77olGdaWBdLADzRp",
      },
    })
      .then((response) => response.json())
      .then((data) => dispatch(getBlogsSuccess(data.result)));
  };
}

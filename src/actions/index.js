import axios from "axios";

export const getCards = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      dispatch({ type: "GET_CARDS", payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: "GET_CARDS_FAILED", payload: "Get Cards Failed!" });
    });
};

export const getCurrentPost = (id) => (dispatch) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
      dispatch({ type: "GET_CURRENT_POST", payload: response.data });
    })
    .catch((error) => {
      dispatch({
        type: "GET_CURRENT_POST_FAILED",
        payload: "Get Current Post Failed!",
      });
    });
};

export const getRecentTwoPosts = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      dispatch({ type: "RECENT_TWO_POSTS", payload: response.data });
    })
    .catch(function (error) {
      dispatch({ type: "RECENT_TWO_POSTS_ERROR", payload: error });
    });
};

export const getComments = (id) => (dispatch) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(function (response) {
      dispatch({ type: "GET_COMMENTS", payload: response.data });
    })
    .catch(function (error) {
      dispatch({ type: "GET_COMMENTS_ERROR", payload: error });
    });
};

export const addComment = (postId, comment) => (dispatch) => {
  axios
    .post(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
      comment
    )
    .then((response) => {
      dispatch({ type: "ADD_COMMENT", payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: "ADD_COMMENT_FAILED", payload: error});
    });
};

export const setBlogRouter = (text) => {
  return { type: "BLOG_ROUTER", payload: text };
};

export const searchBlog = (text) => {
  return { type: "SEARCH_BLOG", payload: text };
};

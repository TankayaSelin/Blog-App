const initial_state = {
  posts: [],
  currentPost: {},
  postId: "",
  comments: [],
  recentTwoPosts: [],
  getPostsFailed: "",
  blogRouter: "", // Home/Blog/...
  page: 1,
  searchBlog: [],
  postsTemplate: [], //for searching blogs
  addCommentStatus: false,
};

export const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case "GET_CARDS":
      return {
        ...state,
        posts: action.payload,
        postsTemplate: action.payload,
      };
    case "GET_CURRENT_POST":
      return {
        ...state,
        currentPost: action.payload,
        postId: action.payload.id,
        blogRouter: action.payload.title,
      };
    case "RECENT_TWO_POSTS":
      return {
        ...state,
        recentTwoPosts: [
          ...state.recentTwoPosts,
          action.payload.slice(
            action.payload.length - 2,
            action.payload.length
          ),
        ],
      };
    case "GET_COMMENTS":
      return { ...state, comments: action.payload };
    case "BLOG_ROUTER":
      return { ...state, blogRouter: action.payload };
    case "SEARCH_BLOG":
      return {
        ...state,
        posts: state.postsTemplate.filter((post) =>
          post.title.includes(action.payload)
        ),
      };
    case "ADD_COMMENT":
      return { ...state, addCommentStatus: true };
    case "ADD_COMMENT_FAILED":
      return { ...state, addCommentStatus: false };
    case "GET_CURRENT_POST_FAILED":
      return { ...state, getPostsFailed: action.payload };
    case "RECENT_TWO_POSTS_ERROR":
      return { ...state, getPostsFailed: action.payload };
    case "GET_CARDS_FAILED":
      return { ...state, getPostsFailed: action.payload };
    default:
      return state;
  }
};

import PostData from "../../components/Post/PostData";

const instantState = {
    posts: PostData
}

const GetData = (state = instantState, action) => {
    switch (action.type) {
        case "CREATE_POST":
          return { ...state, posts: [...state.posts, action.payload] };
        default:
          return state;
      }
}
export default GetData;

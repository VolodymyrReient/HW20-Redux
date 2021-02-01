export default function setPost(post) {
  return {
    type: "CREATE_POST",
    payload: post
  }
}
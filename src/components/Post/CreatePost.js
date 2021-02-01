import React from "react";
import { connect } from 'react-redux';

import Post from "./Post";

function CreatePost({postsData}) {
    return (
        <div className="flex">
            {postsData.map((el, i) => {return(<Post {...el} key={i}/>)})}
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
      postsData: state.GetData.posts,
    };
  };

export default connect(mapStateToProps)(CreatePost);

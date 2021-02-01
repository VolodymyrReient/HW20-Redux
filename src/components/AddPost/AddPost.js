import { React, Component } from "react";
import { connect } from 'react-redux';

import SetPost from "../../actions/SetPost";
import "./add_post.css"

const Anakin = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const Chewbacca = "https://pbs.twimg.com/profile_images/927273787766210560/gX3Fueuy_400x400.jpg" ;
const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const day = dd + "/" +  mm;

class AddPost extends Component {
constructor(props) {
    super(props);
    this.state = {
        avatar: Anakin,
        content: "",
        image: "",
        nickname: "@dart_vader",
        name: "Anakin Skywalker",
        date: day,
        message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);    
    this.takeVal = this.takeVal.bind(this);    
}


handleChange(event) {
    if(event.target.value === "Chewbacca") {
        this.setState({ 
            avatar: Chewbacca, 
            nickname: "@chewbacca",
            name: "Chewbacca",
        });

    } else if (event.target.value === "Anakin") {
        this.setState({ 
            avatar: Anakin, 
            nickname: "@dart_vader",
            name: "Anakin Skywalker", 
        });
    }
  }
  onChangeHandler(e) {  
    this.setState({  
      [e.target.name]: e.target.value  
    });  
  }
takeVal() {
    if (this.state.content !== "" && this.state.image  !== "") {
        return (this.props.SetPost({ 
            avatar: this.state.avatar,
            content: this.state.content,
            image: this.state.image,
            nickname: this.state.nickname,
            name: this.state.name,
            date: this.state.date,
            
        }), this.setState({
            content: "",
            image: "",
            message: ""
        }));
    } else {
        return this.setState({message: "Enter the message"})
    }
    
}
render() {
    return (
        <div className="form-wrapper">
            {this.state.message}
        <div>
            <div className="avatar"><img src={this.state.avatar} alt="avatar"/></div>
        </div>
        <div>
       <div className="select">
        <select onChange={this.handleChange}>
            <option value="Anakin">Anakin Skywalker</option>
            <option value="Chewbacca">Chewbacca</option>
        </select>
        </div>
        <div className="input"><input value={this.state.content} type="text" placeholder="Enter a text" name="content"
        onChange={this.onChangeHandler}/></div>
        <div className="input"><input value={this.state.image} type="text" placeholder="Image link" name="image"
        onChange={this.onChangeHandler}/></div>
      
        </div>
        <button onClick={this.takeVal}>Submit</button>
        
        </div>
    );
}
}

const mapDispatchToProps = (dispatch) => ({
    SetPost: (post) => dispatch(SetPost(post)),
  })

export default connect(null, mapDispatchToProps)(AddPost);
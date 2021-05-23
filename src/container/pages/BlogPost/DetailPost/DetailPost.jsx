import React, {Component, Fragment} from "react";
import "./DetailPost.css";
import axios from "axios";

class DetailPost extends Component{
    state = {
        post: {
            title: "",
            body: "",
        }
    }
    componentDidMount() {
        let id = this.props.match.params.postID;

        axios.get(`http://localhost:3004/posts/${id}`)
            .then((response) => {
                let post = response.data;

                this.setState({
                    post: {
                        title: post.title,
                        body: post.body,
                    }
                })
            })
    }

    render(){
        return(
            <Fragment>
              <p>Detail Post</p>
              <hr/>
              <p className={"title-post"}>{this.state.post.title}</p>
              <p className={"body-post"}>{this.state.post.body}</p>
            </Fragment>
        );
    }
}

export default DetailPost;

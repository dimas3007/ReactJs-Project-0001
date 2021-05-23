import React, {Component, Fragment} from "react";
import "./BlogPost.css";
import Post from "../../../component/Post/Post";
import axios from "axios";
import API from "../../../service";

class BlogPost extends Component{
    state = {
        post: [],
        formBlogPost: {
            userId: 1,
            id: 1,
            title: "",
            body: "",
        },
        isUpdate: false,
        comments: [],
    }

    // Mengambil data dari API
    getPostAPI = () => {
        API.getNewsBlog().then(response => {
            this.setState({
                post: response
            })
        })
        API.getComments().then(response => {
            this.setState({
                comments: response
            })
        })
    }

    // Method untuk menyimpan data baru oleh API
    postDataToAPI = () => {
        API.postNewBlog(this.state.formBlogPost).then(response => {
            this.getPostAPI();
            this.setState({
                formBlogPost: {
                    userId: 1,
                    id: 1,
                    title: "",
                    body: "",
                },
            })
        })
    }

    // Method untuk Mengupdate data melalui API
    putDataToAPI = () => {
        API.updateNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id)
            .then(response => {
                this.getPostAPI();
                this.setState({
                    isUpdate: false,
                    formBlogPost: {
                        userId: 1,
                        id: 1,
                        title: "",
                        body: "",
                    },
                })
            })
    }

    // Method untuk Menghapus data melalui API
    handleRemove = (data) => {
        API.deleteNewsBlog(data)
            .then(response => {
                console.log(response)
                this.getPostAPI();
            })
            .catch(err => {
                console.log(err)
            })
    }

    // Method untuk menmpilkan data sebelumnya pada form
    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true,
        })
    }

    // Mendapatkan Data dari Form
    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();

        if (!this.state.isUpdate){
            formBlogPostNew["id"] = timestamp;
        }

        formBlogPostNew[event.target.name] = event.target.value;

        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            // Jika Mau liat perubahan dari setelah diinput, liatnya lewat cllback disini
            // console.log(this.state.formBlogPost)
        })
    }

    handelSubmit = () => {
        if (this.state.isUpdate){
            this.putDataToAPI()
        } else {
            this.postDataToAPI();
        }
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-posts/${id}`);
    }

    componentDidMount() {
        // Pemanggilan API menggunakan Fetch default by ES6
        // fetch("https://jsonplaceholder.typicode.com/posts")
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     });

        this.getPostAPI();
    }

    render(){
        return(
            <Fragment>
                <p className="section-title">Blog Post</p>
                <hr/>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.formBlogPost.title} name={"title"} placeholder={"add title"} onChange={this.handleFormChange}/>
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" value={this.state.formBlogPost.body} cols="30" rows="10" placeholder={"add blog Content"} onChange={this.handleFormChange}></textarea>
                    <button className={"btn-submit"} onClick={this.handelSubmit}>Simpan</button>
                </div>
                {/*{*/}
                {/*    this.state.comments.map(comment => {*/}
                {/*        return <p>{comment.name} - {comment.email}</p>*/}
                {/*    })*/}
                {/*}*/}
                {
                    this.state.post.map(post => {
                        return <Post
                            key={post.id}
                            data={post}
                            remove={this.handleRemove}
                            update={this.handleUpdate}
                            goDetail={this.handleDetail}
                        />
                    })
                }
            </Fragment>
        );
    }
}

export default BlogPost;

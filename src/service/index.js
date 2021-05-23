import Get from "./Get";
import Post from "./Post";
import Put from "./Put";
import Delete from "./Delete";

// POST
const postNewBlog = (data) => Post("posts", false, data);

// GET
const getNewsBlog = () => Get("posts?_sort=id&_order=desc", false)
const getComments = () => Get("comments", true)

// Put
const updateNewsBlog = (data, id) => Put(`posts/${id}`, false, data)

// Delete
const deleteNewsBlog = (id) => Delete(`posts/${id}`, false)

const API = {
    postNewBlog,
    updateNewsBlog,
    deleteNewsBlog,
    getNewsBlog,
    getComments,
}

export default API;


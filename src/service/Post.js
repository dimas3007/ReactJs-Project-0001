import axios from "axios";
import {OnlineRoot, RootPath} from "./Config";

const Post = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(`${root ? OnlineRoot : RootPath}/${path}`, data)
            .then((response) => {
                resolve(response);
            }, (err) => {
                reject(err);
            })
    })

    return promise;
}

export default Post;

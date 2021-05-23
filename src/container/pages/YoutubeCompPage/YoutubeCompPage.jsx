import React, {Component, Fragment} from "react";
import YoutubeComp from "../../../component/YoutubeComp/YoutubeComp";

class YoutubeCompPage extends Component{
    render(){
        return(<Fragment>
                <p>Youtube Component</p>
                <hr/>
                <YoutubeComp
                    time={"7.12"}
                    title={"Judul 1"}
                    desc={"Deskripsi 1"}/>
                <YoutubeComp
                    time={"8.11"}
                    title={"Judul 2"}
                    desc={"Deskripsi 2"}/>
                <YoutubeComp
                    time={"12.12"}
                    title={"Judul 3"}
                    desc={"Deskripsi 3"}/>
                <YoutubeComp
                    time={"3.14"}
                    title={"Judul 4"}
                    desc={"Deskripsi 4"}/>
                <YoutubeComp/>
            </Fragment>
        );
    }
}

export default YoutubeCompPage;

import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) => {
    return (
        <div className={"youtube-wrapper"}>
            <div className={"img-thumb"}>
                <img src="https://i.ytimg.com/vi/sBws8MSXN7A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRsKPmNLIViU-e9sdsdHwPlyqCGQ" alt=""/>
                <p className={"time"}>{props.time}</p>
            </div>
            <p className={"title"}>{props.title}</p>
            <p className={"desc"}>{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time: "00.00",
    title: "Title Default",
    desc: "Desc Default",
}

export default YoutubeComp;

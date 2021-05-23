import React, {Component, Fragment} from 'react';
import CardProduct from "./CardProduct/CardProduct";
import "./Product.css";
import {connect} from "react-redux";
import {GlobalConsumer} from "../../../context/context";

class Product extends Component {

    // Karena udah pake redux di comment aaja
    // state = {
    //     order: 4,
    //     name: "Dimas"
    // }
    //
    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render(){
        return(
            <Fragment>
                <p>Product Component</p>
                <hr/>
                <div className={"header"}>
                    <div className={"logo"}>
                        <img src="https://i.ytimg.com/vi/sBws8MSXN7A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRsKPmNLIViU-e9sdsdHwPlyqCGQ" alt=""/>
                    </div>
                    <div className={"troley"}></div>
                    <div className={"count"}>{this.props.state.totalOrder}</div>
                </div>
                {/*<CardProduct onCounterChange={(value) => this.handleCounterChange(value)}/>*/}
                <CardProduct/>
            </Fragment>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// Redux
// export default connect(mapStateToProps)(Product);

export default GlobalConsumer(Product);

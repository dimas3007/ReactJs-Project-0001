import React, {Component} from 'react';
import Counter from "./Counter";

class CardProduct extends Component {
    render(){
        return(
            <div className={"card"}>
                <div className={"img-thumb-prod"}>
                    <img src="https://i.ytimg.com/vi/sBws8MSXN7A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRsKPmNLIViU-e9sdsdHwPlyqCGQ" alt=""/>
                </div>
                <p className={"product-title"}>Kue Balok Anada</p>
                <p className={"product-price"}>Rp. 34.000</p>
                <Counter/>
                {/*<Counter onCounterChange={(value) => this.props.onCounterChange(value)}/>*/}
            </div>
        );
    }
}

export default CardProduct

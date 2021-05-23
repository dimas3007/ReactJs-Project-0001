import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import ActionType from "../../../../redux/reducer/globalActionType";
import {GlobalConsumer} from "../../../../context/context";


class Counter extends Component{

    /*
        Karena sudah menggunakan Redux jadi di comment aja yg dibawah ini, jadi menggunakan props global
    */
    // state = {
    //     order: 4,
    //     name: "Dimas"
    // }

    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue);
    // }

    // handPlus = () => {
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {
    //         this.handleCounterChange(this.state.order);
    //     })
    // }
    //
    // handMinus = () => {
    //     if (this.state.order > 0) {
    //         this.setState({
    //             order: this.state.order - 1
    //         }, () => {
    //             this.handleCounterChange(this.state.order);
    //         })
    //     }
    // }


    render() {
        console.log(this)
        return(
            <Fragment>
                <div className={"counter"}>
                    <button className={"minus"} onClick={() => this.props.dispatch({type: "MINUS_ORDER"})}>-</button>
                    <input type="text" value={this.props.state.totalOrder}/>
                    <button className={"plus"} onClick={() => this.props.dispatch({type: "PLUS_ORDER"})}>+</button>
                </div>
            </Fragment>
        )
    }
}

// // State Global
// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }
//
// // Dispatch
// const mapDispatchToProps = (dispatch) => {
//     return {
//         handPlus: () => dispatch({type: ActionType.PLUS_ORDER}),
//         handMinus: () => dispatch({type: ActionType.MINUS_ORDER}),
//     }
// }

// Redux
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default GlobalConsumer(Counter);

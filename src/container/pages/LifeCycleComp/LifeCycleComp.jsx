import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {GlobalConsumer} from "../../../context/context";

class LifeCycleComp extends Component{
    constructor (props) { // LifeCycle Sering di Pakai
        super(props); // Karena nge Extends Component jadi harus pakai super
        this.state = {
            count: 1
        }
        console.log("constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps");
        return null;
    }

    componentDidMount() { // LifeCycle Sering di Pakai
        console.log("componentDidMount");
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     })
        // }, 5000)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) { // Haruskah Component Di upadate, bisa melakukan kondisi disini jika diperlukan
        console.group("shouldComponentUpdate");
        console.log("nextProps: ", nextProps); // Jika ada Props diupdate
        console.log("nextState: ", nextState); // Jika ada State diupdate
        console.log("this state: ", this.state)
        console.log("nextContext: ", nextContext); // Jika ada Context diupdate
        console.groupEnd();
        if (nextState.count >= 4){
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) { // LifeCycle Sering di Pakai
        console.log("componentDidUpdate");
    }

    componentWillUnmount() { // LifeCycle Sering di Pakai
        console.log("componentWillUnmount");
    }

    ChangeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){ // LifeCycle Sering di Pakai
        return(
            <Fragment>
                <p>Lifecycle Component</p>
                <hr/>
                <button className={"btn"} onClick={this.ChangeCount}>Component Button {this.state.count}</button>
                <hr/>

                <p>Total Order: {this.props.state.totalOrder}</p>
            </Fragment>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder,
//     }
// }

// Redux
// export default connect(mapStateToProps)(LifeCycleComp)

export default GlobalConsumer(LifeCycleComp);

import React, {Component, useEffect, useState} from "react";

// class Hooks extends Component{
//     state = {
//         count: 0,
//     }
//
//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1,
//         })
//     }
//
//     componentDidMount() {
//         document.title = `Title Change : ${this.state.count}`;
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         document.title = `Title Change : ${this.state.count}`;
//     }
//
//     componentWillUnmount() {
//         document.title = `ReactJS adalah pesion ku`;
//     }
//
//     render(){
//         return(
//             <div>
//                 <p>Nilai Saya saat ini adalah : {this.state.count}</p>
//                 <hr/>
//                 <button onClick={this.onUpdate}>Update Nilai</button>
//             </div>
//         )
//     }
// }

const Hooks = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Lifecycle mount, update
        document.title = `Title Change : ${count}`;

        // jika ada return maka memanggil Lifecycle willUnmount
        return () => {
            document.title = `ReactJS adalah pesion ku`;
        }
    })

    return (
        <div>
            <p>Nilai Saya saat ini adalah : {count}</p>
            <hr/>
            <button onClick={() => setCount(count + 1)}>Update Nilai</button>
        </div>
    )
}

export default Hooks;

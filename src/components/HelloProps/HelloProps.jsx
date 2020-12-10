import React from 'react';
import './HelloProps.scss'
// export default class HelloProps extends React.Component {
//     render() {
//         return (
//             <p>Hello {this.props.textToShow}</p>
//         )
//     }
// }

export default function HelloProps(props) {
    return (
        <p className="c-hello-props">Hello {props.textToShow}</p>
    )
}

//import from react library
import React from 'react';

//class Values that extends React.component and with render method, -->> return value-->. props value with onClick botton
export default class Values extends React.Component {
    render() {
        return (
            <div>
                <div>{this.props.values}</div>
                <button onClick={this.props.onGetValues}>Get Values!</button>
            </div>
        );
    }
}
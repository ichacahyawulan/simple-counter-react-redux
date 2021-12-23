import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generateText } from '../actions';

class Text extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.text}</h2>
                <p>
                    <button onClick={() => this.props.generateText("HELLO!")}> TEXT </button>
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        text: state.text
    }
}

const mapDispatchToProps = dispatch => ({
    generateText: (val) => { dispatch(generateText(val)); },
});
export default connect(mapStateToProps, mapDispatchToProps)(Text)
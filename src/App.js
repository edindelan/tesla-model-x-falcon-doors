import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {openFalconDoors, closeFalconDoors} from './actions';
import './App.css';
import './frames.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            pageY: 0
        };
    }

    mouseDownEvent = () => {
        this.refs.square.addEventListener('mousemove', this.mouseMoveEvent);
    };

    touchStart = () => {
        document.body.style.overflow = "hidden";
        this.refs.square.addEventListener('touchmove', this.mouseMoveEvent);
    };

    touchEnd = () => {
        document.body.style.overflow = "auto";
        this.refs.square.removeEventListener('mousemove', this.mouseMoveEvent);
    };

    touchCancel = () => {
        document.body.style.overflow = "auto";
        this.refs.square.removeEventListener('mousemove', this.mouseMoveEvent);
    };

    mouseMoveEvent = (e) => {
        const pageY = e.touches ? e.touches[0].pageY : e.pageY;
        if(this.state.pageY > pageY){
            this.props.openFalconDoors(pageY);
        } else if (this.state.pageY < pageY){
            this.props.closeFalconDoors(pageY);
        }
        this.setState({pageY});
    };

    mouseUpEvent = () => {
        this.refs.square.removeEventListener('mousemove', this.mouseMoveEvent);
    };

    mouseLeaveEvent = () => {
        this.refs.square.removeEventListener('mousemove', this.mouseMoveEvent);
    };

    render() {
        const {frame} = this.props.state;
        return (
            <div className="App">
                <h1>Tesla Model X Falcon doors</h1>
                <h3>React / Redux</h3>
                <div ref="square"
                     onMouseDown={this.mouseDownEvent}
                     onMouseUp={this.mouseUpEvent}
                     onMouseLeave={this.mouseLeaveEvent}
                     onTouchStart={this.touchStart}
                     onTouchEnd={this.touchEnd}
                     onTouchCancel={this.touchCancel}
                     className="square">
                     <img className={"frame-full" + frame} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcwAAAF3AQMAAAASGOlzAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAACxJREFUeNrtwQENAAAAwqD3T20ON6AAAAAAAAAAAAAAAAAAAAAAAAAAAAC4N1ZtAAES7A1ZAAAAAElFTkSuQmCC" alt=""/>
                     <div className="overlay"></div>
                     <img className="drag-icon" src={require('../public/assets/drag.png')} alt=""/>
                </div>
                <a className="source_link" target="_blank" href="https://github.com/edindelan/Tesla-Model-X-Falcon-doors">Source code - GitHub</a>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {state};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        openFalconDoors,
        closeFalconDoors
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {openFalconDoors, closeFalconDoors} from './actions';
import frames from './frames';
import './App.css';

class App extends Component {
    pageY = 0;

    mouseDownEvent = () => {
        this.refs.square.addEventListener('mousemove', this.mouseMoveEvent);
    };

    mouseMoveEvent = (e) => {
        if(this.pageY > e.pageY){
            this.props.openFalconDoors(e.pageY);
        } else if (this.pageY < e.pageY){
            this.props.closeFalconDoors(e.pageY);
        }
        this.pageY = e.pageY;
    };

    mouseUpEvent = () => {
        this.refs.square.removeEventListener('mousemove', this.mouseMoveEvent);
    };

    mouseLeaveEvent = () => {
        this.refs.square.removeEventListener('mousemove', this.mouseMoveEvent);
    };

    render() {
        const {frame, direction, pageY} = this.props.state;
        return (
            <div className="App">
                <div ref="square"
                     onMouseDown={this.mouseDownEvent}
                     onMouseUp={this.mouseUpEvent}
                     onMouseLeave={this.mouseLeaveEvent}
                     className="square">

                    <div className="overlay"></div>
                    <img className="drag-icon" src={require('../public/assets/drag.png')} alt=""/>
                    {/*<img className="frame" src={require('../public/assets/frames/full' + this.state.frame + '.jpg')} alt=""/>*/}
                    <img className="frame" src={frames[frame]} alt=""/>
                </div>
                {direction !== '' && <h3>{direction} - {pageY}</h3>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        openFalconDoors,
        closeFalconDoors
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

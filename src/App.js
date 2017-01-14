import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        pageY: 0,
        direction: '',
        frame: 41
    }

    mouseDownEvent = () => {
        this.refs.square.addEventListener('mousemove', this.mouseMoveEvent);
    };

    mouseMoveEvent = (e) => {
        let direction = '';
        const pageY = e.pageY;
        if(pageY < this.state.pageY){
            direction = 'UP';
            this.setState({direction});
            if(this.state.frame < 41 && pageY % 3 === 0){
                this.setState({frame: this.state.frame + 1})
            }
        } else if(pageY > this.state.pageY){
            direction = 'DOWN';
            this.setState({direction});
            if(this.state.frame > 1 && pageY % 3 === 0){
                this.setState({frame: this.state.frame - 1})
            }
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
    return (
      <div className="App">
        <div ref="square"
             onMouseDown={this.mouseDownEvent}
             onMouseUp={this.mouseUpEvent}
             onMouseLeave={this.mouseLeaveEvent}
             className="square">

          <div className="overlay"></div>
           <img className="drag-icon" src={require('../public/assets/drag.png')} alt=""/>
          <img className="frame" src={require('../public/assets/frames/full' + this.state.frame + '.jpg')} alt=""/>
        </div>
          {this.state.direction !== '' && <h3>{this.state.direction} - {this.state.pageY}</h3>}
      </div>
    );
  }
}

export default App;

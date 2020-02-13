import React, {Component} from 'react';
import ModalView from './ModalView';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Main: []
    };
  };
  element = () => (
    <div>
        <center><h1 className = "align-items-center">Social Feed</h1></center>
        <ModalView/>
    </div>
  );
  render() {
    return this.element();
  }
}
export default Main;

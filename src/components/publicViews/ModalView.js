import React, {Component} from 'react';
import 'antd/dist/antd.css';
import StepsView from './StepsView';

class ModalView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        feedUrl: '',
        postsNumber: 0,
        updateInterval: 0,
        searchBool: false
      };
  };

  handleChangeFeedUrl = (feedUrl) =>{
    feedUrl.preventDefault();
    this.setState({feedUrl: feedUrl.target.value});
  }

  handleChangePostsNumber = (postsNumber) =>{
    postsNumber.preventDefault();
    this.setState({postsNumber: postsNumber.target.value});
  }

  handleChangeUpdateInterval = (updateInterval) =>{
    updateInterval.preventDefault();
    this.setState({updateInterval: updateInterval.target.value});
  }

  searchHandle = event =>{
    event.preventDefault();
    if(this.feedUrl !== "" && this.postsNumber !== 0 && this.updateInterval !== 0){
      this.setState( { searchBool: true});
    }
  }

  element = () => (
    <div>
      <form onSubmit={this.searchHandle}>
        <div className="row justify-content-center">
          <div className="row">
            <div className="col col-lg-6">
              <h5 className="modal-input">Feed URL</h5>
            </div>
            <div className="col col-lg-6">
              <input type="text" className="form-control" onChange={this.handleChangeFeedUrl} required
                placeholder="Feed URL"/>
            </div>
          </div>
          <br/>
          <br/>
          <div className="row">
            <div className=" col col-lg-6">
              <h5 className="modal-input">Number of posts to display</h5>
            </div>
            <div className=" col col-lg-6">
              <input type="text" className="form-control" onChange={this.handleChangePostsNumber} required
                placeholder="Number of posts to display"/>
            </div>
          </div>
          <div className="row">
            <div className=" col col-lg-6">
              <h5 className="modal-input">Update interval (in seconts)</h5>
            </div>
            <div className="col col-lg-6">
              <input type="text" className="form-control" onChange={this.handleChangeUpdateInterval} required
                placeholder="Update interval"/>
            </div>
          </div>
        </div>
        <br/>
        <div className="row justify-content-center">
          <button className="btn btn-primary btn-sm"  type="submit" >Search</button>
        </div>
      </form>
      <StepsView feedUrl={this.state.feedUrl} postsNumber={this.state.postsNumber} updateInterval={this.state.updateInterval}
        searchBool={this.state.searchBool}/>
    </div>
  );
  render() {
    return this.element();
  }
}
export default ModalView;

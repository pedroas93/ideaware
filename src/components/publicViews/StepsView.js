import React, {Component} from 'react';
import FetchResponses from "../../models/FetchResponses";

class StepsView extends Component {
  intervalID = 0;
  cont=0;
  constructor(props) {
      super(props);
      this.state = {
        date: false,
        postDetail: [],
        splitArray: []
      };
      this.assignDataToArry = this.assignDataToArry.bind(this);
    }
  
  componentWillReceiveProps() {
    if(this.props.feedUrl !== "" && this.props.postsNumber > 0 && this.props.updateInterval > 0  ){
      fetch(this.props.feedUrl, {
        method: "GET"
      })
        .then(FetchResponses.processResponse)
        .then(response => {    
          this.splitArrayMethod(response)
        })
        .catch(this.setState({loading: true}),
          FetchResponses.errorResponse);
    }
  }

  splitArrayMethod = event =>{
    this.cont = event.length
    let newArrayPostDetail = []
    this.intervalID = setInterval(() => {
      this.assignDataToArry(event, newArrayPostDetail);
    }, this.props.updateInterval*1000);
  }

  assignDataToArry = (event, newArrayPostDetail) =>{
    
    let provitionalPostsNumber = this.props.postsNumber
    if(this.cont === event.length){
      for(let i = 0; i < provitionalPostsNumber; i++){
        newArrayPostDetail = [...newArrayPostDetail, event[this.cont-1]]
        this.cont--
      }
      this.setState({postDetail: newArrayPostDetail});
    }else{
      newArrayPostDetail = [...this.state.postDetail, event[this.cont-1]]
      newArrayPostDetail.shift() 
      this.setState({postDetail: newArrayPostDetail});
      this.cont--;
    }
    if(this.cont === 1) 
    {
        clearInterval(this.intervalID);
    }
  }

  element = () => (
    <div className="row justify-content-center">
      <div className="col-11 -col-lg-10 col-xl-8">
        {this.state.postDetail.map( index => {
          return <div key={index.id}>
            <div className="whitePanel register">
              <div className="row">
                <div className="col-md-4">
                  {new Date (index.created_at).toUTCString()}
                </div>
                <div className="col-md-6">
                  <p>{index.user.name}</p>
                </div>
              </div>
              <hr/>
              <h3>{index.text}</h3>
            </div>
          </div>
        })}
      </div>
    </div>
  );
  render() {
    if(this.props.searchBool){
      return this.element();
    }else{
      return null
    }
  }
}
export default StepsView;

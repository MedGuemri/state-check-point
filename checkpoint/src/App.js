import React , {Component} from 'react';
import MyImg from "./me.jpg";

class App extends Component{
  state = {
    Person  : {
      fullName : "Mouhamed Guemri",
      bio : "React student",
      imgSrc : MyImg,
      profession : "Student"
    },
    show : false,
    mountedAt: new Date()
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountedAt: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  clickMe = () => {
    this.setState(prevstate =>({show : !prevstate.show}))
  }
  render(){
   
    return(
      <div style={{marginTop: "150px" , marginLeft: "45%"}}>
        <button onClick={this.clickMe}> 
                 {this.state.show ? 'Hide Content' : 'Show Content'}
        </button>
        {(this.state.show && (
          <div>
            <h2>{this.state.Person.fullName}</h2>
            <p>{this.state.Person.bio}</p>
             <img src = {this.state.Person.imgSrc} alt={this.state.Person.fullName} style={{height : "150px" , width : "150px"}}></img> 
            <p>{this.state.Person.profession}</p>
          </div>
        ))}
          <p>Mounted at: {this.state.mountedAt.toLocaleTimeString()}</p>
      </div>
    );
  }
}
export default App




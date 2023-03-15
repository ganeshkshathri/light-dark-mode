import { Component } from "react";
import './index.css'
class LightDarkMode extends Component{
    state={
        isButtonCLicked:false
    }
    changeView=()=>{
        this.setState(prevState=>({isButtonCLicked:!prevState.isButtonCLicked}))
    }
    render(){
        let {isButtonCLicked} = this.state
        let abc
        let bcColor
        if(isButtonCLicked === false){
            abc="Light Mode"
            bcColor ="dark-mode"
        }else{
            abc="Dark Mode"
            bcColor="light-mode"
        }
        return(
            <div className="app-container">
                <div className={"container "+(bcColor)}>
                    <h1 className="heading">Click to Change the Mode</h1>
                    <button className="button" onClick={this.changeView}>{abc}</button>
                </div>
            </div>
        )
    }
}
export default LightDarkMode
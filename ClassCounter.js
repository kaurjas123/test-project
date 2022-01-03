import React ,{Component} from 'react'
class ClassCounter extends Component{
 constructor(){
     super()
     this.state={
         count:0
     }
 }

 clickHandler=()=>{
     this.setState({
         count:this.state.count+1
     })
 }
    render(){
        return(
            <div>
                <h1>
                    <button onClick={this.clickHandler}>Counter-{this.state.count}</button>
                </h1>
            </div>
        )
    }
}
export default ClassCounter;
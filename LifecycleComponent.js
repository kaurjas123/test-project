import React,{Component} from 'react'
class LifecycleComponent extends Component{
    constructor(){
        super()
        this.state={
           name:'Jasmine'
        }
        console.log('Constructor Component')
    }
 static getDerivedStateFromProps(){
     console.log('getDerivedFromProps Component')
     return null;
 }
    componentDidMount(){
     console.log('componentDidMount Component')
    }

    
    render(){
        console.log('Render Component')
        return(
        <div>
            <h1>Lifecycle Component</h1>
            
        </div>
        )
    }
}
export default LifecycleComponent;
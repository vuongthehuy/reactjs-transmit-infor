import React,{Component} from 'react';
import Children from './children';
class Parent extends Component{
    constructor(props){
        super(props);
        this.state = {
            num1: 0,
            num2: 1000
        };
    }
    Increase = () =>{
        this.setState({
            num1: this.state.num1 + 1
        });
    }
    Receive=(num)=>{
        this.setState({
            num2: num
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.Increase}>Increase</button>
                <Children
                passNum1= {this.state.num1} 
                Receive= {(num)=>this.Receive(num)}   
            />
            <p>Data from children: {this.state.num2}</p>
            </div>
            
        );
    }
}
export default Parent;
import React,{Component} from 'react';

class Children  extends Component{
    constructor(props){
        super(props);
        this.state = {
            number: 999
        };
    }
    Reduction = () =>{
        this.setState({
            number: this.state.number-1
        });
        this.props.Receive(this.state.number);
    }
    render(){
        return(
            <div>
                <p>Data from Parent : {this.props.passNum1}</p>
                <hr/>
                <button onClick={this.Reduction}>Reduction form children</button>
            </div>
        );
    }
}
export default Children;
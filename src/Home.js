import {Component} from 'react';

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {logedTime: 3}
    }
    
    indead =()=>{
        let id =[]

        for (let index = 0; index <400; index++) {
            id.push(index)
            
        }
        return(id.map((event)=><p>{event}</p>))
    }

    render(){
        return(
        <div>
            <h1 className="text-3xl">Home</h1>
            <p>{this.props.name}</p>
            <br/>
            <h3>{this.state.logedTime}</h3>
            <br/>
            {this.indead()}
            <button className='bg-[#1da1f2] text-white ...' onClick={()=>{this.setState({logedTime:"changed"})}}>click for update time</button>
        </div>
        
        )
    }
}
  
  
export default Home;
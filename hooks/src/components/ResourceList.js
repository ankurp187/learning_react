import React,{useState,useEffect} from 'react';
import axios from 'axios';


/*
class ResourceList extends React.Component{

  state = {resources:[]};

  async componentDidMount(){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
    this.setState({resources:response.data});
  }

  async componentDidUpdate(prevProps){
    if(prevProps.resource !== this.props.resource){
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
      this.setState({resources:response.data});
    }
  }


  render(){
    return (<div>{this.state.resources.length}</div>);
  }
}
*/


const ResourceList = ({resource}) => {

  const [resources,setResources] = useState([]);

  const fetchResource = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
  },[resource]);


    return (
      <ul>{resources.map(record => <li key={record.id}>{record.title}</li>)}</ul>
    );
}
export default ResourceList;

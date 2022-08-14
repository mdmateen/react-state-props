import { Component, React } from 'react';
class ClassState extends Component {
    constructor() {
        super();
        this.state = {
            myName: "Mateen",
            age: 23,
            salary: 2600,
        };
    }
     changAge = () => {
        this.setState({age: 31});
      }
    render() {

        const propsName = this.props.myName;
        return <>Class Component <br />

        <h1>Using props : {propsName}</h1>
            My Name is {this.state.myName}<br />
            Age is {this.state.age}<br />
            <button type="button" onClick={this.changAge} >Change Age</button>
        </>
    }
}
export default ClassState;
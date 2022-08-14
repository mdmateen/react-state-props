import logo from './logo.svg';
import './App.css';
import ClassState from './components/ClassState';
import { MyNameDisplay } from './components/MyNameDisplay';

function App() {

  const myName="Mohammad Mateen";
  const employee ={
    name:'Athar',
    age:31,
    
  }
  return (
   
   <>
     {/*  <h1 className='App'>My name {myName}
      <ClassState     myName='Mateen' />
      
      
      
      </h1> */}
      <MyNameDisplay emp={employee} />

   </>
  );
}

export default App;

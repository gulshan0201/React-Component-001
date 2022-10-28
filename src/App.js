import './App.css';
import Comp1 from './Components/Comp1';
import Comp2 from './Components/Comp2';
import Comp3 from './Components/Comp3';
import Hobbies from './Components/Hobbies';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Comp1 />
      <hr className='one'></hr>
      <Comp2 />
      <hr className='one'></hr>
      <Comp3 />
      <Skills />
      <Hobbies />
    </div>
  );
}

export default App;

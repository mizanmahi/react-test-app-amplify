import './App.css';
import PrimaryButton from './components/PrimaryButton';
import Greet from './components/Greet';

function App() {
   const name = import.meta.env.VITE_TEST_ENV;
   return (
      <div className='App'>
         <h1> Hello {name || 'No Name'} </h1>
         <Greet />
         <PrimaryButton />
      </div>
   );
}

export default App;

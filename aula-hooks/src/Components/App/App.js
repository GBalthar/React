import './App.css';
import Counter from '../Counter/Counter';
import DynamicCounter from '../DynamicCounter/DynamicCounter';

function App() {
  return (
    <>
      <h1>Contador</h1>
      <Counter/>
      <h1>Contador Dinâmico</h1>
      <DynamicCounter/>
    </>
  );
}

export default App;

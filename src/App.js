import Counter from './components/Counter';

function App() {
  return (
    <div>
     <Counter min={0} max={20} inverter/>
     <Counter min={0} max={5} inverter/>
    </div>
  );
}

export default App;


import './App.css';
import Counter from './component/Counter';
import classes from './component/Counter.module.css'

function App() {
  return (
    <div className={classes.app}>
      <Counter />
    </div>
  );
}

export default App;

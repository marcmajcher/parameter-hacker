import './App.css';
import { corp } from './data/data';
import Corp from './Corp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Parameter Hacker
      </header>
      <Corp corp={corp} />
    </div>
  );
}

export default App;

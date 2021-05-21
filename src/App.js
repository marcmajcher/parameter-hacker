import './App.css';
import { corp } from './data/data';
import Corp from './components/Corp';
import Header from './components/Header';

function App() {
  return (
    <div className="app noselect">
      <Header />
      <Corp corp={corp} />
    </div>
  );
}

export default App;

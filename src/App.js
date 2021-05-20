import './App.css';
import { corp } from './data/data';
import Corp from './Corp';
import Header from './Header';

function App() {
  return (
    <div className="app noselect">
      <Header />
      <Corp corp={corp} />
    </div>
  );
}

export default App;

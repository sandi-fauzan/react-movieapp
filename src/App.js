import Navigasi from './components/Navbar'
import Main from './components/main/Main'
import Trending from './components/list/Trending'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigasi />
      <Main />
      <Trending />
    </div>
  );
}

export default App;

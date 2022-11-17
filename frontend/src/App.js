import { BrowserRouter } from 'react-router-dom';
import Main from './Components/Main'

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/'>
        {<Main />}
      </BrowserRouter>
    </div>
  );
}

export default App;

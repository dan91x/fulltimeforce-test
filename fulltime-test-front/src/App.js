import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import MainContent from './components/MainContent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <MainContent/>
      </header>
    </div>
  );
}

export default App;

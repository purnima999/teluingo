import logo from './logo.svg';
import './App.css';
import RouteCmp from './routes';
import {store} from './store/store';
import { Provider } from 'react-redux';  
import './css/custom.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouteCmp />
      </div>
    </Provider>
  );
}

export default App;

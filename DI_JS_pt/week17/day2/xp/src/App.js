import './App.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './redux/reducer';
import Counter from './components/Counter';
// import logger from './redux-logger'
import myMiddleWare from './redux/middlewares';
import thunk from 'redux-thunk';

 
const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <Counter/>
      </header>
    </div>
    </Provider>
  );
}

export default App;
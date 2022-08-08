import 'antd/dist/antd.min.css'
import './App.scss';
import Index from './components';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Index />
      </div>
    </Provider>
  );
}

export default App;

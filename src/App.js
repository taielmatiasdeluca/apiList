import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Header from './componets/header/Header'
import Content from './componets/Content/Content';







function App() {

  return (
    <div className={`App`}>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
  
    <BrowserRouter >
        <Header/>
        <Content />
    </BrowserRouter>
    </div>

  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Fib } from './Fib';
import { OrderPage } from './OtherPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <div style={{ margin: '50px' }}>
          <h1>
            <Link to={'/'}>Home</Link>
          </h1>
          <h1>
            <Link to={'/order-page'}>Order pageee</Link>
          </h1>
        </div>
        <Routes>
          <Route path='/' element={<Fib />}></Route>
          <Route path='/order-page' element={<OrderPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

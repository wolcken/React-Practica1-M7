import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../containers/Layout';
import '../styles/App.css';
import Default from '../pages/Default';
import Products from '../pages/Products';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Form from '../pages/Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/default' element={<Default />} />
            <Route path='/products' element={<Products />} />
            <Route path='/form' element={<Form />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
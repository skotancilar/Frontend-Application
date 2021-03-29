import ProductPage from './ProductPage';
import Navigation from './Navigation'
import MainMenu from './MainMenu';
import Header from './Header';
import './App.scss';
import '../sass/base/_utilities.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts, fetchTRL } from '../actions';
import Loading from './Loading';



function App() {
  const product = useSelector((state) => state?.product);
  const trl = useSelector(state => state?.trl)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchTRL());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="row ">
          <Navigation />
          <Switch>
            {
              product.status && trl.status === 200 ?
                <Route exact path="/product" component={ProductPage} />
                :
                <Loading />
            }
            <Route path="/" component={MainMenu} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
// cd node_modules/cors-anywhere/lib/&& npm run start
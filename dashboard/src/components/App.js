import './App.scss';
import ProductPage from './ProductPage';
import Navigation from './Navigation'
import Header from './Header';
import '../sass/base/_utilities.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="row ">
          <Navigation />
          <Switch>
            <Route exact path="/product" component={ProductPage} />
            <Route path="/">
              <section>
                <h1>Welcome</h1>
              </section>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
// cd Frontend-Application/dashboard/node_modules/cors-anywhere/lib/&& npm run start
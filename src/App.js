import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Products from './components/products';
import Home from './components/home';

class App extends Component {
  
  state = {
    products: []
  }

  componentDidMount() {

    fetch('http://localhost:8080/categories')
      .then(res => res.json())
      .then((data)=>{
        console.log(data);
      })



    fetch('http://localhost:8080/categories?id=16244')
    .then(res => res.json())
    .then((data) => {
      this.setState({ products: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link to={'/'} className="nav-link"> Home </Link>
            </li>
            <li>
              <Link to={'/products'} className="nav-link">Products</Link>
            </li>
            <li>
              {/* <Link to={'/about'} className="nav-link">About</Link> */}
            </li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              {/* <Route path='/contact' component={Contact} /> */}
              {/* <Route path='/about' component={About} /> */}
              
              <Route
                path='/products'
                render={() => (
                  <Products products={this.state.products} />
                )}
              />
          </Switch>
        </div>
      </Router>
      // <Products products={this.state.products} />
    );
  }
}

export default App;
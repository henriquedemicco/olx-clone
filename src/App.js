import './App.css';
import Home from './pages/Home';
import NewAd from './pages/NewAd';
import Navbar from './components/Navbar';
import Footer from  './components/Footer';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/anuncio" component={NewAd} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

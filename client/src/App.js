import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Details from './components/Details';
import Creation from './components/Creation';
import About from './components/About';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTypes } from './reducer/actions';

function App() {
  /* const types = useSelector((state) => state.types)
  const dispatch = useDispatch()
  
  useEffect(() => {
      if(!types.length) dispatch(getTypes())
  }, []) */

  return (
    <div className="App">
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/home/:id' render={ ({match}) => <Details id={match.params.id}/> }/>
      <Route exact path='/create' component={Creation}/>
      <Route exact path='/about' component={About}/>
    </div>   
  );
}

export default App;

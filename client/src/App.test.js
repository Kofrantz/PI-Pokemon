import { render, screen } from '@testing-library/react';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './App.js';
import Home from './components/Home.jsx'
import Creation from './components/Creation.jsx'
import About from './components/About.jsx'
import LandingPage from './components/LandingPage.jsx'

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

//beforeEach(() => render(<BrowserRouter><Nav /></BrowserRouter>))

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

/* describe('With React Testing Library', () => {

  it('Shows "Hello world!"', () => {
    store = mockStore(initialState)
    const { getByText } = render(<Provider store={store}><App /></Provider>)

    expect(getByText('Hello Worldd!')).not.toBeNull()
  })
}) */

describe('App Routes', () => {
  const initialState = {output:10}
  const mockStore = configureStore()
  let store,wrapper

  beforeAll(() => {
    const component = render(<BrowserRouter><App/></BrowserRouter>);
    pathMap = component.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
      console.log(pathMap)
    })
    
    it('Deberia renderizar Home en la ruta /home', () => {
    const { getByText } = render(<Provider store={store}><App /></Provider>)
    store = mockStore(initialState)
    expect(getByText('Hello World!')).not.toBeNull()
    //expect(pathMap['/home']).toBe(Home)
  })
})
describe('NavBar test', () => {

  xit('Debe tener un titulo', () => {
    expect(screen.queryByText(/pikaboss/i)).toBeInTheDocument()
  })
  xit('Debe tener un input de busqueda', () => {
    expect(screen.queryByText(/pikaboss/i)).toBeInTheDocument()
  })
})



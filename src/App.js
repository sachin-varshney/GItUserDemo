import React from 'react';
import './App.css';
import Route from './Route'
import { BrowserRouter } from 'react-router-dom'


const App = () => (
  <BrowserRouter>
    <Route/>
  </BrowserRouter>
)

export default App;
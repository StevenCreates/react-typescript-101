import React from 'react';
import './App.css';
import Types from './components/Types'
import Functions from './components/Functions';
import { Head } from './components/Head';

function App() {
  return (
    <div className="App">
        <Head title="Hello" isActive={true}/>
        <Types /> 
        <Functions />
    </div>
  );
}

export default App;

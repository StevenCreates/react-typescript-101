import React from 'react';
import './App.css';
import Types from './components/Types'
import Functions from './components/Functions';
import { Head } from './components/Head';
import { Button } from './components/Button';

function App() {
  return (
    <div className="App">
      <Head title="Hello" />
      <Types />
      <Functions />
      <Button onClick={() => console.log('hi ello')} />
    </div>
  );
}

export default App;

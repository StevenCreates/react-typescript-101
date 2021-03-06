import React from 'react';
import './App.css';
import Types from './components/Types'
import Functions from './components/Functions';
import { Head } from './components/Head';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ReducerButtons } from './components/ReducerButtons';

function App() {
  return (
    <div className="App">
      <Head title="Hello" />
      <Types />
      <Functions />
      <Button onClick={() => console.log('hi ello')} />
      <Input />
      <ReducerButtons />
    </div>
  );
}

export default App;

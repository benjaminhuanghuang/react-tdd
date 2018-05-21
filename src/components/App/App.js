import React from 'react';

import './App.css';
import Calculator from '../Calculator/Calculator';

const App = () => {
    return (
      <div className="app-container">
        <Calculator />
      </div>
    );
  }

export default App;

App
Warning: React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookForms from './components/BookForms';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BookList />
      <BookForms />
    </div>
  );
}

export default App;

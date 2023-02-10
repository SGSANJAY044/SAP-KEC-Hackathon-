import React from 'react'
import './App.css';
import AllRoutes from './AllRoutes';
import ReactPDF from '@react-pdf/renderer';
import MyDocument from './Pages/MyDocument';
ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
function App() {
  return (
    <AllRoutes/>
  );
}

export default App;

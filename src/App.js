import React from 'react'
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import History from './components/History';
import AddTransactions from './components/AddTransactions';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <History />
        <AddTransactions />
      </div>
    </div>
  );
}

export default App;

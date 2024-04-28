import React from 'react'
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import History from './components/History';
import AddTransactions from './components/AddTransactions';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <History />
        <AddTransactions />
      </div>
    </GlobalProvider>
  );
}

export default App;

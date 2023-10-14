import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import ExpenseList from './Expense-Tracker/components/ExpenseList'
import { useState } from 'react'
import ExpenseFiler from './Expense-Tracker/components/ExpenseFilter'
import ExpenseForm from './Expense-Tracker/components/ExpenseForm'

type ExpenseDataType = {
  id: number;
  description: string;
  amount: number;
  category: string;
}

function App() {

  const [ selectedCategory, setSelectedCategory ] = useState('');
 
  const [expenses, setExpenses] = useState<ExpenseDataType[]>([]);

  const visibleExpenses = selectedCategory ? expenses.filter((e) => e.category === selectedCategory) : expenses;

  return (
    <div className='px-4'>
      <h1 className='my-3 text-black'>Expense Tracker</h1>
      <div className="mb-5">
        <ExpenseForm onSubmit={(newExpense) => setExpenses([...expenses, {...newExpense, id: expenses.length+1}]) }/>
      </div>
      <div className="my-3">
        <ExpenseFiler onSelectCategory={(category) => setSelectedCategory(category)}/>
      </div>
      <ExpenseList 
        expenses={visibleExpenses} 
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id)) }/>
    </div>
  )
}

export default App

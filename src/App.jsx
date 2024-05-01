import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees=useLoaderData();
  const [coffees, setCoffees]=useState(loadedCoffees)

  return (
    <>
      <h1 className='text-6xl font-bold text-purple-600'>CRUD Operation</h1>
      <h1 className='mt-10 text-9xl font-bold'>{coffees.length}</h1>
      <div className='grid grid-cols-2 gap-4 mt-10'>
        {
          coffees.map(coffee=><CoffeeCard 
            key={coffee._id} 
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            ></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App

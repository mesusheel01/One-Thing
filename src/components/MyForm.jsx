import React from 'react'
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'

const MyForm = ({msg,handleChange,handleSubmit}) => {
  return (
    <div>
      <h1 className='text-3xl sm:text-6xl font-bold text-center'> What is your "One-ThingToDo"?</h1>
      <form
        onSubmit={handleSubmit}
        className='flex ring-2 m-8 rounded-xl ring-slate-200 focus-within:ring-teal-600 focus-within:ring-offset-4 bg-slate-200 dark:ring-slate-800 bg-slate-200 ring-offset-slate-200 dark:ring-offset-slate-800'
      >
        <input type='text'
          className='bg-inherit rounded-2xl font-sans text-slate-800 py-2 px-6 focus:outline-none text-xl sm:text-2xl placeholder:text-slate-400 caret-teal-600 apperance-none w-full '
          placeholder='Enter One-Thing'
          autoFocus
          maxLength='64'
          value={msg}
          onChange={handleChange}
        />
        <button
          className='bg-inherit rounded-md font-sans text-slate-800 py-2 pr-6 focus:outline-none focus:text-teal-600 hover:text-teal-600
          pointer-events-none'
        > 
          <ArrowRightCircleIcon className='h-11 w-11'/>
        </button>
      </form>
    </div>
  )
}

export default MyForm

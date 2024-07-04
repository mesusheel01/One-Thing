import React from 'react'
import CustomButton from './CustomButton'
const OneThing = ({msg, handleCompletedThing}) => {
  return (
    <div className='flex gap-4'>
        <h1 className='text-3xl sm:text-6xl font-bold text-center'>{msg}</h1>
        <CustomButton 
            text="Mark Done"
            handleCompletedThing={handleCompletedThing}
        />
    </div>
  )
}

export default OneThing

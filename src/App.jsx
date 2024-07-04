import React, { useState } from 'react'
import MyForm from './components/MyForm'
import OneThing from './components/OneThing'
import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti();

const getSuccessMsg = ()=>{
  const message = ["Congrats!", "Great job!", "Don’t ya feel great?!", "Up, up, and up!", "Um…okay", "Did you though?", "Don’t feel like you tried your best…", "FAget about it!"]
  return message[Math.floor(Math.random() * message.length)]
}

const App = () => {

  const [msg, setMsg] = useState("")
  const [isCompleted, setIsCompleted] = useState(true)

  const handleChange = (e)=>{
    setMsg(e.target.value)
  }
  
  function handleSubmit(e){
    e.preventDefault();
    setIsCompleted(false)
    console.log('Form submitted', msg);
  }

  const handleCompletedThing = async (e)=>{
    e.target.setAttribute('disabled', true)
    setMsg(getSuccessMsg());
    await jsConfetti.addConfetti({
      emojis:['💕','🎆','☠️','🌞','🙏🏼','☑️','😶‍🌫️','🤡','🥳','☠️','👻','👾','😻','😽','🐔','🦄','🫏','🐲','🐕‍🦺','🐆','🐩']
    });
    e.target.removeAttribute('disabled')
    setMsg("");
    setIsCompleted(true);
  }

  return (
    <div className='grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-500 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200' >
    <div className='grid place-items-center gap-8 m-8'>
    {isCompleted && <MyForm 
      msg={msg}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    /> }
    {
      !isCompleted && <OneThing msg={msg}
        handleCompletedThing={handleCompletedThing}
      />
    }
    </div>
    </div>
  )
}

export default App

import { useRef } from 'react'
import './App.css'

function App() {
  const messagesContainerRef = useRef()

  const handleInput = (e) => {
    if (e.keyCode === 13) {
      messagesContainerRef.current.innerText += `${e.target.value}\n`
      e.target.value = ''
    }
  }

  return (
    <>
      {/* <img src="walmart.jpg" alt="" width={100} height={100} /> */}
      <div className='content-container'>
        <h1>Seller/Supplier platform</h1>

        <p>A chatbot to find and learn about all the help offerings of advertising your product effortlessly with Walmart!</p>

        <h2>Input</h2>
        <p>What would you like help with today?</p>

        <div className='prompt-container'>
          <textarea name="inputBox" id="input-prompt" cols="100" rows="10" onKeyDown={handleInput}></textarea>
          <button id="submit-btn">Ask the bot!</button>
        </div>
        <p>*press return key to start the conversation!</p>
      </div>

      <div ref={messagesContainerRef} className='messages-container'></div>
    </>
  )
}

export default App

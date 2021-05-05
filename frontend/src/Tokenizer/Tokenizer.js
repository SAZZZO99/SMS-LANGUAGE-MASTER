import React, { useState } from 'react'
import './Tokenizer.css'
import TokenizerDescription from '../description/TokenizerDescription'
import axios from 'axios'

const Tokenizer = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setOutput('Fetching....')
    axios.post(`http://127.0.0.1:8000/word_tokenizer/${input}`).then((res) => {
      setOutput(res.data.word_tokens.join('\n'))
    })
  }
  return (
    <React.Fragment>
      <div>
        {/* mainContent */}
        <main className='container'>
          <h5 className='titleContainer'>Tokenizer</h5>
          <div className='textareaContainer'>
            <div className='leftContainer'>
              <textarea
                name='input'
                id='inputTextarea'
                cols='35'
                rows='10'
                placeholder='Enter Input......'
                className='textarea'
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></textarea>
            </div>
            <div className='rightContainer'>
              <textarea
                readOnly
                name='input'
                id='inputTextarea'
                cols='30'
                rows='10'
                placeholder='Output'
                className='textarea'
                value={output}
              ></textarea>
            </div>
          </div>
          <div className='selectBox'>
            <button className='btn' type='button' onClick={handleSubmit}>
              Convert
            </button>
          </div>
        </main>
      </div>
      <TokenizerDescription />
    </React.Fragment>
  )
}

export default Tokenizer

import React, { useState } from 'react'
import './SentenceCoorection.css'
import SentenceCorrectionDescription from '../description/SentenceCorrectionDescription'
import axios from 'axios'

const SentenceCoorection = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setOutput('Fetching....')
    axios
      .post(`http://127.0.0.1:8000/spellCheckerGrammer/${input}`)
      .then((res) => {
        setOutput(res.data.corrected_text)
      })
  }
  return (
    <React.Fragment>
      <div>
        {/* mainContent */}
        <main className='container'>
          <h5 className='titleContainer'>Sentence Correction</h5>
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
              Correct
            </button>
          </div>
        </main>
      </div>
      <SentenceCorrectionDescription />
    </React.Fragment>
  )
}

export default SentenceCoorection

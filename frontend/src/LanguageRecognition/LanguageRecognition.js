import React, { useState } from 'react'
import './LanguageRecognition.css'
import LanguageRecognitionDescription from '../description/LanguageRecognitionDescription'
import axios from 'axios'

const LanguageRecognition = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setOutput('Fetching....')
    axios
      .post(`http://127.0.0.1:8000/languageDetector/${input}`)
      .then((res) => {
        setOutput(
          `The language is ${res.data.Language}, native name is ${
            res.data.nativeName
          } and the confidence interval is ${Math.round(
            Number(res.data.score) * 100
          )}%.`
        )
      })
  }
  return (
    <React.Fragment>
      <div>
        {/* mainContent */}
        <main className='container'>
          <h5 className='titleContainer'>Language Recognition</h5>
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
              Recognize
            </button>
          </div>
        </main>
      </div>
      <LanguageRecognitionDescription />
    </React.Fragment>
  )
}

export default LanguageRecognition

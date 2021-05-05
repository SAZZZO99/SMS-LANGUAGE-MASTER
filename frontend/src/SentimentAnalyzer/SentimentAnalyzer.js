import React, { useState } from 'react'
import './SentimentAnalyzer.css'
import SentimentAnalysisDescription from '../description/SentimentAnalysisDescription'
import axios from 'axios'

const SentimentAnalyzer = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setOutput('Fetching....')
    axios
      .post(`http://127.0.0.1:8000/sentimentAnalysis/${input}`)
      .then((res) => {
        setOutput(
          `The sentiment of the text "${res.data.text}" is ${res.data.sentiment}.`
        )
      })
  }
  return (
    <React.Fragment>
      <div>
        {/* mainContent */}
        <main className='container'>
          <h5 className='titleContainer'>Sentiment Analyzer</h5>
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
              Analyze
            </button>
          </div>
        </main>
      </div>
      <SentimentAnalysisDescription />
    </React.Fragment>
  )
}

export default SentimentAnalyzer

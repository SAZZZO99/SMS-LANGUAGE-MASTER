import React from 'react'
import './Description.css'

function SentimentAnalysisDescription() {
  return (
    <div>
      {/* Description */}
      <section className='description'>
        <p className='paragraph'>
          The Sentiment Analysis is helpful in situtaions
        </p>
        <div className='images'>
          <div className='imageContainer'>
            <img
              src='https://img.icons8.com/ios/100/000000/brain--v1.png'
              alt=''
              className='image'
            />
            <p className='imageDescription'>Study Affective State</p>
          </div>
        </div>
        <p className='paragraph'>
          The Sentiment Analysis will help in identify, extract, quantify, and
          study affective states and subjective information.
        </p>
      </section>
    </div>
  )
}

export default SentimentAnalysisDescription

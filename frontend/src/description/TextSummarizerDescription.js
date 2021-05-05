import React from 'react'
import './Description.css'

function TextSummarizerDescription() {
  return (
    <div>
      {/* Description */}
      <section className='description'>
        <p className='paragraph'>
          The text summarizer is helpful in situtaions
        </p>
        <div className='images'>
          <div className='imageContainer'>
            <img src='./images/article.svg' alt='' className='image' />
            <p className='imageDescription news'>News Article</p>
          </div>
          <div className='imageContainer'>
            <img src='./images/research.svg' alt='' className='image' />
            <p className='imageDescription'>Research Paper</p>
          </div>
          <div className='imageContainer'>
            <img src='./images/trend.svg' alt='' className='image' />
            <p className='imageDescription'>Confusing Data</p>
          </div>
        </div>
        <p className='paragraph'>
          The summarizer tool will help you summarize information needed and it
          easier and effective to read.
        </p>
      </section>
    </div>
  )
}

export default TextSummarizerDescription

import React from 'react'
import './Description.css'

const SentenceCorrectionDescription = () => {
  return (
    <div>
      {/* Description */}
      <section className='description'>
        <p className='paragraph'>
          The Sentence Correction is helpful in situtaions
        </p>
        <div className='images'>
          <div className='imageContainer'>
            <img
              src='https://img.icons8.com/windows/96/000000/spell-check.png'
              alt=''
              className='image'
            />
            <p className='imageDescription'>Correcting Spelling</p>
          </div>
          <div className='imageContainer'>
            <img
              src='https://img.icons8.com/ios/100/000000/indefinite-article.png'
              alt=''
              className='image'
            />
            <p className='imageDescription'>Correcting Grammar</p>
          </div>
        </div>
        <p className='paragraph'>
          The Sentence Correction will help in correct gramatical spelling
          error.
        </p>
      </section>
    </div>
  )
}

export default SentenceCorrectionDescription

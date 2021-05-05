import React from 'react'
import './Description.css'

function LanguageRecognitionDescription() {
  return (
    <div>
      {/* Description */}
      <section className='description'>
        <p className='paragraph'>
          The Language Recognition is helpful in situtaions
        </p>
        <div className='images'>
          <div className='imageContainer'>
            <img
              src='https://img.icons8.com/ios/90/000000/google-translate.png'
              alt=''
              className='image'
            />
            <p className='imageDescription'>Language Detection</p>
          </div>
        </div>
        <p className='paragraph'>
          The Language recognition will help in detect the language where it is
          hard to detect unknown languages.
        </p>
      </section>
    </div>
  )
}

export default LanguageRecognitionDescription

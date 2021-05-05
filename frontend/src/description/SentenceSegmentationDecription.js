import React from 'react'
import './Description.css'

function SentenceSegmentationDecription() {
  return (
    <div>
      {/* Description */}
      <section className='description'>
        <p className='paragraph'>
          The Sentence Segmentation is helpful in situtaions
        </p>
        <div className='images'>
          <div className='imageContainer'>
            <img
              src='https://img.icons8.com/ios-filled/100/000000/align-left.png'
              alt=''
              className='image'
            />
            <p className='imageDescription'>Segmenting Sentences</p>
          </div>
        </div>
        <p className='paragraph'>
          The Sentence Segmentation will help in segmenting the statements into
          smaller points which is easy to read and understand.
        </p>
      </section>
    </div>
  )
}

export default SentenceSegmentationDecription

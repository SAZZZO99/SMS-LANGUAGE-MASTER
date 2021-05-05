import React from 'react'
import './Description.css'

function TokenizerDescription() {
  return (
    <div>
      {/* Description */}
      <section className='description'>
        <p className='paragraph'>The Tokenizer is helpful in situtaions</p>
        <div className='images'>
          <div className='imageContainer'>
            <img
              src='https://img.icons8.com/ios/100/000000/separate-document.png'
              alt=''
              className='image'
            />
            <p className='imageDescription'>converts text to tokens</p>
          </div>
        </div>
        <p className='paragraph'>
          The Tokenizer will help in converting input text to streams of tokens,
          where each token is a separate word, punctuation sign, number, etc.
        </p>
      </section>
    </div>
  )
}

export default TokenizerDescription

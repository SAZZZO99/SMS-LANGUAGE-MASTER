import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer id='footer'>
        <div className='footerContainer'>
          <div className='left'>
            <h2 className='footerAboutProject'>About Project</h2>
            <p className='about'>
              Language recognition involves trying to predict the natural
              language of a piece of text. Sentence segmentation is the process
              of determining the longer processing units consisting of one or
              more words. Sentiment analysis is the use of natural language
              processing, text analysis, computational linguistics, and
              biometrics to systematically identify, extract, quantify, and
              study affective states and subjective information. Text Summarizer
              is helpful to summarize text articles extracting the most
              important sentences. Tokenizer is converting input text to streams
              of tokens, where each token is a separate word, punctuation sign,
              number/amount, date, e-mail, URL/URI, etc.
            </p>
          </div>
          <div className='center'>
            <h2 className='footerAboutProject'>References</h2>
            <a
              className='link'
              href='https://medium.com/coinmonks/language-prediction-using-deep-neural-networks-42eb131444a5'
              target='_blank'
              rel='noreferrer'
            >
              Language Recognition
            </a>
            <a
              className='link'
              href='https://medium.com/manishmshiva/a-complete-guide-to-sentiment-analysis-and-its-applications-72adb3b057f5'
              target='_blank'
              rel='noreferrer'
            >
              Sentiment Analyzer
            </a>
            <a
              className='link'
              href='https://medium.com/analytics-vidhya/tokenization-building-a-tokenizer-and-a-sentencizer-c19a00393c19'
              target='_blank'
              rel='noreferrer'
            >
              Tokenizer
            </a>
            <h2 className='mentor'>Academic Mentor</h2>
            <a
              className='link'
              href='https://www.bmu.edu.in/faculty/mr-atul-mishra/'
              target='_blank'
              rel='noreferrer'
            >
              Mr. Atul Mishra
            </a>
          </div>
          <div className='right'>
            <h2 className='footerAboutProject'>Group Members</h2>
            <p className='link'>Devaharsha</p>
            <p className='link'>Honey Bhardwaj</p>
            <p className='link'>Kalyan</p>
            <p className='link'>Paidi Praneeth</p>
            <p className='link'>Saswat Sarangi</p>
            <p className='link'>Sree Anirudh</p>
            <p className='link bottomName'>Tejeswara Reddy</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

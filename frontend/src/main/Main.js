import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ButtonGroup, Button } from '@material-ui/core'
import LanguageRecognition from '../LanguageRecognition/LanguageRecognition'
import SentenceSegmentation from '../SentenceSegmentation/SentenceSegmentation'
import SentimentAnalyzer from '../SentimentAnalyzer/SentimentAnalyzer'
import TextSummarizer from '../TextSummarizer/TextSummarizer'
import Tokenizer from '../Tokenizer/Tokenizer'
import SentenceCorrection from '../SentenceCorrection/SentenceCoorection'
import './Main.css'

const Main = () => {
  return (
    <Router>
      <div className='mainContainer'>
        <div className='groupButtons'>
          <ButtonGroup
            variant='contained'
            color='primary'
            aria-label='contained primary button group'
          >
            <Button>
              <Link
                to='/'
                style={{
                  color: '#fff',
                  textTransform: 'capitalize',
                  fontSize: '17px',
                }}
              >
                Language Recognition
              </Link>
            </Button>
            <Button>
              <Link
                to='/SentenceCorrection'
                style={{
                  color: '#fff',
                  textTransform: 'capitalize',
                  fontSize: '17px',
                }}
              >
                Sentence corection
              </Link>
            </Button>
            <Button>
              <Link
                to='/SentenceSegmentation'
                style={{
                  color: '#fff',
                  textTransform: 'capitalize',
                  fontSize: '17px',
                }}
              >
                Sentence Segmentation
              </Link>
            </Button>
            <Button>
              <Link
                to='/SentimentAnalyzer'
                style={{
                  color: '#fff',
                  textTransform: 'capitalize',
                  fontSize: '17px',
                }}
              >
                Sentiment Analyzer
              </Link>
            </Button>
            <Button>
              <Link
                to='/TextSummarizer'
                style={{
                  color: '#fff',
                  textTransform: 'capitalize',
                  fontSize: '17px',
                }}
              >
                Text Summarizer
              </Link>
            </Button>
            <Button>
              <Link
                to='/Tokenizer'
                style={{
                  color: '#fff',
                  textTransform: 'capitalize',
                  fontSize: '17px',
                }}
              >
                Tokenizer
              </Link>
            </Button>
          </ButtonGroup>
        </div>
      </div>

      <Switch>
        <Route exact path='/'>
          <LanguageRecognition />
        </Route>

        <Route exact path='/SentenceCorrection'>
          <SentenceCorrection />
        </Route>

        <Route exact path='/SentenceSegmentation'>
          <SentenceSegmentation />
        </Route>

        <Route exact path='/SentimentAnalyzer'>
          <SentimentAnalyzer />
        </Route>

        <Route exact path='/TextSummarizer'>
          <TextSummarizer />
        </Route>

        <Route exact path='/Tokenizer'>
          <Tokenizer />
        </Route>
      </Switch>
    </Router>
  )
}

export default Main

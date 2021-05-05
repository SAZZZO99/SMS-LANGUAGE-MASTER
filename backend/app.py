from typing import Optional
import uvicorn
from fastapi import FastAPI
from languageDetector import languageDetector
from Name_Entity_Recognition import Name_entity_Recognition
from Spell_checker_grammer import Spell_checker_grammer
from sentimentAnalysis import initialize, sentimentAnalysis
from textSummarizer import textSummarizer
from tokenizer import word_tokenizer, sentence_tokenizer
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/languageDetector/{inputText}")
def languageDetection(inputText: str):
    language = languageDetector(inputText)
    return language


@app.post("/nameEntityRecognition/{inputText}")
def nameEntityRecognition(inputText: str):
    result = Name_entity_Recognition(inputText)
    return result


@app.post("/spellCheckerGrammer/{inputText}")
def spellCheckerGrammer(inputText: str):
    result = Spell_checker_grammer(inputText)
    return result


@app.post("/textSummarizer/{inputText}")
def TextSummarizer(inputText: str):
    result = textSummarizer(inputText)
    return result


@app.post("/word_tokenizer/{inputText}")
def wordTokenizer(inputText: str):
    result = word_tokenizer(inputText)
    return result


@app.post("/sentence_tokenizer/{inputText}")
def sentenceTokenizer(inputText: str):
    result = sentence_tokenizer(inputText)
    return result


@app.post("/sentimentAnalysis/{inputText}")
def SentimentAnalysis(inputText: str):
    result = sentimentAnalysis(inputText)
    return result


if __name__ == "__main__":
    initialize()
    uvicorn.run(app, host="127.0.0.1", port=8000)

import scispacy
import spacy
import en_core_sci_lg
from spacy_langdetect import LanguageDetector
from spacy.language import Language
import pandas as pd

def create_lang_detector(nlp, name):
    return LanguageDetector()

def languageDetector(input_text):
    df = pd.read_json('languages.json')
    Language.factory("language_detector", func=create_lang_detector)

    nlp = en_core_sci_lg.load(disable=["tagger", "ner", "lemmatizer"])
    nlp.max_length = 2000000
    nlp.add_pipe('language_detector', last=True)

    doc = nlp(input_text)
    language = {'Language':df[doc._.language['language']].iloc[0], 'nativeName':df[doc._.language['language']].iloc[1], 'score': doc._.language['score']}
    return language

languageDetector("how are you")

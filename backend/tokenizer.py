import en_core_sci_lg
import spacy
from spacy.lang.en import English

# Load English tokenizer, tagger, parser, NER and word vectors
def word_tokenizer(input_text):
    nlp = English()
    my_doc = nlp(input_text)

    # Create list of word tokens
    token_list = []
    for token in my_doc:
        token_list.append(token.text)
    return {"word_tokens":token_list}

def sentence_tokenizer(input_text):
    input_text = input_text.replace('\n','')
    nlp = spacy.load('en_core_web_sm',disable=['lemmatizer'])
    doc = nlp(input_text)
    sents_list = []
    for sent in doc.sents:
        sents_list.append(sent.text)
    return {"sentence_tokens":sents_list}
import spacy
from spacy import displacy
from spacy.lang.en import English


def Name_entity_Recognition(input_text):
    nlp = English()
    text = input_text
    doc = nlp(text)
    return {"entities":spacy.displacy.render(doc, style="ent",page="true")}
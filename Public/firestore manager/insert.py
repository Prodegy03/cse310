import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import firebase
from firebase import db
doc_ref = db.collection(u'Movies').document(u'Info')
doc_ref.set({
    u'Title': u'',
    u'Rating': u'',
    u'Actors': u'',
    u'Discription': ''
})

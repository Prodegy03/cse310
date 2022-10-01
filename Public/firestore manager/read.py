import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import firebase
from firebase import db
import sys
class read():
    users_ref = db.collection(u'Movies')
    docs = users_ref.stream()

    for doc in docs:
        print(f'{doc.id} => {doc.to_dict()}')

    



 
import firebase_admin
from firebase_admin import credentials

cred = credentials.Certificate("C:\Users\Sale Ready\OneDrive\Desktop\CSE310\cse310\public\christensen")
firebase_admin.initialize_app(cred) 
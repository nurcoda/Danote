import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "danotes-b57ce", "appId": "1:72934058583:web:c3a54c0cdbdb2bdde85112", "storageBucket": "danotes-b57ce.appspot.com", "apiKey": "AIzaSyA3qK99B7ZLo4f_ATw04_-oKagFmCot2MY", "authDomain": "danotes-b57ce.firebaseapp.com", "messagingSenderId": "72934058583" }))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"danotes-b57ce","appId":"1:72934058583:web:ea4790a162931857e85112","storageBucket":"danotes-b57ce.appspot.com","apiKey":"AIzaSyA3qK99B7ZLo4f_ATw04_-oKagFmCot2MY","authDomain":"danotes-b57ce.firebaseapp.com","messagingSenderId":"72934058583"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};

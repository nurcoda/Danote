import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Note } from '../interfaces/note.interface';

@Injectable({
  providedIn: 'root'
})
export class NoteListService {

  trashNotes: Note[] = [];
  normalNotes: Note[] = [];

  firestore: Firestore = inject(Firestore);

  constructor() { }

  getNotesRef() {
    return collection(this.firestore, 'Notes');
  }

  getTrashRef() {
    return collection(this.firestore, 'Trash');
  }

  getsingleDocRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }
}

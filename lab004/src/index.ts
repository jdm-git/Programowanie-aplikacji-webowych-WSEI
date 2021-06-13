import { firebaseConfig } from "./config";
import { App } from "./app";
import "./main.scss";
import firebase from "firebase";

const app = new App();

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const note = {
  title: "Third Note",
  content: "3rd Some more text",
};
//addNote(note);
async function addNote(note: any) {
  const res = await db.collection("notes").add(note);
}
//deleteNote("IWAQFcQYYz1XBZV3k4Vc");
async function deleteNote(id: string) {
  const res = await db.collection("notes").doc(id).delete();
}
// updateNote("qB6ZAocmhFY350jbjaGN", {
//   title: "Updated title",
//   content: "updated...",
// });
async function updateNote(id: string, note: any) {
  const res = await db.collection("notes").doc(id).update(note);
}
//getNote("qB6ZAocmhFY350jbjaGN").then((res) => console.log(res));
async function getNote(id: string) {
  return db
    .collection("notes")
    .doc(id)
    .get()
    .then((res) => ({ id: res.id, data: res.data() }));
}
getNotes();
async function getNotes() {
  return db
    .collection("notes")
    .get()
    .then((res) => {
      res.docs.forEach((doc) => {
        getNote(doc.id);
      });
    });
}

import { Note } from "./note";

export class App {
  notes: Note[] = [];
  constructor() {
    this.start();
    //localStorage.clear();
  }
  start(): void {
    document.querySelector("#addNewNote").addEventListener("click", () => {
      this.addNewNote();
    });
  }
  loadNotes(): void {
    if (this.notes.length == 0) return;
    console.log(this.notes);
    const data = JSON.parse(localStorage.getItem("notes"));
    data.forEach((n: Note[]) => {
      console.log(n);
    });
  }

  addNewNote(): void {
    const newNoteTitle: string =
      document.querySelector<HTMLInputElement>("#title").value;
    const newNoteText: string =
      document.querySelector("[contenteditable]").textContent;
    const isPinned: boolean =
      document.querySelector<HTMLInputElement>("#pinned").checked;
    this.notes.push(new Note(newNoteTitle, newNoteText, isPinned));

    this.saveData(this.notes);
    this.loadNotes();
  }

  saveData(data: any) {
    localStorage.setItem("notes", JSON.stringify(data));
  }
}

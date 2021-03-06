import { dateToRelativeString, htmlToElement } from "./Utils";

export class Note {
  id: string | null;
  title: string;
  message: string;
  color: string;
  pinned: boolean;
  createdAt: Date;

  constructor(
    title: string,
    message: string,
    color: string = "#2e2f33",
    pinned: boolean = false,
    createdAt: Date = new Date(),
    id: string | null = null
  ) {
    this.title = title;
    this.message = message;
    this.color = color;
    this.pinned = pinned;
    this.createdAt = createdAt;
    this.id = id;
  }
  togglePinned(): void {
    this.pinned = !this.pinned;
  }
  createNote(): Element {
    return htmlToElement(`
            <div class="note" style="--background: ${this.color};">
                <div class="header">
                    <h2 class="edit-hidden">${this.title}</h2>
                    <input type="text" class="edit-visible" value="${
                      this.title
                    }" name="title" />
                    <span class="pin edit-hidden"><i class="${
                      this.pinned ? "fas" : "far"
                    } fa-flag"></i></span>
                </div>
                <div class="details">
                    <span class="edit-hidden">${this.message}</span>
                    <textarea class="edit-visible" name="message">${
                      this.message
                    }</textarea>
                    <div class="bottom">
                        <div class="actions edit-hidden">
                            <span class="remove" title="Usuń">
                                <i class="fas fa-trash"></i>
                            </span>
                            <span class="edit" title="Edytuj">
                                <i class="far fa-edit"></i>
                            </span>
                            <span class="change-color" title="Zmień kolor">
                                <i class="fas fa-palette"></i>
                            </span>
                        </div>
                        <div class="save edit-visible">
                            <button class="edit-save">Zapisz</button>
                        </div>
                        <div class="created-at">
                            ${dateToRelativeString(this.createdAt)}
                        </div>
                    </div>
                </div>
            </div>
        `);
  }
  static createFromJson(data: NoteInterface): Note {
    return new Note(
      data.title,
      data.message,
      data.color,
      data.pinned,
      new Date(data.createdAt),
      data.id
    );
  }
}
interface NoteInterface {
  id: string;
  title: string;
  message: string;
  color: string;
  pinned: boolean;
  createdAt: string;
}

export { NoteInterface };
export default Note;

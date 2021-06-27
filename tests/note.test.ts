import Note, { NoteInterface } from "../lab004/src/note";

test("create note from json", () => {
  const data = {
    title: "Test note",
    message: "testing",
    color: "#2e2f33",
    pinned: true,
    createdAt: "2021-06-26 23:00:00",
    editedAt: null,
    id: null,
  } as NoteInterface;

  const note = Note.createFromJson(data);

  expect(note).toBeInstanceOf(Note);
  expect(note).toStrictEqual(
    new Note(
      data.title,
      data.message,
      data.color,
      data.pinned,
      new Date(data.createdAt),
      data.id
    )
  );
});

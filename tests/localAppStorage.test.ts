import LocalAppStorage from "../lab004/src/Storage/LocalAppStorage";
import Note from "../lab004/src/note";

test("it correctly persist notes", async () => {
  const storage = new LocalAppStorage();

  const note = new Note(
    "New test Note",
    "Note content",
    "#2e2f33",
    false,
    new Date(),
    null
  );

  expect((await storage.addNote(note)).id.length).toBeGreaterThan(0);
  expect((await storage.getNotes()).length).toBe(1);
});

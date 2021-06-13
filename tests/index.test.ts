import * as puppeteer from "puppeteer";
import { Note } from "../lab004/src/note";
import { App } from "../lab004/src/app";

(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 130 });
  const page = await browser.newPage();
  await page.goto("https://workflow.wsei.edu.pl");
  await page.screenshot({ path: "screen.png" });
  await page.waitForSelector("#mat-input-0");
  await page.type("#mat-input-0", "user");
  await page.type("#mat-input-1", "password");

  await page.waitFor(2000);
  await page.screenshot({ path: "scree-after-wait.png" });
  await browser.close();
})();

describe("addNote", () => {
  //const note = new Note("Test", "test", false);
  const app = new App();
  app.addNewNote();
});

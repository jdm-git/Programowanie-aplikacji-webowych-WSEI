import Notes from "./Notes";
import LocalAppStorage from "./Storage/LocalAppStorage";
import { CONFIG } from "./config";
import AppStorage from "./AppStorage";
import FirebaseAppStorage from "./Storage/FirebaseAppStorage";

export class App {
  constructor() {
    App.init();
  }

  private static init(): void {
    new Notes(document.querySelector(".container"), App.createStorage());
  }

  private static createStorage(): AppStorage {
    switch (CONFIG.storageType) {
      case "localStorage": {
        return new LocalAppStorage();
      }

      case "firebase": {
        return new FirebaseAppStorage();
      }
    }

    return new LocalAppStorage();
  }
}

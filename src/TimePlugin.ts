import { Plugin } from "./Plugin";

export class TimePlugin implements Plugin {
  name = "TimePlugin";

  execute(): void {
    console.log("🕒 Aktuelle Uhrzeit:", new Date().toLocaleTimeString());
  }
}
import { Plugin } from "./Plugin";

export class HelloPlugin implements Plugin {
  name = "HelloPlugin";

  execute(): void {
    console.log("👋 Hallo von HelloPlugin!");
  }
}
import { Plugin } from "./Plugin";

export class Core {
  private plugins: Plugin[] = [];

  // Plug-in registrieren
  registerPlugin(plugin: Plugin): void {
    console.log(`🔌 Plugin registriert: ${plugin.name}`);
    this.plugins.push(plugin);
  }

  // Alle registrierten Plug-ins ausführen
  run(): void {
    console.log("🚀 Microkernel startet:");
    this.plugins.forEach(plugin => {
      console.log(`▶️ Ausführen von: ${plugin.name}`);
      plugin.execute();
    });
  }
}
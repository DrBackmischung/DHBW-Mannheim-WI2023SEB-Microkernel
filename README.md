# DHBW-Mannheim-WI2023SEB-Microkernel

Ein simples Plugin-System in TypeScript mit Microkernel-Architektur.

## ▶️ Starten

```bash
npm install
npm run build
npm start
```

## 📦 Struktur

- `Core.ts`: Microkernel mit Pluginverwaltung
- `Plugin.ts`: Interface
- `HelloPlugin.ts`, `TimePlugin.ts`: Beispiel-Plugins
- `index.ts`: Einstiegspunkt

## 💡 Features

- Plugin-Registrierung & -Ausführung
- Erweiterbar & modular

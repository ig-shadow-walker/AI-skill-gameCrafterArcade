# GameCrafter

**GameCrafter** is a workspace for designing and building **2D and 3D games** that target the **web, tablets, mobile devices, and desktop** (including wrapped or native-style apps). The technical backbone is **[Three.js](https://threejs.org/)**—used for full 3D scenes or for 2D-style games via orthographic cameras, quads, sprites, and UI layers.

This repository is intentionally oriented around a **structured creative pipeline** so that high-level ideas (for example, “a first-person zombie survival shooter”) can be broken down into something implementable without skipping planning.

---

## What lives in this project

Right now the repo holds the **Cursor Agent Skill** named **`game-crafter`**, under:

`.cursor/skills/game-crafter/`

| File | Purpose |
|------|---------|
| `SKILL.md` | Main instructions for the AI: phases, outputs, Three.js reminders, and when to apply the workflow. |
| `reference.md` | Deeper templates (build spec skeleton, platform matrix, genre → camera/control hints). |

Game source code, assets, and build tooling can be added here as the project grows; the skill is meant to guide both **analysis** and **implementation** in that same tree.

---

## The GameCrafter workflow (Idea → build spec)

The skill teaches the agent to work **top-down** and produce concrete artifacts at each step:

1. **Idea** — Genre, platforms, session length, inputs, asset expectations; short brief for confirmation.  
2. **Design** — Core loop, camera/controls per device, win/lose, pacing, mood.  
3. **Systems** — Technical architecture (world, player, combat, enemies, progression, data, audio) scoped to what the game actually needs.  
4. **Content** — Geometry/textures, levels, copy, and what stays placeholder for MVP.  
5. **Presentation** — Canvas lifecycle, HUD strategy, mobile-friendly effects, accessibility.  
6. **Scope** — MVP vs stretch vs cut, milestones.  
7. **Build spec** — Repo layout, game loop, modules, config, platform notes, performance budget, manual test checklist—then **implement MVP first**.

Default implementation assumptions (unless the repo already says otherwise): **Three.js**, **TypeScript**, **Vite** for the web; **React Three Fiber** only if the project already uses React.

---

## Using the skill in Cursor

1. Open this folder as the **project root** in Cursor.  
2. Start an **Agent** chat.  
3. Describe the game you want, or say explicitly that the agent should **follow the game-crafter workflow** (and optionally **phase by phase** before coding).  

The skill’s YAML **description** helps Cursor attach it when you talk about Three.js games, browsers, mobile/tablet, or vague genre requests. For details and copy-paste templates, the agent can read `reference.md`.

---

## Roadmap (suggested)

- Scaffold a **Vite + TypeScript + Three.js** app under `src/`.  
- Add shared **resize / DPR / input** helpers for desktop vs touch.  
- Optionally add **PWA**, **Capacitor**, or **Electron/Tauri** when you want store-ready or desktop shells.  

The skill is written to stay aligned with that direction.

---

## Credits

**GameCrafter** was built by **shadow-walker**.

---

## License

Add a `LICENSE` file when you decide how you want this project shared.

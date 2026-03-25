# GameCrafter template repository roadmap

Use this **in order** when scaffolding or extending the **GameCrafter** workspace (the starter/tooling repo). The **reference game** (Phase E) should demonstrate a **small arcade loop** (score or survive + restart), not only a rotating cube—see Phase E. Skip only when the user explicitly limits scope; then call out missing prerequisites.

**Do not confuse** with the game-design phases in `SKILL.md` (Idea → … → build spec). Those apply to **arcade-style titles** you build inside the repo. This file applies to **making the repo itself** a useful template.

---

## Phase A — Baseline app

1. Scaffold **Vite + TypeScript** at repo root (`package.json`, `vite.config`, `tsconfig`, `index.html`).
2. Add **Three.js** and minimal `main.ts`: scene, camera, renderer, one mesh, `requestAnimationFrame` loop with **delta time**.
3. Wire **`npm run dev`**, **`npm run build`**, **`preview`**; document in README.

**Exit criteria:** Clone → install → dev shows a stable rotating cube (or equivalent) with no console errors.

---

## Phase B — Engine glue

4. **Resize + DPR:** listen to `resize` / visual viewport; update `camera.aspect` and `renderer.setSize`; **cap `devicePixelRatio`** on small screens.
5. **Timestep:** fixed step or **capped delta** for `update(dt)` so gameplay survives hitches.
6. **Disposal:** helpers or documented pattern for disposing geometries/materials/textures when swapping scenes.

**Exit criteria:** Resizing the window and rotating a phone emulator does not break aspect ratio or melt performance from uncapped DPR.

---

## Phase C — Input and platforms

7. **Input abstraction:** map logical actions (move, look, fire, interact) separately from raw keyboard/mouse/touch.
8. **Pointer lock (optional path):** behind explicit UI gesture for FPS-style desktop; **do not** rely on pointer lock on mobile.
9. **HUD / safe area:** DOM overlay (or documented pattern) that works with fullscreen canvas and readable tap targets on phones.

**Exit criteria:** One code path can drive desktop + touch without forking the whole game loop.

**FPS / pointer-lock exit check (when the reference game or MVP is FPS-style):** With pointer locked, **primary fire** works reliably; **restart** returns to a state where the user can **lock again**; the **HUD** does not steal clicks incorrectly (`pointer-events`, `[hidden]` vs CSS `display`—see `SKILL.md` Web FPS checklist).

---

## Phase D — Folder layout and documentation

10. Create **stable layout:** e.g. `src/game/`, `src/systems/`, `src/render/`, `public/assets/`, `src/game/config.ts` (tunables).
11. Add **`docs/`** or **`templates/`** with a **filled example** of a Phase-7-style build spec for a tiny **arcade** sample (dodge + score, survive waves, collect N in time, etc.).

**Exit criteria:** New features have an obvious home; humans see a concrete “finished spec” example.

---

## Phase E — Reference game (template MVP)

12. Ship **one minimal arcade-style playable** using the layout: e.g. **survive spawning hazards** with score/time, **twin-stick-lite** arena with waves, **dodge + pickup** with game over, or **FPS arena** slice—**primitives only**, no heavy assets. Must include **start → play → game over (or win stub) → restart** or equivalent run boundary.
13. Document **how to replace** primitives with GLTF later (single paragraph or link).

**Exit criteria:** `npm run dev` demonstrates a **repeatable arcade core loop**, not only a tech demo.

---

## Phase F — Distribution

14. **PWA:** manifest + service worker (Vite PWA plugin or equivalent) for install/offline shell where appropriate.
15. **Optional wrapper:** add **either** Capacitor **or** Tauri/Electron—not all at once—only after Phases A–E; document the chosen path in README.

**Exit criteria:** Clear story: “web + PWA first; wrapper when you need store/desktop packaging.”

---

## Phase G — Skill and code alignment

16. Update **`SKILL.md` / `reference.md` / `roadmap.md`** under **`.cursor/skills/arcade-gamecrafter/`** and **`.claude/skills/arcade-gamecrafter/`** so examples reference **real paths** and **npm scripts** in this repo.
17. Optional: **`.cursor/rules`** or root **`CLAUDE.md`**: “Reuse existing resize/input modules; do not duplicate engine glue.”
18. After a **substantial gameplay pass** (new HUD patterns, `config` keys, spawn rules), fold those into the skill docs so the **next** agent session matches the **current** code.

**Exit criteria:** Agents and humans are not pointed at missing files or outdated layout.

---

## Phase H — Polish

19. **CI:** typecheck + build on push (e.g. GitHub Actions).
20. **LICENSE** (and CONTRIBUTING if collaborative).
21. **Performance checklist** in repo (draw calls, lights, pooling)—mirror the skill’s review list for quick audits.

**Exit criteria:** Contributors get fast feedback; legal/perf expectations are explicit.

---

## Quick dependency rule

| If the user asks for… | Usually requires… |
|----------------------|-------------------|
| PWA / wrapper | A–B (runnable app + resize) |
| Reference game | A–D |
| Store / desktop shell | A–E at minimum; F last |

When in doubt, propose the **smallest next phase** and list what it unlocks.

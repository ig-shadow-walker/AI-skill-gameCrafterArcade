---
name: game-crafter
description: GameCrafter workflow for planning and building 2D/3D Three.js games on web, tablet, mobile, and desktop. Parses natural-language game ideas (e.g. FPS zombie survival), runs Idea→design→systems→content→presentation→scope→build spec, then implements. Prefers asking the user over silent assumptions whenever more information would materially affect the game; optional step-by-step vs faster autonomous pacing. When scaffolding or extending the GameCrafter template repo, follows phased roadmap (Vite, engine glue, input, reference game, PWA, CI). Use for the gameCrafter project, GameCrafter, game-crafter, scaffolding this workspace, browser/mobile Three.js games, or a genre without a technical spec.
---

# GameCrafter

## When to use this skill

Apply when the user describes a game in natural language (genre, fantasy, mechanics) and expects analysis, structure, and implementation—or when they explicitly want Three.js across web/tablet/mobile/desktop.

## Information first (default)

**Do not treat “autonomous” or “keep moving” as permission to guess** when you actually need the user’s intent.

- **Whenever** the brief is ambiguous, under-specified, or could be read multiple ways—and **picking a default would materially affect** gameplay, architecture, scope, or rework cost—**ask** (short, numbered questions). This applies **mid-phase** and **mid-implementation**, not only at phase boundaries.
- **Assume without asking** only when the choice is **cheap to change later** (e.g. a constant, label, or cosmetic), or is a **boring industry default** everyone expects *and* you still list it under **Assumptions** so the user can correct you.
- **When in doubt, ask.** Prefer one small clarification over shipping the wrong game.
- Avoid **large irreversible bets** (major architecture, genre-defining mechanics) while a **critical** question you care about is still open; ask or state options and let the user pick.

---

## Engagement mode (pacing — ask once if unclear)

Optional **pacing** preference; it does **not** override **Information first**. Even in “autonomous” pacing, **stop and ask** whenever you need more information (per above).

Unless the user **already** stated how they want to work, you may **ask once**:

> **How do you want to work?**  
> **A — Step-by-step** — I use **clear checkpoints** after each phase (or roadmap letter), show outputs, and check in before big leaps—**and I still ask anytime** I need more detail, not only at those checkpoints.  
> **B — Autonomous** — I keep momentum across phases and code with fewer **scheduled** pauses—**but I still ask questions whenever** something important is missing or fuzzy; I only **skip** questions for truly low-stakes defaults (and I log those as **Assumptions**).

Honor pacing for the **rest of the session** unless they switch.

### A — Step-by-step (interactive pacing)

- After each **game-design phase** (1–7), deliver the **output** and offer a **natural checkpoint** (summary + “continue?” or next phase preview)—unless the user asked you to barrel through.
- **Anytime** you notice a gap that matters for what you’re about to write or build, **ask first**; you are not required to wait for the end of a phase.
- Before starting heavy work on the **next** phase, use the **phase table** below so you don’t skip obvious questions.
- If the user wants less chit-chat, offer **“Use sensible defaults for this chunk”** and still list what you assumed.
- For **roadmap** work ([roadmap.md](roadmap.md) A–H), use the same idea: checkpoint after each **letter phase** (or a tiny pair like A+B), and **ask anytime** scaffolding choices are unclear.

### B — Autonomous pacing

- Prefer **continuous** progress through Phases 1→7 and implementation.
- Keep a running **Assumptions** list for inferred details—but **do not** hide uncertainty there: if you’re not confident, **ask** instead of assuming.
- Same **ask-when-needed** rule as mode A; the difference is **fewer mandatory review stops**, not fewer questions when information is missing.

### Clarifying questions — what to probe by phase

Use this as a **prompt checklist** whenever you are about to enter the listed phase—or whenever that topic is still fuzzy. Skip what the user already answered.

| Next phase | Clarify if missing |
|------------|-------------------|
| **2 Design** | Win/lose or endless rules; session length; which platform is **primary**; camera/control per platform |
| **3 Systems** | Multiplayer/save needs; combat model (hitscan vs projectiles); progression (waves, meta, none) |
| **4 Content** | Procedural vs authored levels; asset style (primitives vs GLTF); how much tutorial copy |
| **5 Presentation** | DOM HUD vs in-scene UI; fullscreen/PWA priority; mobile performance strictness |
| **6 Scope** | Non-negotiable MVP vs nice-to-have; deadline or “smallest slice” constraint |
| **7 Build spec** | Repo constraints (existing folders, forbidden deps); test devices they care about |
| **Implementation** | Branch/commit style; whether to stop after MVP build for playtest |

---

## Operating principle

Work **top-down**: each phase produces artifacts the next phase consumes. Do not skip phases unless the user already supplied equivalent detail; then acknowledge and continue from the next gap. Follow **Information first** for when to ask vs assume; use **engagement mode** for how often to offer phase checkpoints, not as a reason to guess silently.

Default stack unless the project already dictates otherwise: **Three.js** (r3f acceptable if the repo uses React), **TypeScript**, **Vite** for web. Prefer one renderer/scene for 3D; use **orthographic camera + planes/sprites** or **layered quads** for 2D-in-Three, or a **2D canvas/UI overlay** when appropriate.

### Which track first? (decision)

| Situation | What to run |
|-----------|-------------|
| **Empty or almost empty repo** | [Roadmap](roadmap.md) **A → E (minimum)** in the same effort as (or immediately before) the first playable slice. Do not ship a full “Phase 7 game” on top of an unbuilt baseline. Phase 7 build specs should state **prerequisites** (e.g. “requires roadmap A–E baseline: Vite + Three + loop + input + layout + one vertical slice”). |
| **Repo already has Vite + Three + game loop** | Skip re-scaffolding. Go to **Phase 7** plus **targeted roadmap items** only (e.g. roadmap F for PWA, H for CI). |

Mixing “design my game” (Phases 1–7) with “scaffold the template” (roadmap A–H) without this split tends to produce gameplay before a stable baseline—or design docs while the repo cannot run.

---

## Template repository roadmap (this repo)

When the user asks to **set up, scaffold, or extend the GameCrafter workspace** (tooling, starter app, PWA, CI—not only “design my game”), follow the **ordered phases** in [roadmap.md](roadmap.md). Do **not** skip work whose outputs are prerequisites (e.g. do not add Capacitor before a runnable Vite + Three.js baseline). Use the **decision table** above to choose whether A–E must precede the current game task.

**Order (see roadmap for full checklist and exit criteria):**

| Step | Focus |
|------|--------|
| A | Baseline app — Vite + TypeScript + Three.js, minimal loop, npm scripts |
| B | Engine glue — resize/DPR cap, timestep or capped `dt`, disposal pattern |
| C | Input & platforms — abstraction, optional pointer-lock path, HUD/safe area |
| D | Layout & docs — `src/game`, `systems`, `render`, `public/assets`, example build spec |
| E | Reference game — one minimal playable MVP (primitives OK) |
| F | Distribution — PWA first; then optionally one wrapper (Capacitor or Tauri/Electron) |
| G | Align skill ↔ code — update paths in SKILL/reference; optional rules or `CLAUDE.md` |
| H | Polish — CI, LICENSE, performance checklist |

If the user requests only a **subset** (e.g. “add PWA”), implement it and **state any missing prerequisites** they should complete first.

**Game-design pipeline:** The sections **Phase 1 — Idea** through **Phase 7 — Build spec** below are for **any game title** (idea → spec → code). When the repo is **not** yet at roadmap **E**, treat **A → E** as the spine and fold Phases 1–7 into that pass where helpful. When the baseline exists, use Phases 1–7 + only the roadmap phases you still lack.

---

## Phase 1 — Idea

**Goal:** Align on a concrete pitch and constraints.

Extract and state explicitly:

- Genre, reference games (if any), single-player vs multiplayer
- Target platforms: phone, tablet, desktop browser, desktop app (Electron/Tauri), PWA
- Session length (e.g. 3-minute run vs 20-minute mission)
- Input assumptions: touch, gamepad, keyboard/mouse, pointer lock for FPS
- Art/audio expectations: placeholder geom, procedural, or external assets

**Output:** Short **idea brief** (5–10 bullets) the user can confirm.

---

## Phase 2 — Design

**Goal:** Core loop and player fantasy.

Define:

- **Core loop** (repeatable cycle: e.g. explore → scavenge → survive wave → upgrade)
- **Camera and control scheme** per platform (e.g. FPS: pointer lock + WASD on desktop; virtual dual-stick or tap-to-move on mobile)
- **Win/lose** or endless/score conditions
- **Pacing:** onboarding, difficulty curve, run length
- **Mood:** lighting, color, audio cues (no need for final art)

**Output:** **Design one-pager** (sections above, 1–3 sentences each).

---

## Phase 3 — Systems

**Goal:** Technical architecture for gameplay, not visuals.

Inventory only what the game needs. Typical buckets:

| Area | Examples |
|------|----------|
| World | Scene graph, levels/chunks, spawning, boundaries (**min distance from player**, retry or ring fallback so spawns never overlap the player) |
| Player | Movement, stamina, health, interaction |
| Combat | Weapons, damage, hit detection, feedback |
| Enemies | AI states, pathing/simplifications, pooling |
| Progression | Waves, score, unlocks, meta between runs |
| Data | Config JSON, seeds, save (localStorage / IndexedDB if needed) |
| Audio | SFX/music hooks, spatial if 3D |

**Output:** **System list** with 1-line responsibility each and note dependencies (what must exist first).

---

## Phase 4 — Content

**Goal:** What exists in the build beyond code.

Plan:

- **Geometry/textures:** primitives, procedural meshes, GLTF pipeline, sprite sheets
- **Levels:** single arena vs procedural layout; spawn points; occlusion/visibility
- **Copy:** UI strings, tutorial prompts
- **Placeholder policy:** name what is stubbed for MVP

**Output:** **Content checklist** mapped to MVP vs later.

---

## Phase 5 — Presentation

**Goal:** How it looks and feels on each device.

Cover:

- **Canvas lifecycle:** resize, `devicePixelRatio` cap on mobile, fullscreen where relevant
- **UI/HUD:** DOM overlay vs Three.js (e.g. `CSS2DRenderer`) vs canvas 2D
- **Post-processing:** use sparingly on mobile; prefer cheaper materials/fog
- **Accessibility:** readable UI scale on small screens; optional reduced motion

**Output:** **Presentation notes** tied to platform (what differs on phone vs desktop).

---

## Phase 6 — Scope

**Goal:** Shippable slice vs backlog.

Produce:

- **MVP:** smallest playable that proves the core loop
- **Cut list:** deferred systems/content with reasons
- **Stretch goals:** ordered after MVP
- **Milestones:** e.g. greybox → systems → content pass → polish

**Output:** **Scope table** (MVP / stretch / cut).

### Difficulty & pacing (config) — optional but recommended for arcade / waves

Encode tuning in **`config.ts` (or one module)** instead of scattering magic numbers:

- **Time variable:** e.g. survival time while “in run” / pointer locked; use it to drive ramps.
- **Curves:** **lerp** or easing from **starting values** toward **asymptotic caps** (e.g. spawn interval high → low; enemies per wave low → high).
- **Name keys explicitly:** e.g. `spawnIntervalStart`, `spawnIntervalMin`, `spawnRampSeconds`, `perSpawnStart`, `perSpawnMax` so Phase 7 and code stay aligned.

---

## Phase 7 — Build spec

**Goal:** Executable plan for implementation.

Before coding, emit a **build spec** containing:

1. **Prerequisites** (when relevant): e.g. “Roadmap A–E complete” or “reuse existing `main.ts` loop and input module”—especially for **empty or greenfield** repos.
2. **Repo layout** (directories: `src/game`, `src/systems`, assets, public)
3. **Entry points** and game loop (init → update → render)
4. **Module boundaries** (player, enemies, weapons, UI, audio)
5. **Config surface** (constants file or JSON for tuning); for wave/survival games, include **difficulty ramp keys** (see Phase 6 optional subsection)
6. **Platform notes:** pointer lock guard, touch controls, safe areas, build commands for web + optional wrapper
7. **Performance budget:** target FPS, max lights, pooling rules, draw-call awareness
8. **Spawning / bounds:** `minSpawnDistanceFromPlayer`, separate **margins** for player vs larger enemies, **clamp after movement** each frame to avoid tunneling into walls
9. **Test plan:** manual steps per platform

Then implement **MVP first** in small commits; match existing project patterns.

---

## Three.js implementation reminders

- **Resize:** listen to `resize` / visual viewport; update camera aspect and `renderer.setSize` (and limits on DPR).
- **FPS on web:** request pointer lock on user gesture; handle unlock and UI state.
- **Mobile:** large touch targets; avoid tiny HUD text; reduce shadow/post FX defaults.
- **2D:** orthographic camera with consistent units; consider one texture atlas for sprites.
- **Pooling:** reuse objects for bullets, enemies, particles when counts spike.
- **Loading:** `LoadingManager` or async setup; show progress for large assets.

### Web FPS + DOM HUD checklist

| Topic | Pitfall / fix |
|--------|----------------|
| **`hidden` vs CSS** | Rules like `#panel { display: flex }` can **override** the default `[hidden]` behavior. Prefer `#panel:not([hidden]) { … }` or a class such as `.hidden { display: none !important; }`. |
| **Pointer lock target** | `PointerLockControls` locks the controls’ **`domElement`** (often `document.body`). Use **`document`** listeners with **capture** and/or both **`pointerdown` + `mousedown`** so **primary fire** works reliably while locked. |
| **Restart / game state** | When overlays replace the “click to play” blocker, **restore** blocker/instructions on **restart** so the player can **lock the pointer** again. |
| **AudioContext** | Often **suspended** until a user gesture; call **`resume()`** on first click / lock; optionally defer the first SFX until `state === "running"`. |

### Movement, facing, bounds, spawning

- **Chase / steering on XZ:** velocity toward the player uses **(player − enemy)**, not **(enemy − player)**.
- **Facing vs `Object3D.lookAt`:** For non-camera meshes, `lookAt` behaves like a camera (−Z toward target) and often looks **backward** on simple rigs. Prefer **yaw from `Math.atan2(dx, dz)`** when facing should match ground movement.
- **`PointerLockControls.moveForward`:** Sign can feel inverted; treat as **tunable** and define WASD semantics in **one place** (`config`).
- **Walls / arena:** Use **separate margins** for player vs larger enemies; **clamp positions after movement** each frame so nothing tunnels into wall meshes.
- **Spawning:** Enforce **minimum distance from player** (with max pick attempts and optional **ring fallback**); state this in Phase 3 (world/enemies) and Phase 7 (build spec).

---

## Additional resources

- For **template repo scaffolding** (phases A–H, exit criteria, dependency rules), see [roadmap.md](roadmap.md).
- For a **copy-paste build spec skeleton** and platform matrix, see [reference.md](reference.md).
- After a **substantial gameplay pass**, **re-sync** `SKILL.md` / `reference.md` examples with **real paths**, HUD patterns, and **`config` keys** from the repo (see roadmap **Phase G**) so the next session does not reintroduce the same issues.

---
name: arcade-gamecrafter
description: Skill id arcade-gamecrafter for the ig-shadow-walker/gameCrafter repo. User must reference arcade + gamecrafter (e.g. arcade gamecrafter, @arcade-gamecrafter). Arcade-style Three.js games—score, waves, arena FPS, twin-stick, runners, survival slices, restart loops, config ramps. Phases Idea→build spec + template roadmap A–H. Prefers asking over assuming; step-by-step or autonomous pacing.
---

# GameCrafter (arcade)

## How to invoke

- **Skill id:** `arcade-gamecrafter` (folder `.cursor/skills/arcade-gamecrafter/`).
- To load this playbook explicitly, the user should mention **arcade** and **gamecrafter** / **gameCrafter** together—e.g. “use **arcade gamecrafter**,” “follow the **gameCrafter** arcade skill,” or **`@arcade-gamecrafter`** (if the client supports `@` skills).
- **Canonical repo:** **github.com/ig-shadow-walker/gameCrafter**—tie natural-language requests to that project name when matching this skill.

## When to use this skill

Apply when the user wants an **arcade-style** game: **score, time, waves, combos, lives**, tight **restart loops**, **single-session** skill tests, arena or lane pressure, or cabinet-like “one more run” feel—even if they only say “FPS survival” or “dodge enemies.” Also apply when they want **Three.js** + **Vite** + **TypeScript** for web/tablet/mobile and the brief fits action/reflex play more than long-form RPG or open-world sim.

**Out of scope default:** If they clearly want narrative-heavy RPG, MMO, or 20+ hour progression, say so and either narrow to an **arcade slice** (e.g. one combat arena) or recommend a different workflow.

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
| **2 Design** | **Game over** vs endless; **target run length** (e.g. 60s–5m); **primary score** (points, time alive, wave #); camera/control per platform |
| **3 Systems** | **Lives / continues?**; hitscan vs projectiles; **wave or spawn ramp**; local **high score** or session-only; pooling for bullets/enemies |
| **4 Content** | **Single arena vs lanes**; spawn layout; primitives vs GLTF for MVP; minimal **title / game over** copy |
| **5 Presentation** | Score/time/**combo** HUD readability; **game over / restart** flow; juice budget on mobile; DOM HUD vs in-scene |
| **6 Scope** | Smallest **one-more-run** loop; what proves **skill**, not content volume |
| **7 Build spec** | Repo constraints; `config` keys for **difficulty ramp**; restart → **pointer lock / gesture** path if FPS |
| **Implementation** | Playtest **one full run** (start → game over → restart) before feature creep |

---

## Operating principle

Work **top-down**: each phase produces artifacts the next phase consumes. Do not skip phases unless the user already supplied equivalent detail; then acknowledge and continue from the next gap. Follow **Information first** for when to ask vs assume; use **engagement mode** for how often to offer phase checkpoints, not as a reason to guess silently.

Default stack unless the project already dictates otherwise: **Three.js** (r3f acceptable if the repo uses React), **TypeScript**, **Vite** for web. Prefer one renderer/scene for 3D; use **orthographic camera + planes/sprites** or **layered quads** for 2D-in-Three, or a **2D canvas/UI overlay** when appropriate.

### Arcade defaults (bias the whole pipeline)

Unless the user overrides, steer toward **short, replayable sessions** and **readable feedback**:

- **Run structure:** **title / ready → playing → game over → restart** (or pause menu) is a first-class flow; not an afterthought.
- **Goals:** **score**, **time survived**, **wave reached**, or **combo**—pick at least one measurable hook for Phase 2.
- **Pressure:** **waves**, **spawn ramps**, or **speed-ups** over huge static worlds; single **arena**, **lanes**, or **chunks** beat sprawling maps for MVP.
- **Tuning:** **one `config` module** for spawn interval, enemy counts, player speed, damage—see Phase 6 difficulty subsection.
- **Juice:** hit feedback, brief SFX, HUD pulse—**cheap** on mobile (no heavy post stack by default).
- **Progression:** **session-local** high score or best wave is enough; long meta-progression is **stretch**, not MVP.

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
| E | Reference game — **arcade** MVP: score/survive + restart (primitives OK) |
| F | Distribution — PWA first; then optionally one wrapper (Capacitor or Tauri/Electron) |
| G | Align skill ↔ code — update paths in SKILL/reference; optional rules or `CLAUDE.md` |
| H | Polish — CI, LICENSE, performance checklist |

If the user requests only a **subset** (e.g. “add PWA”), implement it and **state any missing prerequisites** they should complete first.

**Game-design pipeline:** Phases **1–7** below are tuned for **arcade titles** (idea → spec → code). When the repo is **not** yet at roadmap **E**, treat **A → E** as the spine and fold Phases 1–7 into that pass where helpful. When the baseline exists, use Phases 1–7 + only the roadmap phases you still lack.

---

## Phase 1 — Idea

**Goal:** Align on a concrete **arcade** pitch and constraints.

Extract and state explicitly:

- **Arcade subgenre** (arena FPS, twin-stick, runner, shmup, dodge/survival, brick-style, etc.) and reference games if any
- **Single-player** default; multiplayer only if explicitly requested
- Target platforms: phone, tablet, desktop browser, PWA / wrapper
- **Target session:** e.g. 90s skill burst vs 5m survival run (avoid “campaign length” unless user insists)
- **Score / fail state:** what ends a run and what the player chases (high score, wave, time)
- Input: touch, gamepad, keyboard/mouse, **pointer lock** for first-person arcade
- Art/audio: **primitives + procedural** default for MVP; GLTF as stretch

**Output:** Short **idea brief** (5–10 bullets) the user can confirm.

---

## Phase 2 — Design

**Goal:** Tight **core loop** and fantasy in **one sitting**.

Define:

- **Core loop** (seconds-scale rhythm): e.g. **spawn pressure → player responds → score/combo → harder wave**; or **dodge → pick up → risk/reward**
- **Camera and controls** per platform (FPS: pointer lock + WASD; twin-stick: move + aim; runner: lane switch + jump)
- **Game over** rules (lives, one-hit, timer) and whether **endless** with escalating difficulty is OK
- **Difficulty curve:** first 10–30s onboarding vs **ramp** (spawn config, speed, damage)—name when it should “kick in”
- **Mood / read:** silhouette, color contrast, **HUD legibility** at a glance (arcade-first)

**Output:** **Design one-pager** (sections above, 1–3 sentences each).

---

## Phase 3 — Systems

**Goal:** Technical architecture for **arcade** gameplay, not visuals.

Inventory only what the game needs. Typical buckets:

| Area | Examples |
|------|----------|
| World | **Arena or lane bounds**; **spawning** + waves; **min distance from player**, retry or ring fallback |
| Player | Movement; **iframed** invuln or lives; interaction minimal unless genre needs it |
| Combat | Hit detection (hitscan / projectile); **i-frames** or HP; **hit-stop / flash** (subtle, mobile-safe) |
| Enemies | Simple chase / pattern / wave driver; **pooling** when counts spike |
| Run flow | **Game state machine:** title → playing → **game over** → restart; pause optional |
| Progression | **Score / combo / wave index**; `localStorage` high score optional; meta-unlocks = stretch |
| Data | **`config.ts`** tunables; seeds only if procedural spawns need reproducibility |
| Audio | **One-shot SFX** pool; `AudioContext.resume()` on gesture; music optional/stub |

**Output:** **System list** with 1-line responsibility each and note dependencies (what must exist first).

---

## Phase 4 — Content

**Goal:** What exists in the build beyond code **for an arcade MVP**.

Plan:

- **Geometry:** primitives first; GLTF for hero/enemy only if scoped
- **Layout:** **one arena** or fixed lane set; **spawn volumes** or edge points; keep visibility **readable**
- **Copy:** **short**—how to start, how to restart, score labels; skip long tutorials unless requested
- **Placeholder policy:** what stays greybox for v1

**Output:** **Content checklist** mapped to MVP vs later.

---

## Phase 5 — Presentation

**Goal:** **Readable arcade feel** on each device.

Cover:

- **Canvas lifecycle:** resize, `devicePixelRatio` cap on mobile, fullscreen where relevant
- **HUD:** **large** score, combo, lives, wave—**DOM overlay** often best; avoid tiny text over busy 3D
- **Game over / pause:** clear **CTA** (restart, try again); **restart** must restore input affordances (e.g. pointer-lock click target)
- **Juice:** muzzle flash, crosshair pulse, brief chroma—**budget** particles and lights for 60/30 FPS targets
- **Post-processing:** sparing on mobile; materials/fog over heavy composers
- **Accessibility:** readable UI; optional reduced motion (tone down shake/flash)

**Output:** **Presentation notes** tied to platform (what differs on phone vs desktop).

---

## Phase 6 — Scope

**Goal:** **One shippable arcade slice** vs backlog.

Produce:

- **MVP:** smallest loop that delivers **start → pressure → score/game over → restart**
- **Cut list:** deferred systems (meta, skins, many enemy types) with reasons
- **Stretch goals:** extra waves, bosses, cosmetics—**after** core loop is fun
- **Milestones:** greybox arena → **run flow** → spawn ramp → juice pass

**Output:** **Scope table** (MVP / stretch / cut).

### Difficulty & pacing (config) — core for arcade

Encode tuning in **`config.ts` (or one module)**—arcade quality lives here:

- **Time variable:** e.g. `timeInRun`, wave index, or pointer-locked play time—drive ramps from it.
- **Curves:** **lerp** or easing from **starting values** toward **asymptotic caps** (spawn interval, enemies per wave, speed multipliers).
- **Name keys explicitly:** e.g. `spawnIntervalStart`, `spawnIntervalMin`, `spawnRampSeconds`, `perSpawnStart`, `perSpawnMax`, `enemySpeedMulPerWave` so Phase 7 and code stay aligned.

---

## Phase 7 — Build spec

**Goal:** Executable plan for implementation.

Before coding, emit a **build spec** containing:

1. **Prerequisites** (when relevant): e.g. “Roadmap A–E complete” or “reuse existing `main.ts` loop and input module”—especially for **empty or greenfield** repos.
2. **Repo layout** (directories: `src/game`, `src/systems`, assets, public)
3. **Entry points** and game loop (init → update → render)
4. **Module boundaries** (player, enemies, weapons, UI, audio)
5. **Config surface** (constants or JSON); **difficulty ramp keys** are required for wave/survival arcade (see Phase 6)
6. **Platform notes:** pointer lock guard, touch controls, safe areas, build commands for web + optional wrapper
7. **Performance budget:** target FPS, max lights, pooling rules, draw-call awareness
8. **Spawning / bounds:** `minSpawnDistanceFromPlayer`, separate **margins** for player vs larger enemies, **clamp after movement** each frame to avoid tunneling into walls
9. **Test plan:** manual **full run** per platform (start → game over → restart); pointer lock path if FPS
10. **Score persistence** (optional): `localStorage` key names if high score is in MVP

Then implement **MVP first** in small commits; match existing project patterns.

---

## Three.js implementation reminders

- **Resize:** listen to `resize` / visual viewport; update camera aspect and `renderer.setSize` (and limits on DPR).
- **FPS on web:** request pointer lock on user gesture; handle unlock and UI state.
- **Mobile:** large touch targets; avoid tiny HUD text; reduce shadow/post FX defaults.
- **2D arcade:** orthographic camera with **consistent world units**; one atlas for sprites when using quads.
- **Pooling:** **mandatory** for bullets, enemies, pickups, particles when wave counts climb.
- **Loading:** keep MVP asset set small; async setup with a simple “press start” gate if needed.
- **Arcade perf:** cap active particles/lights; prefer **instancing** or merged geometry for many similar props; profile on target phones.

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

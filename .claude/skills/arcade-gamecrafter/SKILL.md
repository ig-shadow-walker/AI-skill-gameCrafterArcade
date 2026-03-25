---
name: arcade-gamecrafter
description: Skill id arcade-gamecrafter for the ig-shadow-walker/gameCrafter repo. User must reference arcade + gamecrafter (e.g. arcade gamecrafter, @arcade-gamecrafter). Arcade-style Three.js games—score, waves, arena FPS, twin-stick, runners, survival slices, restart loops, config ramps. Shooting games require visible shoot feedback (e.g. muzzle flash) on every shot unless user opts out. Input—GameActionState + desktop/mobile binders, pointer-lock-safe fire, touch mode (see SKILL Input handling architecture). While building, ask about vibe and lighting at sensible milestones. Phases Idea→build spec + template roadmap A–H. Prefers asking over assuming; step-by-step or autonomous pacing.
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
- While **building or stepping through implementation**, do **not** silently guess **vibe** (overall mood, tone, palette, references) or **lighting** (key/fill/ambient, contrast, fog, shadows, time-of-day feel)—**ask the user** at sensible milestones (e.g. first lit scene, materials pass, polish). Short, concrete questions beat a default look they did not want.

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
- As the **Three.js scene** comes together (first lights, sky/fog, materials, UI chrome), **ask about vibe and lighting** as you go—e.g. mood and references, warm vs cool, harsh vs soft light, shadow budget on mobile—unless the user already gave a clear art direction.
- Before starting heavy work on the **next** phase, use the **phase table** below so you don’t skip obvious questions.
- If the user wants less chit-chat, offer **“Use sensible defaults for this chunk”** and still list what you assumed.
- For **roadmap** work ([roadmap.md](roadmap.md) A–H), use the same idea: checkpoint after each **letter phase** (or a tiny pair like A+B), and **ask anytime** scaffolding choices are unclear.

### B — Autonomous pacing

- Prefer **continuous** progress through Phases 1→7 and implementation.
- Keep a running **Assumptions** list for inferred details—but **do not** hide uncertainty there: if you’re not confident, **ask** instead of assuming.
- Same **ask-when-needed** rule as mode A; the difference is **fewer mandatory review stops**, not fewer questions when information is missing.
- Before locking in a **lighting rig**, strong **color grading**, or a **distinct visual vibe**, **check in once** with the user (or state explicit **Assumptions** they can correct) so the game’s look matches their intent.

### Clarifying questions — what to probe by phase

Use this as a **prompt checklist** whenever you are about to enter the listed phase—or whenever that topic is still fuzzy. Skip what the user already answered.

| Next phase | Clarify if missing |
|------------|-------------------|
| **2 Design** | **Game over** vs endless; **target run length** (e.g. 60s–5m); **primary score** (points, time alive, wave #); camera/control per platform |
| **3 Systems** | **Lives / continues?**; hitscan vs projectiles; **wave or spawn ramp**; local **high score** or session-only; pooling for bullets/enemies; **shoot visual feedback** (muzzle flash / equivalent) for any firing weapon |
| **4 Content** | **Single arena vs lanes**; spawn layout; primitives vs GLTF for MVP; minimal **title / game over** copy |
| **5 Presentation** | Score/time/**combo** HUD readability; **game over / restart** flow; juice budget on mobile; DOM HUD vs in-scene; **vibe** (mood, palette, references); **lighting** (key/fill, ambient, fog, shadows, performance) |
| **6 Scope** | Smallest **one-more-run** loop; what proves **skill**, not content volume |
| **7 Build spec** | Repo constraints; `config` keys for **difficulty ramp**; restart → **pointer lock / gesture** path if FPS |
| **Implementation** | Playtest **one full run** (start → game over → restart) before feature creep; reconfirm **vibe** and **lighting** when wiring the renderer if still open |

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
- **Shooting feedback (default):** if the game has **shooting**, **always** ship **visible feedback per shot**—e.g. **muzzle flash** (sprite/mesh/particles), brief emissive or **point-light** pulse, and/or crosshair HUD flash. Silent invisible firing is **not** the default; only skip if the user explicitly wants a bare prototype.
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
- **Mood / read / vibe:** silhouette, color contrast, **HUD legibility** at a glance (arcade-first); optional references (games, film, art) so lighting and materials align later
- **Lighting intent:** day vs night, natural vs neon/studio, how readable silhouettes should stay under pressure (informs Three.js lights + fog + shadows)

**Output:** **Design one-pager** (sections above, 1–3 sentences each).

---

## Phase 3 — Systems

**Goal:** Technical architecture for **arcade** gameplay, not visuals.

Inventory only what the game needs. Typical buckets:

| Area | Examples |
|------|----------|
| World | **Arena or lane bounds**; **spawning** + waves; **min distance from player**, retry or ring fallback |
| Player | Movement; **iframed** invuln or lives; interaction minimal unless genre needs it |
| Combat | Hit detection (hitscan / projectile); **i-frames** or HP; **hit-stop / flash** (subtle, mobile-safe); **on-shot visual** (muzzle flash or equivalent) tied to the fire event |
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
- **Juice / shoot read:** **muzzle flash** (or equivalent) on **every** player shot is the **default MVP bar** for shooters—plus crosshair pulse, brief chroma where appropriate; **budget** particles/lights for 60/30 FPS on mobile (short duration, small bursts)
- **Post-processing:** sparing on mobile; materials/fog over heavy composers
- **Vibe:** overall mood, palette, tone (e.g. gritty, neon arcade, cozy low-poly)—tie to materials, sky, and HUD styling
- **Lighting (Three.js):** directional key + fill, ambient level, color temperature, fog/sky; **shadows** only where performance allows (especially mobile); re-**ask** the user when implementing if Phase 2 left this open
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
11. **Shoot feedback (if shooting):** specify how **muzzle flash** or equivalent is triggered on fire (in-scene vs HUD), duration, and mobile-safe fallbacks

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

### Shoot feedback (firearms / shooting)

**Default:** Games where the **player shoots** (hitscan or projectile) must include **immediate visual feedback on each shot**—typically a **muzzle flash** (billboard/sprite, mesh spike, or short particle burst), optionally plus a **brief light** or **crosshair/HUD** pulse. Hook it to the same code path that **consumes** `firePressed` or fires the weapon so audio and VFX stay in sync. Keep it **lightweight** on phones (few particles, short lifetime). Do not treat this as optional polish unless the user explicitly requests a **silent / debug** pass.

### Web FPS + DOM HUD checklist

| Topic | Pitfall / fix |
|--------|----------------|
| **`hidden` vs CSS** | Rules like `#panel { display: flex }` can **override** the default `[hidden]` behavior. Prefer `#panel:not([hidden]) { … }` or a class such as `.hidden { display: none !important; }`. |
| **Pointer lock target** | `PointerLockControls` locks the controls’ **`domElement`** (often `document.body`). Use **`document`** listeners with **capture** and/or both **`pointerdown` + `mousedown`** so **primary fire** works reliably while locked. |
| **Restart / game state** | When overlays replace the “click to play” blocker, **restore** blocker/instructions on **restart** so the player can **lock the pointer** again. |
| **AudioContext** | Often **suspended** until a user gesture; call **`resume()`** on first click / lock; optionally defer the first SFX until `state === "running"`. |
| **Silent shooting** | **Avoid** shipping firing with **no** on-screen flash or pulse; default to **muzzle flash** (or twin-stick muzzle equivalent) + SFX unless the user opts out. |

### Input handling architecture (desktop + mobile)

Use this pattern when building **Three.js FPS-style** arcade games on **web desktop + mobile**: one logical state, two platform binders, no duplicated movement rules in the game loop.

#### Design goals

1. **One logical action state** — gameplay reads a single struct (e.g. `GameActionState`), not raw DOM events.
2. **Platform-specific bindings** — desktop vs mobile modules only **populate** that state differently.
3. **Pointer lock on desktop** — primary fire and UI clicks must not fight; use **capture** listeners on **`document`** and **gate** fire on the lock target (`pointerLockElement ===` game canvas).
4. **No pointer lock on mobile** — use **touch mode** in the game loop: **manual** camera rotation from accumulated look deltas + a dedicated walk step (e.g. `applyWalk`) instead of `PointerLockControls` movement helpers.
5. **Consistent movement math** — keyboard WASD and the virtual stick share the same **stick vector → velocity** path so strafe/forward stay aligned.

#### Shared type: `GameActionState`

Define in a game types module (e.g. `src/game/types.ts`). The game reads this every frame.

| Field | Desktop | Mobile | Notes |
|--------|---------|--------|--------|
| `forward` / `back` / `left` / `right` | WASD | Often unused (stick) | Can stay `false` on mobile |
| `jump` | Space (typical) | Optional | Omit if genre does not need it |
| `reload` | `R` held | Reload button down/up | Game starts reload when `true` + rules allow |
| `firePressed` | Primary click while locked | Fire `pointerdown` | **Semi-auto latch:** consume when a shot fires or clear when invalid |
| `lookDeltaX` / `lookDeltaY` | `0` | Accumulated drag deltas (px) | Cleared by game after applying rotation |
| `moveStickX` / `moveStickY` | `0` | Virtual joystick −1…1 | Forward = **screen-up** positive on `Y`; strafe right = positive `X` |

**Keyboard-only keys:** map `event.code` to action keys with a **narrow type** (e.g. `KeyboardBooleanKey`) so you do not assign booleans to numeric fields like `lookDeltaX`.

#### Desktop binder (e.g. `input.ts`)

- **Movement:** `keydown` / `keyup` on `window` update booleans; `preventDefault` on mapped keys where needed to avoid scroll/shortcuts.
- **Primary fire (pointer-lock safe):** listen on **`document`** with **`pointerdown` / `mousedown` in capture phase** so clicks still register while locked.
- **Only set `firePressed` when `document.pointerLockElement ===`** the **game canvas** so “Play” / menus do not count as shots.
- Handlers are created **inside** `bind(canvas)` so they close over the correct canvas reference.
- **Focus loss:** on `window` **`blur`**, clear movement booleans and `firePressed` so keys do not stick.
- **API:** `createInput()` returns `{ actions, bind(canvas) }`; **`bind` returns an unsubscribe** for teardown.

#### Mobile binder (e.g. `inputMobile.ts`)

- **Layout (HTML/CSS):** `#touch-look` full-screen layer (`inset: 0`) **under** joystick and buttons in paint order; **higher `z-index`** on controls so stick and Fire/Reload stay clickable (`pointer-events: auto` on buttons).
- **Look:** `pointerdown` / `move` / `up` on the look zone with **`setPointerCapture`**; accumulate **`lookDeltaX` / `lookDeltaY`** in pixels; game converts to radians (e.g. `config.touchLookSensitivity`, optional width scaling).
- **Move stick:** `dx`, `dy` from stick center; clamp to max radius; normalize roughly to −1…1: `moveStickX = kx / maxR`, `moveStickY = -ky / maxR` (invert screen Y so **push up** = forward positive).
- **Multitouch:** track separate **pointer IDs** for look vs joystick vs buttons.
- **API:** `createMobileInput()` returns `{ actions, bind(els) }` where `els` is a small struct (look zone, joystick zone + knob, fire, reload).

#### Game integration (e.g. `Game.ts`)

- **`touchMode: false` (desktop):** `PointerLockControls` for mouse look; movement via `moveRight` / `moveForward` from horizontal velocity—**sign of `moveForward`** must match your convention (document positive `velocity.z` as forward if that is what you use).
- **`touchMode: true` (mobile):** no session pointer lock; **`playing`** from “tap to play”; apply `lookDelta*` with sensitivity, then **clamp pitch** (e.g. `touchPitchLimit`); **movement:** `applyWalk(dt)` — build horizontal direction from `(-velocity.x, 0, -velocity.z)` in camera space, apply camera yaw quaternion, zero Y, normalize, step by `hypot(vx, vz) * dt`.
- **`sessionActive()`:** desktop: `document.pointerLockElement === domElement`; mobile: `playing && !gameOver`. While inactive, skip simulation input (HUD may still update).
- **Unified movement (keys + stick):** build `(sx, sy)` from WASD **or** `moveStickX` / `moveStickY` in touch mode. If length above a dead zone: `nx = sx / stickLen`, `nz = -sy / stickLen`; accelerate (e.g. `velocity.x -= nx * acc * dt * mag`, `velocity.z -= nz * acc * dt * mag` with `mag` tied to stick magnitude, capped). Cap speed, then apply **either** `applyWalk` (touch) **or** `PointerLockControls` moves (desktop).
- **Firing:** `firePressed` stays latched until the game fires or clears it (reload blocking, empty mag, etc.); optionally **buffer** one shot through fire cooldown.
- **Shoot feedback:** when a shot actually fires, trigger **muzzle flash** (or equivalent) in the same frame/tick so the player always sees that shooting happened.

#### Audio / gesture policy

Browsers may suspend `AudioContext` until a user gesture; call **`resume()`** on “Play” / first lock / first tap (see gun/audio module and entry `main` / `main-mobile`).

#### Pitfalls (other games)

| Issue | Mitigation |
|--------|------------|
| Fire does nothing while pointer locked | `document` + **capture**; do not attach fire only to `canvas` |
| Menu “Play” registers as a shot | Gate `firePressed` on `pointerLockElement ===` game canvas |
| `[hidden]` overlay still clickable | CSS: `.overlay[hidden] { display: none !important; }` (or equivalent) |
| Strafe inverted vs WASD | One `nx` / `nz` formula for stick and keys; verify against `moveRight` / `moveForward` signs |
| Mobile look steals joystick touches | Look layer **behind** controls; higher `z-index` on controls |
| Stuck keys | Clear on `blur`; clear stick on `pointerup` / `pointercancel` |
| `keyMap` typing | Narrow mapped keys to **boolean** fields only |

#### Suggested file map (adapt paths to the repo)

| Piece | Typical location |
|--------|------------------|
| Logical state type | `src/game/types.ts` |
| Desktop bindings | `src/systems/input.ts` |
| Mobile bindings | `src/systems/inputMobile.ts` |
| Mode + camera + move + fire | `src/game/Game.ts` (or small `playerController` module) |
| Touch tuning | `src/game/config.ts` (`touchLookSensitivity`, `touchPitchLimit`, …) |
| Desktop / mobile bootstrap | `src/main.ts`, `src/main-mobile.ts`, optional `mobile.html` |
| Touch layout CSS | e.g. `src/style.css` (`.touch-ui`, `.touch-look`, `.touch-joystick`, `.touch-btn`) |

#### Optional extensions

- **Gamepad:** map into the same `GameActionState` (or merge a parallel struct each frame).
- **Invert Y / sensitivity sliders:** adjust only the layer that writes `lookDelta*` or sensitivity constants.
- **Gyro look:** add deltas into `lookDeltaX/Y` or a separate field merged in the same camera block.

**Rule for new platforms:** avoid forking the whole game loop—fork only the binder that fills `GameActionState`, and keep movement/fire rules in one place.

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

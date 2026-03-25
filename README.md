# GameCrafter

**GameCrafter** is a workspace for designing and building **2D and 3D games** that target the **web, tablets, mobile devices, and desktop** (including wrapped or native-style apps). The technical backbone is **[Three.js](https://threejs.org/)**—used for full 3D scenes or for 2D-style games via orthographic cameras, quads, sprites, and UI layers.

This repository is intentionally oriented around a **structured creative pipeline** so that high-level ideas (for example, “a first-person zombie survival shooter”) can be broken down into something implementable without skipping planning.

---

## What lives in this project

The same **game-crafter** skill is checked in twice so **Cursor** and **Claude Code** can each load it from their conventional paths:

| Tool | Path |
|------|------|
| Cursor | `.cursor/skills/game-crafter/` |
| Claude Code | `.claude/skills/game-crafter/` |

| File | Purpose |
|------|---------|
| `SKILL.md` | Main instructions: game-design phases (Idea → build spec), Three.js reminders, and **template repo roadmap** (phases A–H) for scaffolding this workspace. |
| `roadmap.md` | Step-by-step checklist for turning the repo into a full starter kit (Vite baseline → engine glue → input → layout → reference game → PWA → skill/code sync → CI). |
| `reference.md` | Deeper templates (build spec skeleton, platform matrix, genre → camera/control hints). |

The Claude Code copy of `SKILL.md` includes a short note about the **`/game-crafter`** slash command; otherwise keep **all three files** in `.cursor` and `.claude` copies aligned when you change the workflow.

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

## Using the skill in Claude Code

1. Open this repository as the **project** in Claude Code (so `.claude/skills/` is discovered).  
2. Run **`/game-crafter`** to load the full playbook, or describe your game in natural language; Claude can auto-invoke the skill when your message matches its **description**.  
3. For long templates, Claude can read `.claude/skills/game-crafter/reference.md` when needed.

Official reference: [Extend Claude with skills](https://code.claude.com/docs/en/skills).

---

## Roadmap (suggested)

The **game-crafter** skill encodes a full **template repository roadmap** (phases **A–H**) in `roadmap.md`—agents follow it when you ask to scaffold or extend this repo. In short:

- **A–B:** Vite + TypeScript + Three.js, then resize/DPR, timestep, disposal.  
- **C–D:** Input abstraction + HUD/safe area, then `src/game` layout and an example build spec.  
- **E:** One minimal reference game (primitives).  
- **F–H:** PWA, optional wrapper, align docs/skills with real paths, CI and LICENSE.

See `.cursor/skills/game-crafter/roadmap.md` (or the same path under `.claude`) for the full checklist and exit criteria.

---

## Credits

**GameCrafter** was built by **shadow-walker**.

---

## License

Add a `LICENSE` file when you decide how you want this project shared.

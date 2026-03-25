# GameCrafter

**GameCrafter** is a workspace for designing and building **arcade-style 2D and 3D games** (score, waves, short sessions, restart loops) that target the **web, tablets, mobile devices, and desktop** (including wrapped or native-style apps). The technical backbone is **[Three.js](https://threejs.org/)**—full 3D or 2D-style via orthographic cameras, quads, sprites, and UI layers.

The **arcade-gamecrafter** skill bundled here is **for arcade games specifically**: short, replayable sessions, clear score or survival pressure, and tight restart loops—not long-form RPGs or open-world scope unless you deliberately narrow the brief to an arcade slice.

This repository is intentionally oriented around a **structured creative pipeline** so that high-level ideas (for example, “a first-person zombie survival arena” or “twin-stick wave shooter”) can be broken down into something implementable without skipping planning.

---

## What lives in this project

The **arcade-gamecrafter** skill (skill id + folder name) teaches agents to plan and implement **arcade-style** games—waves, combos, skill checks, and “one more run” flow—using the phases and roadmap below. It is checked in twice so **Cursor** and **Claude Code** can each load it from their conventional paths:

| Tool | Path |
|------|------|
| Cursor | `.cursor/skills/arcade-gamecrafter/` |
| Claude Code | `.claude/skills/arcade-gamecrafter/` |

| File | Purpose |
|------|---------|
| `SKILL.md` | Main instructions: **arcade-first** game-design phases (Idea → build spec), Three.js reminders, and **template repo roadmap** (phases A–H) for scaffolding this workspace. |
| `roadmap.md` | Step-by-step checklist for turning the repo into a full starter kit (Vite baseline → engine glue → input → layout → **arcade reference game** → PWA → skill/code sync → CI). |
| `reference.md` | Deeper templates (build spec skeleton, run flow / score, platform matrix, **arcade** genre → camera/control hints). |

Configure a slash command such as **`/arcade-gamecrafter`** (or say **arcade gamecrafter** / **gameCrafter arcade** in natural language). Keep **all three files** in `.cursor` and `.claude` copies aligned when you change the workflow.

Game source code, assets, and build tooling can be added here as the project grows; the skill is meant to guide both **analysis** and **implementation** in that same tree.

---

## The GameCrafter workflow (Idea → build spec)

The skill teaches the agent to work **top-down** and produce concrete artifacts at each step. While building, the agent should **check in on vibe and lighting** (mood, palette, Three.js lights, fog, shadows) at sensible milestones instead of silently assuming a look.

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
3. Describe the game you want, or ask the agent to follow **`arcade gamecrafter`** / **`@arcade-gamecrafter`** / the **gameCrafter** arcade workflow (and optionally **phase by phase** before coding).  

The skill’s YAML **description** expects **arcade** + **gamecrafter** and the **ig-shadow-walker/gameCrafter** repo name for reliable matching. For templates, the agent can read `reference.md`.

---

## Using the skill in Claude Code

1. Open this repository as the **project** in Claude Code (so `.claude/skills/` is discovered).  
2. Run **`/arcade-gamecrafter`** (if configured) or say **arcade gamecrafter** / **gameCrafter arcade**; Claude can auto-invoke when your message matches the skill **description**.  
3. For long templates, Claude can read `.claude/skills/arcade-gamecrafter/reference.md` when needed.

Official reference: [Extend Claude with skills](https://code.claude.com/docs/en/skills).

---

## Roadmap (suggested)

The **arcade-gamecrafter** skill encodes a full **template repository roadmap** (phases **A–H**) in `roadmap.md`—agents follow it when you ask to scaffold or extend this repo. In short:

- **A–B:** Vite + TypeScript + Three.js, then resize/DPR, timestep, disposal.  
- **C–D:** Input abstraction + HUD/safe area, then `src/game` layout and an example build spec.  
- **E:** One minimal reference game (primitives).  
- **F–H:** PWA, optional wrapper, align docs/skills with real paths, CI and LICENSE.

See `.cursor/skills/arcade-gamecrafter/roadmap.md` (or the same path under `.claude`) for the full checklist and exit criteria.

---

## Credits

**GameCrafter** was built by **[ig-shadow-walker](https://github.com/ig-shadow-walker)**.

---

## License

Add a `LICENSE` file when you decide how you want this project shared.

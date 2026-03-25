# Reference: build spec skeleton and platforms (arcade)

## Build spec template

Use this as the structure for Phase 7 output for **arcade-style** games (adapt sections to the title).

```markdown
# Build spec: [Game name]

## Summary
[One paragraph]

## Tech
- Runtime: Three.js [version], TypeScript, Vite
- Optional: React Three Fiber (only if project already uses it)

## Repository layout
```
src/
  main.ts              # bootstrap, resize, loop
  game/
    Game.ts            # orchestrates systems
    config.ts          # tunables
  systems/
    [system].ts
  render/
    setupRenderer.ts
    setupScene.ts
public/
  assets/              # optional gltf, audio, textures
```

## Game loop
- `init()` → load assets → build scene → bind input
- `update(dt)` → systems in order: [list]
- `render()` → single `renderer.render` (and helpers if using composers)

## Run flow (arcade)
- States: **title / attract** → **countdown or ready** → **playing** → **game over** → **restart**
- What resets on restart: score, wave, entities, **pointer-lock blocker** if FPS
- Pause: optional; if present, same input abstraction as playing

## Score & pressure
- Primary metric: **score** | **time alive** | **wave** | **combo** (pick and name in HUD)
- **High score:** session-only vs `localStorage` (key names)
- **Failure:** one-hit | lives | timer | boundary—state exact rule

## Systems (MVP)
| System | Responsibility | Depends on |
|--------|----------------|------------|
| ... | ... | ... |

## Input mapping
| Action | Desktop | Mobile | Tablet |
|--------|---------|--------|--------|
| Move | ... | ... | ... |
| Look | ... | ... | ... |
| Fire | ... | ... | ... |

For **Three.js FPS + touch**, use the canonical pattern in **`SKILL.md` → Input handling architecture** (logical `GameActionState`, `input.ts` / `inputMobile.ts` binders, `sessionActive`, unified `(sx, sy)` movement, pointer-lock fire gating).

## Content (MVP)
- [ ] ...

## Performance
- Target: 60 FPS desktop / 30–60 mobile
- Max dynamic lights: ...
- Pooling: ...

## Spawning rules (optional; FPS / arena)
- `minSpawnDistanceFromPlayer`: ...
- Max random pick attempts before fallback
- Fallback: ring or fixed spawn points around arena edge

## Combat feedback (shooting games — default, not optional)
- **Muzzle flash** (or equivalent in-scene/HUD pulse) on **every** shot the player fires—see **`SKILL.md` → Shoot feedback**; pair with SFX.
- Optional extras: hitscan tracer or debug line, crosshair pulse, brief dynamic light.
- Procedural or pooled SFX module (gesture-unlocked `AudioContext`)

## Types / toolchain (optional)
- Some **Three.js** npm setups need **`@types/three`** for `tsc --noEmit`; keep **`three`** and **`@types/three`** versions aligned per project docs.

## Build and run
- `npm run dev` / `npm run build`
- Optional: PWA manifest, Capacitor/Electron notes

## Manual test checklist
- [ ] ...
```

## Platform matrix (Three.js)

| Concern | Web desktop | Web mobile/tablet | Wrapped app |
|---------|-------------|-------------------|-------------|
| Pointer lock | Yes for FPS | Not reliable; use touch look or simplified camera | Same as host WebView |
| DPR | 1–2 typical | Cap at 1.5–2 | Follow device |
| Audio | User gesture unlock | Same | Same |
| Fullscreen | API available | Limited | Native chrome |

## Genre → default camera / control hints (arcade-first)

| Genre | Default camera | Desktop | Mobile |
|-------|----------------|---------|--------|
| Arena FPS / horde | Perspective + pointer lock | WASD + mouse | Simplified look + stick (or scoped desktop-only) |
| Twin-stick / arena shooter | Ortho or high perspective | WASD + aim toward mouse | Dual stick |
| Runner / lane dodge | Follow or side ortho | Arrows / WASD lanes | Swipe / tap lanes |
| Shmup / bullet-hell-lite | Side or top ortho | Arrows + fire | Touch drag + auto-fire option |
| Survival / dodge | Top or iso ortho | WASD | Virtual stick |
| Third-person brawler slice | Follow camera | WASD + mouse orbit | Single stick + buttons |

These are defaults; adjust to user requirements and scope.

### Arena FPS / horde (arcade slice)

- **Stack:** pointer lock + WASD + **hitscan** (or projectiles); **one `config` module** for weapon, enemy tuning, **spawn curve**, arena **margins**.
- **MVP slice:** bounded **arena**, chase AI, **contact or ranged** damage, **shoot feedback** (audio/visual), **time or score HUD**, **restart** that restores pointer-lock affordance (blocker/instructions).
- Cross-check **Web FPS + DOM HUD**, **Input handling architecture**, and **spawning** in `SKILL.md` before calling the slice done.

### Endless runner / lane (arcade slice)

- **MVP:** forward pressure (scroll or fake velocity), **3 lanes** or binary dodge, **one obstacle type**, score by distance or time, **game over + instant restart**.

### Twin-stick arena (arcade slice)

- **MVP:** bounded arena, **move + aim decoupled**, spawning from edges, **wave or timer ramp** in `config`, pooling for enemies/projectiles.

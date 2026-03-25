# Reference: build spec skeleton and platforms

## Build spec template

Use this as the structure for Phase 7 output (adapt sections to the game).

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

## Combat feedback (optional)
- Hitscan tracer or debug line, muzzle HUD flash, crosshair pulse
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

## Genre → default camera / control hints

| Genre | Default camera | Desktop | Mobile |
|-------|----------------|---------|--------|
| FPS | Perspective + pointer lock | WASD + mouse | Dual-stick or gyro (optional) |
| Third-person | Follow camera | WASD + mouse orbit | Single stick move + swipe look |
| Top-down / twin-stick | Ortho or high perspective | WASD + aim toward mouse | Dual stick |
| 2D sidescroller | Ortho side-on | Arrows / space | Touch left/right + jump |

These are defaults; adjust to user requirements and scope.

### FPS horde / survival (short addendum)

- **Stack:** pointer lock + WASD + **hitscan** (or projectiles); **one `config` module** for weapon, enemy tuning, **spawn curve**, arena **margins**.
- **MVP slice:** bounded **arena**, chase AI, **contact or ranged** damage, **shoot feedback** (audio/visual), **time or score HUD**, **restart** that restores pointer-lock affordance (blocker/instructions).
- Cross-check **Web FPS + DOM HUD** and **spawning** bullets in `SKILL.md` before calling the slice done.

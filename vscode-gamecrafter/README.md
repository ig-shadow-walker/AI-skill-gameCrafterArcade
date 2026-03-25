# GameCrafter (VS Code / Cursor extension)

This folder is a **Visual Studio Code extension** that **bundles** the same Agent Skill files as `.cursor/skills/game-crafter/` in the parent repo. It does **not** replace project skills; it packages them for install via VSIX or **Run Extension** debugging.

Built by **shadow-walker**.

## What’s inside

| Path | Purpose |
|------|---------|
| `.cursor/skills/game-crafter/SKILL.md` | Main skill (game pipeline + template roadmap). |
| `.cursor/skills/game-crafter/reference.md` | Build spec template, platform matrix. |
| `.cursor/skills/game-crafter/roadmap.md` | Phases A–H for the starter repo. |
| `extension.js` | Commands to open files, reveal folder, copy skill into a workspace. |

The bundled tree mirrors **Cursor’s project skill path** (`.cursor/skills/<skill-name>/`) so a copy into your repo root matches what Cursor discovers.

## Commands (Command Palette)

- **GameCrafter: Open SKILL.md** — preview/edit the bundled skill.
- **GameCrafter: Open reference.md** / **Open roadmap.md**
- **GameCrafter: Reveal bundled skills folder in file manager**
- **GameCrafter: Copy skill to workspace `.cursor/skills/game-crafter`** — copies the bundled folder into the **first** opened workspace folder (for Cursor Agent Skills discovery).

After copying, mention **game-crafter** or your game idea in Agent chat so Cursor can use the skill.

## Develop locally

1. Open **`vscode-gamecrafter`** as the workspace root in VS Code or Cursor (File → Open Folder…).
2. Run **Run → Start Debugging** (F5) and pick **Run GameCrafter Extension**.
3. In the new Extension Development Host window, use the Command Palette to run **GameCrafter:** commands.

## Package a `.vsix`

1. Install [vsce](https://github.com/microsoft/vscode-vsce): `npm i -g @vscode/vsce`
2. From this directory:

```bash
cd vscode-gamecrafter
vsce package
```

3. Install the generated `.vsix` in Cursor/VS Code: **Extensions → … → Install from VSIX…**

**Note:** Publishing to the Visual Studio Marketplace requires a unique [publisher id](https://code.visualstudio.com/api/working-with-extensions/publishing-extension); change `"publisher"` in `package.json` if `shadow-walker` is taken.

## Syncing with the repo skill

When you edit `.cursor/skills/game-crafter/*` in the parent project, copy those files into `vscode-gamecrafter/.cursor/skills/game-crafter/` before packaging a new VSIX (or automate in CI).

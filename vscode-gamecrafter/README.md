# GameCrafter (VS Code / Cursor extension)

Loads the **GameCrafter** Cursor Agent Skill into **your project** by copying the bundled `.cursor/` tree to `<project>/.cursor/`. Cursor only discovers skills from the folder you have open.

Built by **shadow-walker**.

## Command

- **GameCrafter: Load skill** (Command Palette) — copies bundled `.cursor` into each workspace root (multi-root safe). Existing files at the same paths are overwritten.

On first open of a project without `.cursor/skills/game-crafter/SKILL.md`, you get a one-time **Load skill** / **Skip** prompt.

## Develop

1. Open **`vscode-gamecrafter`** as the workspace folder.
2. **F5** → **Run GameCrafter Extension**.
3. In the new window, open a test project and run **GameCrafter: Load skill**.

## Package `.vsix`

```bash
cd vscode-gamecrafter
npx @vscode/vsce package
```

Install via **Extensions → Install from VSIX…**

## Sync skill files

After editing `.cursor/skills/game-crafter/*` in the parent repo, copy them into `vscode-gamecrafter/.cursor/skills/game-crafter/` before packaging.

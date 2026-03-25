# GameCrafter (Cursor / VS Code extension)

Installs the **arcade-gamecrafter** skill for **ig-shadow-walker/gameCrafter** into **your project** by copying the bundled `.cursor/skills/arcade-gamecrafter/` tree into `<project>/.cursor/`. Cursor discovers skills from the workspace folder you have open.

**Invoke in chat** by mentioning **arcade** and **gamecrafter** / **gameCrafter**, or the skill id **`arcade-gamecrafter`** / **`@arcade-gamecrafter`** (if supported).

## Install (Cursor)

1. Open **Extensions** (`Cmd+Shift+X` / `Ctrl+Shift+X`).
2. Search for **GameCrafter** (Cursor loads extensions from the [Open VSX Registry](https://open-vsx.org/)).
3. Click **Install**.

You can also install from a local `.vsix`: **Extensions → … → Install from VSIX…**

## Command

- **GameCrafter: Load skill** (Command Palette) — copies the bundled skill into each workspace root (multi-root safe). Existing files at the same paths are overwritten.

On first open of a project without `.cursor/skills/arcade-gamecrafter/SKILL.md`, you get a one-time **Load skill** / **Skip** prompt.

## Publish (Open VSX → Cursor)

Cursor’s extension gallery uses **Open VSX**, not the Microsoft Marketplace.

1. Create an account and claim the publisher namespace that matches `publisher` in `package.json` (see [open-vsx.org](https://open-vsx.org/)).
2. From this folder:

   ```bash
   npm install
   npm run package
   ```

3. Publish the generated `.vsix`:

   ```bash
   npx ovsx publish ./*.vsix -p <your-open-vsx-token>
   ```

4. Optional: request a [verified publisher badge](https://cursor.com/docs/configuration/extensions) from Cursor after the listing is live.

## Develop

1. Open **`vsx-gamecrafter`** as the workspace folder.
2. **F5** → **Run GameCrafter Extension**.
3. In the new window, open a test project and run **GameCrafter: Load skill**.

## Sync skill files before packaging

After editing `.cursor/skills/arcade-gamecrafter/*` in the parent repo, copy them into `vsx-gamecrafter/.cursor/skills/arcade-gamecrafter/` before `npm run package`.

Built by **[ig-shadow-walker](https://github.com/ig-shadow-walker)**.

## License

MIT — see [LICENSE](./LICENSE).

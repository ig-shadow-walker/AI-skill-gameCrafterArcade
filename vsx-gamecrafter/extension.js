"use strict";

const path = require("path");
const fs = require("fs/promises");
const vscode = require("vscode");

const WORKSPACE_PROMPT_KEY = "gamecrafter.installPromptShown";

/**
 * @param {string} src
 * @param {string} dest
 */
async function mergeCopyInto(src, dest) {
  const stat = await fs.stat(src);
  if (stat.isFile()) {
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.copyFile(src, dest);
    return;
  }
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const ent of entries) {
    await mergeCopyInto(path.join(src, ent.name), path.join(dest, ent.name));
  }
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const cursorRoot = path.join(context.extensionPath, ".cursor");

  async function loadSkillIntoWorkspaceFolders() {
    const folders = vscode.workspace.workspaceFolders;
    if (!folders?.length) {
      vscode.window.showWarningMessage(
        "GameCrafter: open a folder workspace (your project) first — Agent reads `.cursor/skills` from the project root."
      );
      return;
    }
    try {
      await fs.access(cursorRoot);
    } catch {
      vscode.window.showErrorMessage("GameCrafter: bundled .cursor folder is missing from the extension.");
      return;
    }
    try {
      for (const folder of folders) {
        const destRoot = vscode.Uri.joinPath(folder.uri, ".cursor").fsPath;
        await mergeCopyInto(cursorRoot, destRoot);
      }
      const n = folders.length;
      vscode.window.showInformationMessage(
        n === 1
          ? "GameCrafter: skill loaded — Cursor Agent can use it from this folder."
          : `GameCrafter: skill loaded into ${n} workspace folders.`
      );
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      vscode.window.showErrorMessage(`GameCrafter: load skill failed: ${msg}`);
    }
  }

  context.subscriptions.push(
    vscode.commands.registerCommand("gamecrafter.loadSkill", () => loadSkillIntoWorkspaceFolders())
  );

  void (async () => {
    const folders = vscode.workspace.workspaceFolders;
    if (!folders?.length || context.workspaceState.get(WORKSPACE_PROMPT_KEY)) return;
    const marker = vscode.Uri.joinPath(folders[0].uri, ".cursor", "skills", "game-crafter", "SKILL.md");
    try {
      await vscode.workspace.fs.stat(marker);
      return;
    } catch {
      /* not in project yet */
    }
    const choice = await vscode.window.showInformationMessage(
      "GameCrafter: load the skill into this project so Cursor Agent can discover it.",
      "Load skill",
      "Skip"
    );
    await context.workspaceState.update(WORKSPACE_PROMPT_KEY, true);
    if (choice === "Load skill") {
      await loadSkillIntoWorkspaceFolders();
    }
  })();
}

function deactivate() {}

module.exports = { activate, deactivate };

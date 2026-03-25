"use strict";

const path = require("path");
const fs = require("fs/promises");
const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const skillDir = path.join(context.extensionPath, ".cursor", "skills", "game-crafter");

  const openMarkdown = async (/** @type {string} */ name) => {
    const filePath = path.join(skillDir, name);
    try {
      const uri = vscode.Uri.file(filePath);
      const doc = await vscode.workspace.openTextDocument(uri);
      await vscode.window.showTextDocument(doc, { preview: false });
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      vscode.window.showErrorMessage(`GameCrafter: could not open ${name}: ${msg}`);
    }
  };

  context.subscriptions.push(
    vscode.commands.registerCommand("gamecrafter.openSkill", () => openMarkdown("SKILL.md")),
    vscode.commands.registerCommand("gamecrafter.openReference", () => openMarkdown("reference.md")),
    vscode.commands.registerCommand("gamecrafter.openRoadmap", () => openMarkdown("roadmap.md")),
    vscode.commands.registerCommand("gamecrafter.revealBundledSkills", async () => {
      const uri = vscode.Uri.file(skillDir);
      await vscode.env.openExternal(uri);
    }),
    vscode.commands.registerCommand("gamecrafter.installSkillToWorkspace", async () => {
      const folder = vscode.workspace.workspaceFolders?.[0];
      if (!folder) {
        vscode.window.showWarningMessage("GameCrafter: open a folder workspace first.");
        return;
      }
      const dest = vscode.Uri.joinPath(folder.uri, ".cursor", "skills", "game-crafter").fsPath;
      const src = skillDir;
      try {
        await fs.mkdir(path.dirname(dest), { recursive: true });
        await fs.cp(src, dest, { recursive: true });
        vscode.window.showInformationMessage(
          "GameCrafter: copied to .cursor/skills/game-crafter — reload or start Agent to use the skill."
        );
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        vscode.window.showErrorMessage(`GameCrafter: copy failed: ${msg}`);
      }
    })
  );
}

function deactivate() {}

module.exports = { activate, deactivate };

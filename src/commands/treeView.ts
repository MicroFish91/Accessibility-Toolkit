import { commands, window } from "vscode";
import { BinarySearchTreeProvider } from "../components/treeView";

export function treeCommands() {
  const bstProvider = new BinarySearchTreeProvider();
  window.registerTreeDataProvider("treeView", bstProvider);

  return [
    commands.registerCommand("a11y-kit.treeViewInsert", () => {
      const val = Math.floor(Math.random() * 30 + 1);
      bstProvider.insertTreeItem(val);
      bstProvider.refresh();
    }),
    commands.registerCommand("a11y-kit.treeViewRefresh", () => {
      bstProvider.refresh();
    }),
    commands.registerCommand("a11y-kit.treeViewEditEntry", () => {
      console.log("Editing entry.");
    }),
    commands.registerCommand("a11y-kit.treeViewDeleteEntry", () => {
      console.log("Deleting entry.");
    }),
    commands.registerCommand("a11y-kit.treeViewClear", () => {
      bstProvider.root = null;
      bstProvider.refresh();
    }),
  ];
}

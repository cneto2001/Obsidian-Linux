/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ToggleCasePlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// src/constants.ts
var LOWERCASE_ARTICLES = ["the", "a", "an"];

// src/utils.ts
var defaultMultipleSelectionOptions = { repeatSameLineActions: true };
var withMultipleSelections = (editor, callback, options = defaultMultipleSelectionOptions) => {
  const { cm } = editor;
  const selections = editor.listSelections();
  let selectionIndexesToProcess;
  let newSelections = [];
  if (!options.repeatSameLineActions) {
    const seenLines = [];
    selectionIndexesToProcess = selections.reduce((indexes, currSelection, currIndex) => {
      const currentLine = currSelection.head.line;
      if (!seenLines.includes(currentLine)) {
        seenLines.push(currentLine);
        indexes.push(currIndex);
      }
      return indexes;
    }, []);
  }
  const applyCallbackOnSelections = () => {
    for (let i = 0; i < selections.length; i++) {
      if (selectionIndexesToProcess && !selectionIndexesToProcess.includes(i)) {
        continue;
      }
      const selection = editor.listSelections()[i];
      if (selection) {
        const newSelection = callback(editor, selection, i, options.args);
        newSelections.push(newSelection);
      }
    }
    if (options.customSelectionHandler) {
      newSelections = options.customSelectionHandler(newSelections);
    }
    editor.setSelections(newSelections);
  };
  if (cm && cm.operation) {
    cm.operation(applyCallbackOnSelections);
  } else {
    console.debug("cm object not found, operations will not be buffered");
    applyCallbackOnSelections();
  }
};
var getSelectionBoundaries = (selection) => {
  let { anchor: from, head: to } = selection;
  if (from.line > to.line) {
    [from, to] = [to, from];
  }
  if (from.line === to.line && from.ch > to.ch) {
    [from, to] = [to, from];
  }
  return { from, to };
};
var isLetterCharacter = (char) => /\p{L}\p{M}*/u.test(char);
var wordRangeAtPos = (pos, lineContent) => {
  let start = pos.ch;
  let end = pos.ch;
  while (start > 0 && isLetterCharacter(lineContent.charAt(start - 1))) {
    start--;
  }
  while (end < lineContent.length && isLetterCharacter(lineContent.charAt(end))) {
    end++;
  }
  return {
    anchor: {
      line: pos.line,
      ch: start
    },
    head: {
      line: pos.line,
      ch: end
    }
  };
};

// src/main.ts
var DEFAULT_SETTINGS = {
  shouldSyncCaseMultiCursor: true
};
var ToggleCasePlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.caseSyncCheckText = null;
  }
  async onload() {
    await this.loadSettings();
    this.addCommand({
      id: "toggle-case",
      name: "Toggle Case",
      editorCallback: (editor) => withMultipleSelections(editor, (editor2, selection, index) => this.toggleCase(editor2, selection, index), { ...defaultMultipleSelectionOptions })
    });
    this.addSettingTab(new SettingsTab(this.app, this));
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  toggleCase(editor, selection, index) {
    let { from, to } = getSelectionBoundaries(selection);
    let selectedText = editor.getRange(from, to);
    if (selectedText.length === 0) {
      const pos = selection.head;
      const { anchor, head } = wordRangeAtPos(pos, editor.getLine(pos.line));
      [from, to] = [anchor, head];
      selectedText = editor.getRange(anchor, head);
    }
    const replacementText = this.getNextCase(selectedText, index);
    editor.replaceRange(replacementText, from, to);
    return selection;
  }
  toTitleCase(selectedText) {
    return selectedText.split(/(\s+)/).map((word, index, allWords) => {
      if (index > 0 && index < allWords.length - 1 && LOWERCASE_ARTICLES.includes(word.toLowerCase())) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    }).join("");
  }
  getNextCase(selectedText, index) {
    let textToCheck = selectedText;
    if (this.settings.shouldSyncCaseMultiCursor && index === 0) {
      this.caseSyncCheckText = selectedText;
    }
    if (this.settings.shouldSyncCaseMultiCursor && this.caseSyncCheckText) {
      textToCheck = this.caseSyncCheckText;
    }
    const checkTextUpper = textToCheck.toUpperCase();
    const checkTextLower = textToCheck.toLowerCase();
    const checkTextTitle = this.toTitleCase(textToCheck);
    switch (textToCheck) {
      case checkTextUpper: {
        return selectedText.toLowerCase();
      }
      case checkTextLower: {
        return this.toTitleCase(selectedText);
      }
      case checkTextTitle: {
        return selectedText.toUpperCase();
      }
      default: {
        return selectedText.toUpperCase();
      }
    }
  }
};
var SettingsTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Settings for my awesome plugin." });
    new import_obsidian.Setting(containerEl).setName("Sync case multi-cursor").setDesc("When there are multiple selections, apply the same case transformation to all.").addToggle((toggle) => toggle.setValue(this.plugin.settings.shouldSyncCaseMultiCursor).onChange(async (value) => {
      this.plugin.settings.shouldSyncCaseMultiCursor = value;
      await this.plugin.saveSettings();
    }));
  }
};

/* nosourcemap */
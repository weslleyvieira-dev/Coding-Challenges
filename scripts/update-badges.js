#!/usr/bin/env node

import { readdirSync, existsSync, readFileSync, writeFileSync } from "fs";
import { resolve, join, extname, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO_ROOT = resolve(__dirname, "..");
const README_PATH = join(REPO_ROOT, "README.md");

const BADGES_START = "<!-- BADGES_START -->";
const BADGES_END = "<!-- BADGES_END -->";
const BADGE_STYLE = "for-the-badge";

const LANGUAGE_CONFIG = {
  Javascript: {
    exts: [".js", ".mjs", ".cjs"],
    bgColor: "323330",
    logo: "javascript",
    logoColor: "F7DF1E",
    display: "JavaScript",
  },
};

const IGNORED_DIRS = new Set([".git", "node_modules", "scripts", ".github"]);

function walk(dir) {
  let files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    if (IGNORED_DIRS.has(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files = files.concat(walk(full));
    else files.push(full);
  }
  return files;
}

function countFilesByExtUnder(rootDir, exts) {
  if (!existsSync(rootDir)) return 0;
  return walk(rootDir).filter((f) => exts.includes(extname(f))).length;
}

const encodeBadgeLabel = (s) =>
  encodeURIComponent(s.replace(/-/g, "--").replace(/_/g, "__"));

function buildBadge({ label, count, bgColor, logo, logoColor }) {
  const url = `https://img.shields.io/badge/${encodeBadgeLabel(
    label
  )}-${count}-${bgColor}?style=${BADGE_STYLE}&logo=${logo}&logoColor=${logoColor}`;
  return `![${label}](${url})`;
}

function computeLanguageCounts() {
  const counts = [];
  for (const entry of readdirSync(REPO_ROOT, { withFileTypes: true })) {
    if (!entry.isDirectory() || IGNORED_DIRS.has(entry.name)) continue;
    const config = LANGUAGE_CONFIG[entry.name];
    if (!config) continue;
    const count = countFilesByExtUnder(
      join(REPO_ROOT, entry.name),
      config.exts
    );
    if (count) counts.push({ langName: entry.name, count, config });
  }
  return counts.sort(
    (a, b) => b.count - a.count || a.langName.localeCompare(b.langName)
  );
}

function ensureBadgesBlock(readme) {
  const lines = readme.split(/\r?\n/);
  const startIdx = lines.findIndex((l) => l.includes(BADGES_START));
  const endIdx = lines.findIndex((l) => l.includes(BADGES_END));

  if (startIdx !== -1 && endIdx !== -1 && endIdx >= startIdx)
    return lines.join("\n");

  const divOpenIdx = lines.findIndex((l) =>
    /<div\s+align="center"\s*>/i.test(l.trim())
  );
  if (divOpenIdx !== -1) {
    let insertAt = divOpenIdx + 1;
    for (let i = divOpenIdx + 1; i < lines.length; i++) {
      if (/^##\s+/.test(lines[i].trim())) {
        insertAt = i + 2;
        break;
      }
    }
    lines.splice(insertAt, 0, BADGES_START, BADGES_END, "");
    return lines.join("\n");
  }
  return [BADGES_START, BADGES_END, "", ...lines].join("\n");
}

function replaceBadges(readme, badgesLine) {
  const start = readme.indexOf(BADGES_START);
  const end = readme.indexOf(BADGES_END);
  if (start === -1 || end === -1 || end < start)
    return ensureBadgesBlock(readme);
  return (
    readme.slice(0, start + BADGES_START.length) +
    `\n${badgesLine}\n` +
    readme.slice(end)
  );
}

function main() {
  let readme = readFileSync(README_PATH, "utf8");
  readme = ensureBadgesBlock(readme);
  const counts = computeLanguageCounts();
  const badgesLine = counts
    .map(({ config, count }) =>
      buildBadge({
        label: config.display,
        count,
        bgColor: config.bgColor,
        logo: config.logo,
        logoColor: config.logoColor || "white",
      })
    )
    .join(" ");
  const updated = replaceBadges(readme, badgesLine);
  if (updated !== readme) writeFileSync(README_PATH, updated, "utf8");
}

main();

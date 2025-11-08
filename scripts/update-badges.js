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
    color: "F7DF1E",
    logo: "javascript",
    display: "JavaScript",
  },
  Typescript: {
    exts: [".ts", ".mts", ".cts"],
    color: "3178C6",
    logo: "typescript",
    display: "TypeScript",
  },
  Python: { exts: [".py"], color: "3776AB", logo: "python", display: "Python" },
  Go: { exts: [".go"], color: "00ADD8", logo: "go", display: "Go" },
  Java: { exts: [".java"], color: "007396", logo: "java", display: "Java" },
  "C#": { exts: [".cs"], color: "239120", logo: "c%23", display: "C#" },
  "C++": {
    exts: [".cpp", ".cc", ".cxx", ".hpp", ".hh", ".hxx"],
    color: "00599C",
    logo: "cplusplus",
    display: "C++",
  },
  C: { exts: [".c", ".h"], color: "A8B9CC", logo: "c", display: "C" },
  Rust: { exts: [".rs"], color: "000000", logo: "rust", display: "Rust" },
  Ruby: { exts: [".rb"], color: "CC342D", logo: "ruby", display: "Ruby" },
  Kotlin: {
    exts: [".kt", ".kts"],
    color: "0095D5",
    logo: "kotlin",
    display: "Kotlin",
  },
  Swift: { exts: [".swift"], color: "F05138", logo: "swift", display: "Swift" },
  PHP: { exts: [".php"], color: "777BB4", logo: "php", display: "PHP" },
  Dart: { exts: [".dart"], color: "0175C2", logo: "dart", display: "Dart" },
  Scala: {
    exts: [".scala", ".sc"],
    color: "DC322F",
    logo: "scala",
    display: "Scala",
  },
  R: { exts: [".r", ".R"], color: "276DC3", logo: "r", display: "R" },
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

function buildBadge({ label, count, color, logo }) {
  const url = `https://img.shields.io/badge/${encodeBadgeLabel(
    label
  )}-${count}-${color}?logo=${logo}&logoColor=white&style=${BADGE_STYLE}`;
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
        color: config.color,
        logo: config.logo,
      })
    )
    .join(" ");
  const updated = replaceBadges(readme, badgesLine);
  if (updated !== readme) writeFileSync(README_PATH, updated, "utf8");
}

main();

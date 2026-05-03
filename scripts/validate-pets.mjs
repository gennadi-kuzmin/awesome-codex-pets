import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const petsDir = join(root, "pets");

let failed = false;
let warnings = 0;

function fail(message) {
  failed = true;
  console.error(`FAIL ${message}`);
}

function warn(message) {
  warnings += 1;
  console.warn(`WARN ${message}`);
}

function ok(message) {
  console.log(`OK   ${message}`);
}

for (const slug of readdirSync(petsDir).sort()) {
  const petDir = join(petsDir, slug);
  const manifestPath = join(petDir, "pet.json");

  if (!existsSync(manifestPath)) {
    fail(`${slug}: missing pet.json`);
    continue;
  }

  let manifest;
  try {
    manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  } catch (error) {
    fail(`${slug}: invalid JSON in pet.json (${error.message})`);
    continue;
  }

  for (const field of ["id", "displayName", "description", "spritesheetPath"]) {
    if (typeof manifest[field] !== "string" || manifest[field].trim() === "") {
      fail(`${slug}: pet.json must include non-empty string field "${field}"`);
    }
  }

  if (manifest.id !== slug) {
    fail(`${slug}: manifest id should match folder name`);
  }

  if (manifest.spritesheetPath && !existsSync(join(petDir, manifest.spritesheetPath))) {
    warn(`${slug}: ${manifest.spritesheetPath} is not present yet`);
  }

  ok(`${slug}: manifest checked`);
}

if (failed) {
  process.exit(1);
}

if (warnings > 0) {
  console.warn(`\nCompleted with ${warnings} warning(s).`);
} else {
  console.log("\nAll pets are complete.");
}

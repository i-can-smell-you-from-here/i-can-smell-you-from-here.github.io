import { mkdtempSync, mkdirSync, renameSync, rmSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const output = resolve("out");
const release = resolve("release");
const filename = "i-can-smell-you-from-here-static.zip";

mkdirSync(release, { recursive: true });
const temporary = mkdtempSync(join(release, ".package-"));

try {
  const archive = join(temporary, filename);
  const result = spawnSync("zip", ["-q", "-r", archive, "."], {
    cwd: output,
    stdio: "inherit",
  });
  if (result.error) throw new Error("Packaging requires the zip command on PATH.", { cause: result.error });
  if (result.status !== 0) throw new Error(`zip failed with exit code ${result.status}.`);
  renameSync(archive, join(release, filename));
  console.log(`Package ready: release/${filename} (${statSync(join(release, filename)).size} bytes)`);
} finally {
  rmSync(temporary, { recursive: true, force: true });
}

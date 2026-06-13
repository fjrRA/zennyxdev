// lib/content.ts
import fs from "node:fs";
import path from "node:path";

export const contentDirectory = path.join(process.cwd(), "content");

export function readJsonFile<T>(fileName: string): T {
  const filePath = path.join(contentDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");

  return JSON.parse(fileContent) as T;
}

export function readMarkdownFile(filePath: string): string {
  return fs.readFileSync(filePath, "utf8");
}

export function getMarkdownFiles(directory: string): string[] {
  const fullDirectory = path.join(contentDirectory, directory);

  if (!fs.existsSync(fullDirectory)) {
    return [];
  }

  return fs
    .readdirSync(fullDirectory)
    .filter((fileName) => fileName.endsWith(".md"));
}

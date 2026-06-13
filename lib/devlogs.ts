// lib/devlogs.ts
import path from "node:path";
import matter from "gray-matter";
import type { Devlog, DevlogFrontmatter } from "@/types";
import {
  contentDirectory,
  getMarkdownFiles,
  readMarkdownFile,
} from "./content";

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));

  return `${minutes} min read`;
}

function parseDevlogFile(fileName: string): Devlog {
  const fullPath = path.join(contentDirectory, "devlogs", fileName);
  const fileContent = readMarkdownFile(fullPath);
  const { data, content } = matter(fileContent);

  const frontmatter = data as DevlogFrontmatter;

  return {
    ...frontmatter,
    content,
    readingTime: calculateReadingTime(content),
  };
}

export function getAllDevlogs(): Devlog[] {
  const files = getMarkdownFiles("devlogs");

  return files
    .map((fileName) => parseDevlogFile(fileName))
    .filter((devlog) => devlog.isPublished)
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getFeaturedDevlogs(limit = 3): Devlog[] {
  return getAllDevlogs()
    .filter((devlog) => devlog.isFeatured)
    .slice(0, limit);
}

export function getLatestDevlogs(limit = 3): Devlog[] {
  return getAllDevlogs().slice(0, limit);
}

export function getDevlogBySlug(slug: string): Devlog | undefined {
  return getAllDevlogs().find((devlog) => devlog.slug === slug);
}

export function getDevlogSlugs(): string[] {
  return getAllDevlogs().map((devlog) => devlog.slug);
}

export function getDevlogsByGameSlug(gameSlug: string): Devlog[] {
  return getAllDevlogs().filter(
    (devlog) => devlog.relatedGame === gameSlug
  );
}

export function getDevlogsByCategory(category: string): Devlog[] {
  return getAllDevlogs().filter(
    (devlog) => devlog.category === category
  );
}
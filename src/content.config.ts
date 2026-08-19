import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const insights = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./content/insights",
    generateId: ({ entry }) => entry.replace(/\.md$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["Revenue", "Margin", "Cash", "Organization", "Operating System", "AI Enablement", "M&A Integration"]),
    date: z.preprocess(
      (value) => value instanceof Date ? value.toISOString().slice(0, 10) : value,
      z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    ),
    lang: z.enum(["zh", "en", "both"]),
    series: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights };

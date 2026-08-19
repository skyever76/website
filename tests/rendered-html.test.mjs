import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

function outputUrl(path = "/") {
  const relative = path === "/" ? "index.html" : `${path.replace(/^\//, "")}/index.html`;
  return new URL(`../dist/${relative}`, import.meta.url);
}

async function readPage(path = "/") {
  return readFile(outputUrl(path), "utf8");
}

test("renders the Chinese Adam Cui knowledge site", async () => {
  const html = await readPage();
  assert.match(html, /Adam Cui/);
  assert.match(html, /企业经营提升/);
  assert.match(html, /AI 赋能/);
  assert.match(html, /href="\/en"/);
  assert.doesNotMatch(html, /Latest Insights|Knowledge Fields/);
});

test("renders a separate English site", async () => {
  const html = await readPage("/en");
  assert.match(html, /Operating Improvement/);
  assert.match(html, /Latest Insights/);
  assert.match(html, /AI Enablement/);
  assert.match(html, /href="\/"/);
  assert.doesNotMatch(html, /企业经营提升|最新观点|知识领域/);
});

test("renders both insight directories without the removed dummy article", async () => {
  const chinese = await readPage("/insights");
  const english = await readPage("/en/insights");
  assert.match(chinese, /改变经营结果/);
  assert.match(chinese, /并购整合/);
  assert.match(english, /To change the outcome/);
  assert.match(english, /M&amp;A Integration|M&A Integration/);
  assert.doesNotMatch(`${chinese}${english}`, /改激励之前/);
});

test("produces a true static build with a branded 404 page", async () => {
  const notFound = await readFile(new URL("../dist/404.html", import.meta.url), "utf8");
  assert.match(notFound, /这个页面/);
  await assert.rejects(access(new URL("../dist/server/index.js", import.meta.url)));
  await assert.rejects(access(new URL("../dist/_worker.js", import.meta.url)));
});

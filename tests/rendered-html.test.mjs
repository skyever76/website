import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the Adam Cui knowledge site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Adam Cui/);
  assert.match(html, /企业经营提升/);
  assert.match(html, /AI 赋能/);
  assert.match(html, /href="\/en"/);
  assert.doesNotMatch(html, /Operating Improvement|Latest Insights|Knowledge Fields/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview/);
});

test("renders a separate English site", async () => {
  const response = await render("/en");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Operating Improvement/);
  assert.match(html, /Latest Insights/);
  assert.match(html, /AI Enablement/);
  assert.match(html, /href="\/"/);
  assert.doesNotMatch(html, /企业经营提升|最新观点|知识领域/);
});

test("renders the insights knowledge tree", async () => {
  const response = await render("/insights");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /改变经营结果/);
  assert.match(html, /并购整合/);
  assert.match(html, /href="\/en\/insights"/);
  assert.doesNotMatch(html, /改激励之前/);
});

test("renders the English insights directory", async () => {
  const response = await render("/en/insights");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /To change the outcome/);
  assert.match(html, /M&amp;A Integration|M&A Integration/);
  assert.match(html, /href="\/insights"/);
  assert.doesNotMatch(html, /改变经营结果|并购整合/);
});

test("removed dummy insight is no longer available", async () => {
  const response = await render("/insights/gai-ji-li-zhi-qian-xian-gai-ji-liang");
  assert.equal(response.status, 404);
});

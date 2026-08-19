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
  assert.match(html, /AI Enablement/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview/);
});

test("renders the insights knowledge tree", async () => {
  const response = await render("/insights");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /按知识树组织/);
  assert.match(html, /M&amp;A Integration|M&A Integration/);
  assert.match(html, /改激励之前/);
});

test("uses article-specific detail metadata without the site social card", async () => {
  const response = await render("/insights/gai-ji-li-zhi-qian-xian-gai-ji-liang");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>经营进化 #01｜改激励之前，先改计量｜Adam Cui<\/title>/);
  assert.match(html, /property="og:title" content="经营进化 #01｜改激励之前，先改计量"/);
  assert.match(html, /name="twitter:title" content="经营进化 #01｜改激励之前，先改计量"/);
  assert.doesNotMatch(html, /og\.png/);
});

// Screenshot an HTML file or URL with the pre-installed Chromium (Playwright).
// Usage: node common/screenshot.js <url-or-file> <out.png> [width] [height] [--full] [--wait ms] [--selector css]
// Also prints any console errors from the page (used to verify the dashboard).
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const args = process.argv.slice(2);
  let target = args[0];
  const out = args[1];
  const width = parseInt(args[2] || '1600', 10);
  const height = parseInt(args[3] || '1200', 10);
  const full = args.includes('--full');
  const waitIdx = args.indexOf('--wait');
  const wait = waitIdx >= 0 ? parseInt(args[waitIdx + 1], 10) : 800;
  const selIdx = args.indexOf('--selector');
  const selector = selIdx >= 0 ? args[selIdx + 1] : null;
  const scaleIdx = args.indexOf('--scale');
  const scale = scaleIdx >= 0 ? parseFloat(args[scaleIdx + 1]) : 1;
  if (!/^https?:|^file:/.test(target)) target = 'file://' + path.resolve(target);

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: scale });
  const errors = [];
  page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
  page.on('pageerror', (err) => errors.push(String(err)));
  await page.goto(target, { waitUntil: 'networkidle' });
  await page.waitForTimeout(wait);
  if (selector) {
    await page.locator(selector).first().screenshot({ path: out });
  } else {
    await page.screenshot({ path: out, fullPage: full });
  }
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  console.log(JSON.stringify({ out, errors, horizontalOverflowPx: overflow }));
  await browser.close();
})();

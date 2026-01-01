// Take Google.com screenshot

const url = 'https://www.google.com';
(async () => {
  console.log('Starting Puppeteer...');

  // Launch browser
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 200,
  });

  const page = await browser.newPage();

  console.log('Navigating to Google...');
  await page.goto(url);

  console.log('Taking a screenshot...');
  await page.screenshot({ path: 'google.png' });

  console.log('Screenshot saved as google.png');

  await browser.close();
  console.log('Done!');
})();

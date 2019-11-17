const timeout = process.env.SLOWMO ? 30000 : 10000;

beforeAll(async () => {
  await page.goto(URL, { waitUntil: "domcontentloaded" });
});

describe("Test title and content of the page", () => {
  test(
    "Title of the page",
    async () => {
      const title = await page.title();
      expect(title).toBe("Starter");
    },
    timeout
  );
});

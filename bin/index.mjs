#!/usr/bin/env node
import playwright from 'playwright';
import { Command } from 'commander';
import slugify from 'slugify';
import fs from 'fs';
import canvasModule from 'canvas';
const { Image, createCanvas, loadImage } = canvasModule;

const program = new Command();

program.requiredOption('-u, --url [url]', 'Url to use for screenshots');
program.version('0.0.1');
program.parse(process.argv);

// Take desktop and mobile screenshots
const screenshot = async (path, browserType, contextData) => {
	const browser = await playwright[browserType].launch();
	const context = await browser.newContext(contextData || {});
	const page = await context.newPage();

	await page.goto(program.opts().url);

	await page.screenshot({ path });
	console.log(`Screenshot outputed to "${path}"`);

	await browser.close();
};

await Promise.all([
	screenshot('desktop.png', 'webkit'),
	screenshot('mobile.png', 'webkit', playwright.devices['iPhone 11 Pro']),
]);

// Compose images
const canvas = createCanvas(1920, 1080)
const ctx = canvas.getContext('2d')

const desktop = await loadImage('./desktop.png');
const mobile  = await loadImage('./mobile.png');

ctx.drawImage(desktop, 0, 0, 1920, 1080);
ctx.drawImage(mobile, 800, 300, 1125 / 2, 2436 / 2);

const out = fs.createWriteStream('./output.png')
const stream = canvas.createPNGStream()
stream.pipe(out)
out.on('finish', () => 
	console.log('Final image outputed to "output.png"')
);

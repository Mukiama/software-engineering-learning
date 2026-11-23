const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Load the HTML file into jsdom
const html = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");

let dom;
let document;

beforeEach(() => {
    // Create a fresh DOM for each test
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    document = dom.window.document;

    // Simulate DOMContentLoaded
    const event = new dom.window.Event('DOMContentLoaded');
    document.dispatchEvent(event);

    // Simulate running the script by directly requiring the JS file
    const scriptContent = fs.readFileSync(path.resolve(__dirname, "index.js"), "utf-8");
    const script = new Function('document', scriptContent);
    script(document);
});
const fs = require('fs');
const marked = require('marked');

// Read the Markdown file
const markdown = fs.readFileSync('CV.md', 'utf-8');

// Convert Markdown to HTML
const html = marked(markdown);

const finalHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>My Resume</title>
    </head>
    <body>
        ${html}
    </body>
    </html>
`;

// Write the HTML to a file
fs.writeFileSync('CV.html', finalHtml);
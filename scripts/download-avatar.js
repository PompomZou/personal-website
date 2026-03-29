const https = require('https');
const fs = require('fs');

if (process.argv.length < 3) {
  console.error('Usage: node download-avatar.js <image_url> [output_path]');
  process.exit(1);
}

const url = process.argv[2];
const out = process.argv[3] || 'public/avatar.jpg';

const file = fs.createWriteStream(out);
https.get(url, (res) => {
  if (res.statusCode === 302 || res.statusCode === 301) {
    // follow redirect
    https.get(res.headers.location, (res2) => {
      res2.pipe(file).on('finish', () => file.close());
    });
  } else {
    res.pipe(file).on('finish', () => file.close());
  }
}).on('error', (err) => {
  fs.unlink(out, () => {});
  console.error('Download failed:', err.message);
  process.exit(1);
});

const fs = require('fs');
const path = require('path');


const iconsDir = path.join(__dirname, 'src', 'assets'); 
const manifest = {
  short_name: 'React App',
  name: 'Create React App Sample',
  icons: [],
  start_url: '.',
  display: 'standalone',
  theme_color: '#000000',
  background_color: '#ffffff',
};


fs.readdir(iconsDir, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    if (file.endsWith('.png') || file.endsWith('.svg')) {
      manifest.icons.push({
        src: `assets/${file}`, 
        type: file.endsWith('.png') ? 'image/png' : 'image/svg+xml',
        sizes: file.includes('192') ? '192x192' : '512x512', 
      });
    }
  });


  fs.writeFileSync(path.join(__dirname, 'public', 'manifest.json'), JSON.stringify(manifest, null, 2));
  console.log('Manifest.json was generated successfully!');
});

const
    mix = require('laravel-mix'),
    fs  = require('fs'),
    p   = require('path'),
    jp  = 'resources/js',
    jpp = 'public/js';

for (let b of fs.readdirSync(jp)) {
    let bp  = p.join(jp, b), // bundlePath is jsPath + bundleName
        bpp = p.join(jpp, b + '.js'); // bundlePublicPath is jsPublicPath + bundleName + .js

    if (fs.lstatSync(bp).isDirectory()) mix.js(bp, bpp); // If bundle is directory, bundle the scripts contained in it
}

mix
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/redirect.scss', 'public/css');
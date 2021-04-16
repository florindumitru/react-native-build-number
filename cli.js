#!/usr/bin/env node

 'use strict';

 const fs = require('fs');
 const fileName = './package.json';
 const file = require(fileName);
     
 file.build = file.build + 1;
     
 fs.writeFile(fileName, JSON.stringify(file, null, 4), function writeJSON(err) {
   if (err) return console.log(err);
 });
 
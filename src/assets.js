/*
 * Copyright (c) 2021 Abdi Hassan
 * Licensed under the MIT Licence
 */

const { readFileSync } = require('fs')
const { join } = require('path')


const script = readFileSync(join(__dirname, '.', 'da', 'script.js'))
const style = readFileSync(join(__dirname, '.', 'da', 'style.css'))

module.exports = { style, script }

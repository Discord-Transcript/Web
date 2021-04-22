

const { existsSync, createReadStream } = require('fs')
const { resolve, join } = require('path')
const mime = require('mime-types')
const https = require('https')
const ejs = require('ejs')
const { minify } = require('html-minifier')
const db = require("../db");

const markdown = require('./src/markdown')
const Formatter = require('./src/formatter')
const fs = require("fs");
const scrape = require('website-scraper');
const config = require("../config.json");

// Stuff
const assets = require('./src/assets')

const testData = require('./example')
const express = require("express");

module.exports.load = async(client) => {

let app = express();
 app.engine("html", ejs.renderFile);
    app.set('view engine', 'ejs');
    app.set('views', join(__dirname, "./views"));



app.get("/view", async(req,res) => {
    let id = req.query.key;
    if(!id) return res.status(404).end();
    let ticketDB = await db.GetTranscript(id);
    if(!ticketDB || !ticketDB.closed) return res.status(404).end();
    let data = JSON.parse(fs.readFileSync(join(__dirname, `../transcripts/${id}.json`)));
    if(!data) return res.status(404).end();
    const fm = new Formatter(data)
      const formatted = await fm.format()
      if (!formatted) {
        res.writeHead(400)
        return res.end()
      }
      const hostname = `${req.headers['x-forwarded-proto'] || 'http'}://${req.headers.host}`
      res.render('index', {
        data: formatted,
        assets,
        markdown,
        hostname,
        key: id
      })
      
})
app.get("/download", async(req,res) => {
    let key = req.query.key;
    if(!key) return res.status(404).end();

    if(!fs.existsSync(join(__dirname, `../download/${key}/index.html`))){

    const options = {
  urls: [`${config.hostname}/view?key=${key}`],
  directory: './download/' + key,
     recursive: true,
};
const result = await scrape(options);

res.download(join(__dirname, `../download/${key}/index.html`))
    } else {
        res.download(join(__dirname, `../download/${key}/index.html`));
    }
})

app.listen(1234);

}

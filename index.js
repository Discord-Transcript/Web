/*
 * Copyright (c) 2021 Abdi Hassan
 * Licensed under the MIT License
 */

const { existsSync, createReadStream } = require('fs')
const { resolve, join } = require('path')
const mime = require('mime-types')
const https = require('https')
const ejs = require('ejs')
const { minify } = require('html-minifier')


const markdown = require('./src/markdown');
const cors = require("cors");
const Formatter = require('./src/formatter')
const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
const scrape = require('website-scraper');



require("dotenv").config();

// Stuff
const assets = require('./src/assets')


const express = require("express");




client.login(process.env.TOKEN);

 

let app = express();
app.use(cors());
 app.engine("html", ejs.renderFile);
    app.set('view engine', 'ejs');
    app.set('views', join(__dirname, "./views"));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));

app.get("/logo.png", async(req,res) => {
res.sendFile(join(__dirname, `./log.png`));
})



app.get("/view", async(req,res) => {
    
    let id = req.query.id;
    if(!id) return res.status(404).end();
    console.log(`View ID ${req.query.id}`)
    let data = JSON.parse(fs.readFileSync(join(__dirname, `./transcripts/${id}.json`)));
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
      });



      setTimeout(function() {

        fs.unlinkSync(join(__dirname, `./transcripts/${id}.json`));
      }, 180000)
      
});

app.all("/new", async(req,res) => {
    let id = req.query.id;
 if(!id) return res.send("Invalid ID or Body");
    console.log(req.body);


    


   const writefilenow = async (filename) => {
  await fs.writeFile(join(__dirname, `./transcripts/${id}.json`), JSON.stringify(req.body), function(err) {
	    if(err) return console.log(err);
    });
}
   
   writefilenow('test');

    
	
		
		
		


    
	
	
const options = {
  urls: [`http://143.198.247.160:3001/view?id=${id}`],
  directory: `./download/${id}`,
  recursive: false
};
 
// with async/await
const result = await scrape(options);

let attachment = new Discord.MessageAttachment(`./download/${id}/index.html`, `Transcript Generated By Discord Transcript.html`)

let channel = await client.channels.cache.get(process.env.LOG_CHANNEL);
	

let msg = await channel.send(attachment);
 
 res.send(`${msg.attachments.first().id || 'unknown'} ${msg.attachments.first().url}`);


 setTimeout(function() {

    fs.rmdirSync(join(__dirname, `./download/${id}`));



 }, 60000)
	
	
	
});

app.listen(process.env.PORT || 3000);

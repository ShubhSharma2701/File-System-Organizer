#!/usr/bin/env node
let ans=  process.argv.slice(2); //jis index se slice use kia h uske aage se print krega sirf 
const { dirxml } = require("console");
//hmne 2nd idx se islie lia kyuki generally user 2nd idx se hi i/p deta h 1st idx p file ka name etc hota h
let fs= require("fs");
let path= require("path");
let helpObj= require("./commands/help")  // hmne module se export krakr as an object yahan  call krdia actual fn
let treeObj= require("./commands/tree")  //ye sb paths hain bracket m jo js files bnai hain fns ki
let organizeObj= require("./commands/organize")
//console.log(ans);
    
//node input.js tree "directory path" // 0th idx p command rhegi or 1st idx p path rhega user pass krega to
//node input.js organize "directory path"
//node input.js help
let command= ans[0]; 
let types= {   //as an object hmne different types of file formats bnalie array m
    media : ["mp4","mkv"],
    archives : ['zip', '7z','rar','tar', 'gz','ar', 'iso',"xz"],
    documents: ['docs','doc', 'pdf','xlsx', 'xls','odt','ods','odp','odg','odf','txt','ps','tex'],
    app : ['exe', 'dmg', 'pkg',"deb"]
}
switch(command){
    case "tree":
        treeObj.treeKey(ans[1]); //module m jo keys refer krri hain objectfn ko unhecall lgadia
    break;
case "organize":
    organizeObj.organizeKey(ans[1]);
    break;
    case "help":
        helpObj.helpKey(); 
        break;
        default:
            console.log("Please👀 input right command");
            break;
        }
        
        
       
        
   
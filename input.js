#!/usr/bin/env node
let ans=  process.argv.slice(2); //printing from 2nd idx onwards bcoz user gives i/p generally form 2nd idx
const { dirxml } = require("console");
let fs= require("fs");
let path= require("path");
let helpObj= require("./commands/help")  // exported from module by giving path as object
let treeObj= require("./commands/tree") 
let organizeObj= require("./commands/organize")
//console.log(ans);
    
//node input.js tree "directory path" // 0th idx p command rhegi or 1st idx p path rhega user pass krega to
//node input.js organize "directory path"
//node input.js help
let command= ans[0]; 
let types= {   //different file formats such as pdf, docs,exe created as an object in an array(oops applied)
    media : ["mp4","mkv"],
    archives : ['zip', '7z','rar','tar', 'gz','ar', 'iso',"xz"],
    documents: ['docs','doc', 'pdf','xlsx', 'xls','odt','ods','odp','odg','odf','txt','ps','tex'],
    app : ['exe', 'dmg', 'pkg',"deb"]
}
switch(command){
    case "tree":
        treeObj.treeKey(ans[1]); //modules called which were referred as keys
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
        
        
       
        
   

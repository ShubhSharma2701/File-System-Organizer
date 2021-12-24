function organizefn(dirpath){
    //console.log("organize command implemented for",dirpath);
    // 1. i/p- dir path milega
    let destPath; //declared outside loop
    if(dirpath== undefined){
        //console.log("kindly enter the path");return;
        destPath= process.cwd();return;
    }else{
        let doesExist= fs.existsSync(dirpath);
        if (doesExist){
            //2. create- "organized_files" named dir where all files will be categorized
             destPath= path.join(dirpath,"organized_files"); //organised_files named dir created 
             if(fs.existsSync(destPath)==false){ //if dir not present with same name only then create 
                 fs.mkdirSync(destPath);
             }
            
        }else{
            console.log("kindly enter correct path");return; 
        }
    }
    organizeHelper(dirpath,destPath) 
    
} 
function organizeHelper(src,dest){  // fn for identifying diff categories 

    let childnames= fs.readdirSync(src); 
   //console.log(childnames); 
    for(let i=0; i<childnames.length;i++){
        let childAddress= path.join(src,childnames[i]); //for joining dir and file path
      let isFile= fs.lstatSync(childAddress).isFile(); // will only work if there is a file and not folder
        if(isFile){ 
        //console.log(childnames[i]);
          let category= getCategory(childnames[i]);
          console.log("Given", childnames[i],"is of", category,"type")
        sendFiles(childAddress,dest,category);
        }
    }
}
     
function getCategory(name){ // fn for categorising files 
let ext=path.extname(name);
ext= ext.slice(1); //taken from 2nd idx from bcoz 1st idx contains ., so it will look like docx,.pdf but we want only docx,pdf
for (let type in types){
   let filetype= types[type] // run a loop on whole folder and copy files in req categories 
   for (let i=0; i<filetype.length;i++){
    if (ext==filetype[i]){
        return type;
    }
   }    
}
 return "others"; //if  a file from no category found from given array then create dir named others and put the file in it
}
function sendFiles(srcFilePath,dest,category){ //fn for copying files
let categoryPath= path.join(dest,category);
if(fs.existsSync(categoryPath)==false){ 
   fs.mkdirSync(categoryPath)
}
let fileName= path.basename(srcFilePath);  
let destFilePath= path.join(categoryPath,fileName);
fs.copyFileSync(srcFilePath,destFilePath);
console.log(fileName,"copied to", category)
}
module.exports={
    organizeKey : organizefn
}

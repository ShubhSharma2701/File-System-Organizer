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
            //2. create- organized files naam ki dir bnaunga jisme saari files organised pdi hongi
             destPath= path.join(dirpath,"organized_files"); //organised_files naam ki dir bnadega
             if(fs.existsSync(destPath)==false){ //condition lgai h ki tbhi bnaega agar present ni hogi pehle se
                 fs.mkdirSync(destPath);
             }
            
        }else{
            console.log("kindly enter correct path");return; //pehle se present hui to ye line print krdega
        }
    }
    organizeHelper(dirpath,destPath) //yahn fn define krdia h bnaya neeche h alag se yahan bheed jyada hogyi thi   
    
} 
function organizeHelper(src,dest){  // ye source se destination k beech ki saari files identify krdega
    //3. identify- konsi category ki file h- docx,pdf,etc.
    let childnames= fs.readdirSync(src); 
   //console.log(childnames); //saari files jo projectFolder wali dir m pdi hain unka naam dedega
    for(let i=0; i<childnames.length;i++){
        let childAddress= path.join(src,childnames[i]); //ye path join krne k lie h
      let isFile= fs.lstatSync(childAddress).isFile(); // agar file hi h sirf tbhi kaam krega
        if(isFile){ //ye sirf files k naam dega koi folder hua to uska chor dega
        //console.log(childnames[i]);
          let category= getCategory(childnames[i]);
          console.log("Given", childnames[i],"is of", category,"type")
        sendFiles(childAddress,dest,category);
        }//4 copy/cut- organised dir m sbko daaldio,is dir m organised folders honge media,doc etc. 
    }
}
     
function getCategory(name){ // ye fn btadega ki konse category ki file h, pdf,docx,etc
let ext=path.extname(name);
ext= ext.slice(1); //2nd idx se islie lenge kyuki 1st idx p . pda hua h, fir aisa dikhega .js,.pdf, .docx
for (let type in types){
   let filetype= types[type] // poore folder p loop lgakr ab categories bankr unme daaldi files
   for (let i=0; i<filetype.length;i++){
    if (ext==filetype[i]){
        return type;
    }
   }    
}
 return "others"; //agar koi category ni h given type array m se to ek  others folder bnakr vo sb usme daaldia
}
function sendFiles(srcFilePath,dest,category){ //file copy krne k lie fn 
let categoryPath= path.join(dest,category);
if(fs.existsSync(categoryPath)==false){ //agar same naam ki file exist ni krti to bnade
   fs.mkdirSync(categoryPath)
}
let fileName= path.basename(srcFilePath); // jb hm file ko copy paste krte hain tb hmara os ek nai blank file bnata h pehle same naam ki fir usme saara content copy krdeta h yahan bhi yhi kia h 
let destFilePath= path.join(categoryPath,fileName);
fs.copyFileSync(srcFilePath,destFilePath);
console.log(fileName,"copied to", category)
}
module.exports={
    organizeKey : organizefn
}
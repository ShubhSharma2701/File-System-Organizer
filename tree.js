function treefn(dirpath){ // fn for finding deepest files into folders
    //  console.log("Tree command implemented for",dirpath);
      let destPath; //declared outside loop
      if(dirpath== undefined){
          //console.log("kindly enter the path");return;
          treeHelper(process.cwd(),""); return; //process initaited so as to make fn global; will work on cmd after npm package link 
      }else{
          let doesExist= fs.existsSync(dirpath);
      if(doesExist){
         treeHelper(dirpath,"");
          }else{
              console.log("kindly enter correct path");return; 
          }
      }
  } 
  function treeHelper(dirpath,indent){ // indent to display file in a string in unique format
  let isFile= fs.lstatSync(dirpath).isFile;
  if(isFile==true){
      let filename= path.basename(dirpath);
      console.log(indent + "---" + filename)
  }else{
      let dirName= path.basename(dirpath)
         console.log(indent + "?-?"+ dirName)
         let childrens= fs.readdirSync(dirpath);
         for(let i=0;i<childrens.length;i++){
             let childPath= path.join(dirpath,childrens[i]);
             treeHelper(childPath, indent + "\t"); // here recursion will work for going into deep for finding last file
         }
  }
  }
  module.exports={
      treeKey : treefn
  }

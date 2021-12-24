function treefn(dirpath){ // ye tree structure ki tarah kaam krega, isme jaise folders k andar folders itne last file ni miljati ye chlta rhega or ekdum last wali file tk pahuchkr hme vo lakr dedega
    //  console.log("Tree command implemented for",dirpath);
      let destPath; //declared outside loop
      if(dirpath== undefined){
          //console.log("kindly enter the path");return;
          treeHelper(process.cwd(),""); return; //process lgaya to make global access , ab npm package link krk cmd se bhi chlaega to sara code chl jaega
      }else{
          let doesExist= fs.existsSync(dirpath);
      if(doesExist){
         treeHelper(dirpath,"");
          }else{
              console.log("kindly enter correct path");return; //pehle se present hui to ye line print krdega
          }
      }
  } 
  function treeHelper(dirpath,indent){ // indent dia h taaki kaise print hogi har file ek string m uniqueness si aajae
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
             treeHelper(childPath, indent + "\t"); // yahan recursion chlegi itne folders k andar folders hain last file ni miljati
         }
  }
  }
  module.exports={
      treeKey : treefn
  }
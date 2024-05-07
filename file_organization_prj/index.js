
const fs = require('fs')
const path = require('path')
const folderPath='./unorganized'
// Create the organized folder if it doesn't exist
const organizedFolderPath = './organized';
if (!fs.existsSync(organizedFolderPath)) {
    fs.mkdirSync(organizedFolderPath);
}
//function to organize the files based on extension:
function organizeFiles(file){
     // Get the file extension
     const ext = path.extname(file);
    //  console.log(ext)--.extension
     // Remove the '.' from the extension
     const extension = ext.slice(1);
    //  console.log(extension)--extension
    //creating the folder of the name of extension if not created
    let subFolderPath=path.join(organizedFolderPath,extension)//target path

    if (!fs.existsSync(subFolderPath)) {
        fs.mkdirSync(subFolderPath);
    }

    let oldFilePath = path.join(folderPath, file)//previous path
    let targetPath = path.join(subFolderPath, file)//destination path
    //now copying each files to resp folders:
    fs.copyFile(oldFilePath, targetPath, err => {
        if (err) {
            console.error(`Error copying file ${file}:`, err);
            return;
        }
        console.log(`Copied file ${file} to ${targetPath}`);
    });
   }
fs.readdir(folderPath,(err,files)=>{//reading the directory
    if(err){
        console.log('error occurred:'+err)
        return
    }
    files.forEach(file => {
        console.log('file-path:'+file)
        organizeFiles(file)
    });
})
const fs= require('fs')
// console.log(fs)
// ---------
//straight forward process--for file creation
// -----------
// console.log('file write process started')
// fs.writeFileSync('demo.txt','qweryuiopasdfghjklzxcvbnm')
// console.log('file write process ended')
// -----------
//proper process with response process--for file creation
// ---------------
// console.log('file write process started')
// // ------
// // will return done only after the process completed fully
// // --
// fs.writeFile('demo1.txt','mnbvcxzlkjhgfdsapoiuytrewq',()=>{
//     console.log('done')
//     //--------
//     // if i have to read after writing then
//     fs.readFile('demo1.txt',(error,data)=>{
//         // console.log(error,data);
//         // output:
//         // null <Buffer 6d 6e 62 76 63 78 7a 6c 6b 6a 68 67 66 64 73 61 70 6f 69 75 79 74 72 65 77 71>
//         // -----
//         // to receive data in proper way on string:
//         console.log(error,data.toString());
//         // output:
//         // null mnbvcxzlkjhgfdsapoiuytrewq
//     })


//     // if this process repeated again and again for read/write fnc then situation of callback hell arises:


// })
// console.log('file write process ended')



// for append op in file:
fs.appendFile('demo1.txt',' hey demo just append this !@##$%^&*',(err,data)=>{
    console.log(err,data)
})
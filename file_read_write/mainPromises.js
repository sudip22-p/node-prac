import fs from 'fs/promises'
let rd=await fs.readFile("demo1.txt")
//similarly for write, append and soon:
console.log(rd.toString())
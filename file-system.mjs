import fs from "fs";

const buffer = fs.readFileSync("file-system.mjs");

console.info(buffer.toString());

fs.writeFileSync("temp.text", "Hello World");

//File System merupakan standard library yang bisa digunakan untuk memanipulasi file system.
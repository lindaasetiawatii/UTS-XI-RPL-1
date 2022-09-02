import path from "path";

const file = "/Users/khannedy/contoh.txt";

console.info(path.sep);
console.info(path.dirname(file));
console.info(path.basename(file));
console.info(path.extname(file));
console.info(path.parse(file));

//Path
//Path merupakan standard library yang bisa kita gunakan untuk bekerja dengan lokasi file dan directory / folder
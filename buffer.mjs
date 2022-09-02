const buffer = Buffer.from("Linda Setiawati");

console.info(buffer);
console.info(buffer.toString());

buffer.reverse();
console.info(buffer.toString());

//Buffer
//merupakan object yang berisikan urutan byte dengan panjang tetap, yang juga merupakan turunan dari tipe data Uint8Array.
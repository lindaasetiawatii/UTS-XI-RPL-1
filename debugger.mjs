function sayHello(name) {
    debugger;
    return `Hello ${name}`;
}

const firstName = "Linda";

console.info(sayHello(firstName));

//Debugger
//NodeJS memiliki fitur debugger, dimana kia bisa mengikuti tahapan eksekusi program di NodeJS. Hal ini sangat cocok ketika kita melakukan proses debugging, mencari sebab masalah yang terjadi di aplikasi kita.
//Dalam debugging terdapat istilah Breakpoint, yaitu lokasi dimana kita ingin menghentikan sementara eksekusi kode program.
//Perintah debugger (1.cont,c:continue execution 2.next,n:Step next 3.step,s:step in 4.out,o:step out 5.pause:pause running code
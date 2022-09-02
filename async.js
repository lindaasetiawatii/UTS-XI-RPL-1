function samplePromise(){
    return Promise.resolve("Linda");
}

const name = await samplePromise();
console.info(name);



//Global Async
// temporary storage dealing with streams to binary Data

// const buffer=Buffer.from('Hello');
// console.log(buffer);
// console.log(buffer.toString());


const fs =require('fs');
const readStream =fs.createReadStream('bigfile.txt',{encoding : 'utf-8'});

readStream.on('data', chunk =>{
    console.log('Recieved chunk',chunk.toString())
});
readStream.on('end',()=>{
    console.log('no more data to read')
})


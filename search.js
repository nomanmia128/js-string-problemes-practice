const lyrics = 'sadsada kala kala rong jomece kala chan';

const searchString = 'rong';
// const doesExist = lyrics.includes('rong');
const doesExist = lyrics.includes('Rong');
// console.log(doesExist);

// ----------------
console.log(lyrics.indexOf('chan'));
console.log(lyrics.indexOf('cHan'));

if(lyrics.indexOf('ssada') !== -1){
    console.log('exists inside the string');
}
else{
    console.log('cannot find it');
}


// startsWith 

console.log(lyrics.startsWith('sada'));

// endsWith
const filName = 'mybioata.psf';
const otherFile = 'mypic.png';
filName.endsWith('.pdf');

const lyrics = 'sadsada kala kala rong. jomece kala chan .ami jano ki. tomi bando kala chan ami jano ki. ';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split ('')
// console.log(chars);

//  join kora
const lines = ['sadsada kala kala rong',
 'jomece kala chan ami jano ki',
  'tomi bando kala chan ami jano ki'];

const newSong = lines.join('.');
console.log(newSong);



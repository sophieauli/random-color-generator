import kuler from 'kuler';
import randomColor from 'randomcolor';

const color = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});
// const str = kuler(, color);
// console.log(str);

console.log(
  kuler(
    `###############################',
###############################
###############################
#####                     #####
#####       ${color}       #####
#####                     #####
###############################
###############################
###############################`,
    color,
  ),
);

// console.log(process.argv);

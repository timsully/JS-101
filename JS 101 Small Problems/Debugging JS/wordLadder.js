/*

*/
let ladder = ''

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-';
  }

  return ladder += word;
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

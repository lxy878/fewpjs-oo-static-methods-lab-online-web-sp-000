class Formatter {
  static capitalize(s){
    const l = s.split('')
    return [l[0].toUpperCase(), ...l.slice(1)].join('')
  }

  static sanitize(s){
    return s.match(/([A-Za-z\'\s-])+/g);
  }

  static titleize(s){
    return s.split(' ').map((word, i) => {
      if (i == 0 || !(word === 'the' || word === 'a' || word === 'an' || word === 'but' || word === 'of' || word === 'and' || word === 'for' || word === 'at' || word === 'by' || word === 'from')){
        return this.capitalize(word);
      }else{
        return word
      }
    }).join(' ');
  }
}

console.log(Formatter.sanitize("'dfdfdf dfjldf ls$-$df df&*'*ddf df df'"))

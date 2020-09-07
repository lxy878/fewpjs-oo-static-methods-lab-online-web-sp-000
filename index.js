class Formatter {
  static capitalize(s){
    const l = s.split('')
    return [l[0].toUpperCase(), ...l.slice(1)].join('')
  }

  static sanitize(s){
    return s.match(/([A-Za-z])\w+/);
  }

  static titleize(s){
    return s.split(' ').map(word => {
      if (word === 'the' || word === 'a' || word === 'an' || word === 'but' || word === 'of' || word === 'and' || word === 'for' || word === 'at' || word === 'by' || word === 'from'){
        this.capitalize(word)
      }else{
        word
      }

    }).join(' ');
  }
}

// console.log(Formatter.titleize('chicken soup with rice and a few other songs'));

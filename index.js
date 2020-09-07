class Formatter {
  static capitalize(s){
    const l = s.split('')
    return [l[0].toUpperCase(), ...l.slice(1)].join('')
  }

  static sanitize(s){
    return s.match(/[a-z][A-Z]/w+g);
  }

  static titleize(s){

  }
}

console.log(Formatter.capitalize(''));

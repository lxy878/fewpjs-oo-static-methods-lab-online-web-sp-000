class Formatter {
  static capitalize(s){
    const l = s.split('')
    [l[0].toUpperCase(), ...l.slice(1)]
    return s.toUpperCase();
  }

  static sanitize(s){
    return s.match(/[a-z][A-Z]/g);
  }

  static titleize(s){

  }
}

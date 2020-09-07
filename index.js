class Formatter {
  static capitalize(s){
    const l = s.split('')
    l[0].toUpperCase()
    return s.toUpperCase();
  }

  static sanitize(s){
    return s.match(/[a-z][A-Z]/g);
  }

  static titleize(s){

  }
}

class Formatter {
  static capitalize(s){
    s.split('')
    return s.toUpperCase();
  }

  static sanitize(s){
    return s.match(/[a-z][A-Z]/g);
  }

  static titleize(s){

  }
}

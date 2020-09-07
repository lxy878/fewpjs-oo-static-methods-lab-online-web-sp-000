class Formatter {
  static capitalize(s){
    return s.toUpperCase();
  }

  static sanitize(s){
    return s.match(/[a-z][A-Z]/g);
  }

  titleize(s){

  }
}

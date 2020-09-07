class Formatter {
  static capitalize(s){
    return s.toUpperCase();
  }

  sanitize(s){
    return s.match(/[a-z][A-Z]/g);
  }

  titleize(s){

  }
}

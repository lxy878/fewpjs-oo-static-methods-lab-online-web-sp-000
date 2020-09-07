class Formatter {
  static capitalize(s){
    const l = s.split('')
    return [l[0].toUpperCase(), ...l.slice(1)].join('')
  }

  static sanitize(s){
    return s.match(/([A-Za-z])\w+/);
  }

  static titleize(s){
    return s.split(' ').map(word => this.capitalize(word)).join('');
  }
}

console.log(Formatter.sanitize('Entert*ain(i{ng-Elephan^ts'));

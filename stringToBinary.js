function stringToBinary(str) {
  let result;
  result = str
    .split('')
    .map((char) => {
      let num = char.charCodeAt(0).toString(2);
      let t = (num + '').length;
      let s = '';

      for (var i = 0; i < 8 - t; i++) {
        s += '0';
      }

      return s + num;
    })
    .join('');
  return result;
}

let test = stringToBinary('OpenTeam');
console.log(test);

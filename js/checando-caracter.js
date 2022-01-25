function checkChar(e) {
    var char = String.fromCharCode(e.keyCode);
  
  console.log(char);
    var pattern = '[a-z0-9 ]';
    if (char.match(pattern)) {
      return true;
  }
};

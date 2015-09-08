var cryptosquare = function(string) {
  var str = string.toLowerCase().replace(/[^A-Za-z]/g,'');
  var columns = Math.ceil(Math.sqrt(str.length));
  var returned_array = [];
  var encrypted_string = "";
  for(var i=0, j=columns; i<str.length; i+=columns, j+=columns) {
    if((i+columns)>str.length) {
      returned_array.push(str.substring(i));
    } else {
      returned_array.push(str.substring(i,j));
    }
  }
  for(var j=0; j<returned_array[0].length; j++) {
    for(var i=0; i<returned_array.length; i++) {
      if(returned_array[i][j] != null) {
        encrypted_string+= returned_array[i][j];
        if(encrypted_string.replace(/[^A-Za-z]/g,'').length % 5 === 0) {
          encrypted_string+= " ";
        }
      }
    }
  }
  return encrypted_string.trim();
};

$(document).ready(function() {
  $("form#cryptosquare_form").submit(function(event) {
    var input = $("input#input_string").val();
    var result = cryptosquare(input);
    console.log(input);
    console.log(result);
    $(".encrypted").empty();
    $(".input_string").text(input);
    $(".encrypted").text(result);
    $("#result").show();
    event.preventDefault();
  });
});

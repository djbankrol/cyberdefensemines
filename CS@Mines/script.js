function savePIN() {
  var pinInput = document.getElementById("inputpin").value;
  console.log(pinInput);


    function download_txt() {
        var textToSave = pinInput;
        var hiddenElement = document.createElement('a');

        hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'myFile.txt';
        hiddenElement.click();
      }

  document.getElementById('test').addEventListener('click', download_txt);
}

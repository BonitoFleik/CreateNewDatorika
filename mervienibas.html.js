function ToMebibytes() {
  var gigabytes = parseFloat(document.getElementById("inputField").value);
  var mebibytes = gigabytes * 1024; 
  document.getElementById("outputField1").textContent = mebibytes.toFixed(2) + " MiB";
}

function toMegabytes() {
  var gigabytes = parseFloat(document.getElementById("inputField").value);
  var megabytes = gigabytes * 1000; 
  document.getElementById("outputField2").textContent = megabytes.toFixed(2) + " MB";
}
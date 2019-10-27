function actFn(){
	alert("please work");
}
document.addEventListener('DOMContentReady', function () {
	  document.getElementById("actBtn").addEventListener('click', actFn);
});

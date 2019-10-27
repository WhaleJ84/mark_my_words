

function ma() {
	console.log('main fn');
	var actForm = document.getElementById('form');
	actForm.addEventListener ('actBtn', actFn);
}

function actFn() {
	console.log("test");
	var textbox = document.getElementById('textbox');
	var arrStr=textbox.split();
	console.log(arrStr);
}
	
function main(){
document.addEventListener('DOMContentLoaded', function(){
	var checkPageButton = document.getElementById("actBtn");
	checkPageButton.addEventListener('click', function(){
		chrome.tabs.getSelected(null, function(tab))
});
	},false);
false;
}
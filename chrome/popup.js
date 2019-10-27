function clickHandler(){
	console.log("clickHandler");
}

function main(){
	console.log("main");
}

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('button').addEventListener('click', clickHandler);
	main();
});

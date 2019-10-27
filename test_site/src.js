var arr1=[]

function actFn(){
	var arr1=["idk","hr","ur","u","asap"];
	alert("In Progress");
	
	var text = document.getElementById('textbox').value;
	console.log(text)
	text.toString()
	text.toLowerCase;
	var arr2=text.split(" ");
	console.log(arr2);
	var ret=arrCompare(arr2, arr1);
return ret;
}

function arrCompare(arr2 , arr1){
	  
  const objMap={};
  
arr1.forEach(()=>arr2.forEach((arr1)=> {if(arr2 === arr1){
       objMap[arr2]=objMap[arr2]+1||1 ;
		
		
    }
  }
));
text.document.getElementById.value =(Object.keys(objMap).map(e=>Number(e)));

}
			 
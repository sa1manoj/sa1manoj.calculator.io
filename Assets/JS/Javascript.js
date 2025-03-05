// let output=document.querySelector('.output-display'),input=document.querySelector('.input-display'),operands=document.querySelector('.operands'), equalto=documnet.querySelector('.equalto'), clear=documnet.querySelector('.clear'), backspace=documnet.querySelector('.backspace');
valueOfHistory=0;

let fullExression='';

function expression(value){
	console.log(value)
	fullExression+=value;
	document.querySelector('.input-display').innerHTML= fullExression;
}

function clearing(){
	console.log("Clearing")
	fullExression='';
	document.querySelector('.input-display').innerHTML= '';
	document.querySelector('.output-display').innerHTML='';

}

function calculate(){
	console.log("calculating")
	document.querySelector('.output-display').innerHTML= fullExression+'=';
	fullExression=eval(fullExression);
	console.log(typeof fullExression);
	console.log(typeof 5);


	if (typeof fullExression !== typeof 5 ){
	document.querySelector('.input-display').innerHTML= 'ERROR';
	document.querySelector('.output-display').innerHTML= 'ERROR';
	// fullExpression=result;
console.log(fullExression)}
	else{
	document.querySelector('.input-display').innerHTML= fullExression;
	document.querySelector('.input-display').style.fontSize = "30px";

	
	fullExpression='';
	}
}

function backspace(){
	fullExression = fullExression.slice(0, -1);
	document.querySelector('.input-display').innerHTML = fullExression;

}

function historyBlock(value){
	if (value != valueOfHistory){
	document.querySelector('.historyBlockDiv').style.display='block';
	document.querySelector('.components').style.display="none";
	valueOfHistory=value;
}

else{
	document.querySelector('.historyBlockDiv').style.display='none';
	document.querySelector('.components').style.display="block";
	valueOfHistory=0;
}
}


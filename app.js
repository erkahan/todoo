const inputEl =document.getElementsByTagName('input')[0];
const btn = document.getElementsByTagName('button')[0];
const olEl = document.getElementsByTagName('ol')[0];
btn.addEventListener('click',function(){
	//alert('clicked');
	if(inputEl.value==''){
		alert('hoososn bj bolku');
	}
	else{
		//document.creatElement --> shine tag uusgeh function
		//click-> ccreate li
		const liEl=document.createElement('li');
		liEl.innerText = inputEl.value;
		console.log(liEl);
		// appent() , appendChild() --. push tag dotor uuur tag nemh function
		olEl.appendChild(liEl);
		inputEl.value='';
		const delBtn=document.createElement('button');
		const checkBtn =document.createElement('button');
		console.log(delBtn);
		console.log(checkBtn);
		checkBtn.innerHTML='<i class="bi bi-check2-all"></i>'
		delBtn.innerHTML='<i class="bi bi-trash3-fill"></i>'
		liEl.appendChild(checkBtn);
		liEl.appendChild(delBtn);
		// className -> tag d class ner ogoh funt
		delBtn.className='delete';
		checkBtn.className='check';
		saveData();
	}
});
olEl.addEventListener('click',(e)=>{
	console.log(e.target);
	let target = e.target;
	let parentEl = target.parentElement;
	let del = parentEl.parentElement;
	let check = parentEl.parentElement;
	if(target.className=='bi bi-trash3-fill' || target.className=='delete'  ){
		// .remove() -> ustgah function
		del.remove();
		// target =<li><button></button></li>
	}
	else if(target.className=="bi bi-check2-all"){
		// classList , className -> tag deer class ner ogoh
		// classList --> toggle
		check.classList.toggle("checked");
	}
	saveData();
});
// LocalStorage --. web browseriin  data hadgalah sav
// LocalStorage.setItem('app ner', value)
//localStorage.getItem('app' ner')
// setitem ->data hadgalah
// getItem -> hadgalsan datag duudah
localStorage.setItem('name','erkhembayar');
function saveData(){
	localStorage.setItem('todo',olEl.innerHTML);
}
function getData(){
	get = localStorage.getItem('todo');
	olEl.innerHTML=get;
}
getData();
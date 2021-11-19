const txtElement = ['HTML','CSS','Javascript'];
let count =0;
let textIndex =0;
let currenTxt='';
let words='';

(function ngetik(){
	if (count== txtElement.length) {
		count=0;
	}
	currenTxt = txtElement[count];
	words=currenTxt.slice(0, ++textIndex);
	document.querySelector('.efek-ngetik').textContent=words;

	if(words.length==currenTxt.length){
		count++;
		textIndex=0;
	}
	setTimeout(ngetik,500);

})();
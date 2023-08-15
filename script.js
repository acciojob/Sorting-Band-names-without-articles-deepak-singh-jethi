//your code here

let arr = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let mp ={};
let arr2 = [];

for(let i = 0; i<arr.length; i++){
	
    let words = sentence.split(" ");
	let finalString ="";
	
	for(let j = 0; j<words.length; j++){
		let currentWord = words[j].toLowerCase();
		if(currentWord!="an" && currentWord!="the" && currentWord!="a" ){
			finalString+=word[j]+" ";
			
		}
	}
	let articleLessString = finalString.trim();
	mp[articleLessString] = arr[i];
	arr2.push(articleLessString);
}

arr2.sort();

for(let i =0; i<arr2.length; i++){
	arr[i] = mp[arr2[i]];
}
console.log(arr);
var chessArray = [];
// storeInLocalStorage();
function createBoard(){
	chessArray = JSON.parse(localStorage.getItem('chess-board'));
	addChessPieces(chessArray);			
}
function addChessPieces(chessArray){
	// let count = 0;
	// for(i of chessArray){
	// 	for(j of i){
	// 		console.log(++count +" -- "+ j);
	// 	}
	// }
	document.getElementById('main-chess-board').innerHTML = "";
	for(let i=0;i<chessArray.length;i++){
		for(let j=0;j<chessArray[i].length;j++){
			let inner_box = document.createElement('div');
			inner_box.className = 'inner-box';
			inner_box.setAttribute('row', i);
			inner_box.setAttribute('col', j);
			// inner_box.id = 'inner-box';
			document.getElementById('main-chess-board').appendChild(inner_box);
			let piecePicture = chessArray[i][j]+".png";
			if(piecePicture != ".png"){
				var img = document.createElement('img');
				img.className = 'chess-element';
				// img.id = 'chess-element';
				img.draggable = true;
				img.src = "img/"+piecePicture;
				inner_box.appendChild(img);
			}
			if((i+j) % 2 !=0){
				inner_box.style.background = "brown";
			}
			else{
				inner_box.style.background = "white";	
			}
		}
	}
}

function restore(){
	let count = 0;
	for(let i=0;i<8;i++){
		chessArray[i] = [];
		for(let j=0;j<8;j++){
			if(i==0){
				switch(j){
					case 0: chessArray[i].push("chess-rok1");break;
					case 1: chessArray[i].push("chess-knight1");break;
					case 2: chessArray[i].push("bishop1");break;
					case 3: chessArray[i].push("chess-queen");break;
					case 4: chessArray[i].push("chess-king");break;
					case 5: chessArray[i].push("bishop2");break;
					case 6: chessArray[i].push("chess-knight2");break;
					case 7: chessArray[i].push("chess-rok2");break;
					default: chessArray[i].push("");  
				}
			}
			else if(i==1){
				switch(j){
					case 0: chessArray[i].push("chess-pawn1");break;
					case 1: chessArray[i].push("chess-pawn2");break;
					case 2: chessArray[i].push("chess-pawn3");break;
					case 3: chessArray[i].push("chess-pawn4");break;
					case 4: chessArray[i].push("chess-pawn5");break;
					case 5: chessArray[i].push("chess-pawn6");break;
					case 6: chessArray[i].push("chess-pawn7");break;
					case 7: chessArray[i].push("chess-pawn8");break;
					default: chessArray[i].push("");  
				}	
			}
			else if(i==6){
				switch(j){
					case 0: chessArray[i].push("w-chess-pawn1");break;
					case 1: chessArray[i].push("w-chess-pawn2");break;
					case 2: chessArray[i].push("w-chess-pawn3");break;
					case 3: chessArray[i].push("w-chess-pawn4");break;
					case 4: chessArray[i].push("w-chess-pawn5");break;
					case 5: chessArray[i].push("w-chess-pawn6");break;
					case 6: chessArray[i].push("w-chess-pawn7");break;
					case 7: chessArray[i].push("w-chess-pawn8");break;
					default: chessArray[i].push("");  
				}	
			}
			else if(i==7){
				switch(j){
					case 0: chessArray[i].push("w-chess-rok1");break;
					case 1: chessArray[i].push("w-chess-knight1");break;
					case 2: chessArray[i].push("w-bishop1");break;
					case 3: chessArray[i].push("w-chess-queen");break;
					case 4: chessArray[i].push("w-chess-king");break;
					case 5: chessArray[i].push("w-bishop2");break;
					case 6: chessArray[i].push("w-chess-knight2");break;
					case 7: chessArray[i].push("w-chess-rok2");break;
					default: chessArray[i].push("");  
				}
			}
			else{
				chessArray[i].push("");	
			}
		}
	}
	// document.getElementById('main-chess-board').innerHTML = "";
	localArray = JSON.stringify(chessArray);
	localStorage.setItem('chess-board', localArray);
	chessArray = JSON.parse(localStorage.getItem('chess-board'));
	addChessPieces(chessArray);
}
function clear(){
	for(let i=0;i<chessArray.length;i++){
		for(let j=0;j<chessArray[i].length;j++){
			chessArray[i][j] = "";
		}
	}
	localArray = JSON.stringify(chessArray);
	localStorage.setItem('chess-board', localArray);
	chessArray = JSON.parse(localStorage.getItem('chess-board'));
	addChessPieces(chessArray);

}
function updateInLocalStorage(p_i, p_j, n_i, n_j){
	let img2 = chessArray[p_i][p_j];
	chessArray[p_i][p_j] = "";
	chessArray[n_i][n_j] = img2;
	localArray = JSON.stringify(chessArray);
	localStorage.setItem('chess-board', localArray);
	chessArray = JSON.parse(localStorage.getItem('chess-board'));
	addChessPieces(chessArray);
}

var dragBox;
function dragStart(event){
	event.stopPropagation();
	dragBox = event.target.parentNode;
}

function dragOver(event){
	event.preventDefault();
	event.stopPropagation();
}

function drop(event){
	event.preventDefault();
	event.stopPropagation();
	let p_i = dragBox.getAttribute('row');
	let p_j = dragBox.getAttribute('col');
	let n_i = event.target.getAttribute('row');
	let n_j = event.target.getAttribute('col');
	updateInLocalStorage(p_i,p_j,n_i,n_j);
}


document.getElementById('main-chess-board').addEventListener("dragstart", dragStart);
document.getElementById('main-chess-board').addEventListener("dragover", dragOver);
document.getElementById('main-chess-board').addEventListener("drop", drop);
document.getElementById('reset-btn').addEventListener("click", restore);
document.getElementById('clear-btn').addEventListener("click", clear);
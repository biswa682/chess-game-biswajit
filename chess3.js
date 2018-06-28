var chessArray = [];
var bishop1, bishop2, chess_king, chess_queen, chess_knight1, chess_knight2, chess_rook1, chess_rook2;
var chess_pawn1, chess_pawn2, chess_pawn3, chess_pawn4, chess_pawn5, chess_pawn6, chess_pawn7, chess_pawn8;
var w_bishop1, w_bishop2, w_chess_king, w_chess_queen, w_chess_knight1, w_chess_knight2, w_chess_rook1, w_chess_rook2;
var w_chess_pawn1, w_chess_pawn2, w_chess_pawn3, w_chess_pawn4, w_chess_pawn5, w_chess_pawn6, w_chess_pawn7, w_chess_pawn8;

class Element{
	constructor(name, type, row_pos, col_pos){
		this.name = name;
		this.type = type;
		this.row_pos = row_pos;
		this.col_pos = col_pos;
	}
}

function checkMovablePosition(elementType, x_pos, y_pos){
	let movePositions = [];
	const max = 8;
	const min = 0;
	if(elementType === 'bishop'){
		for(let i=min;i<max;i++){		
			for(let j=min;j<max;j++){
				let obj = {
					x: i,
					y: j 
				}
				if(i == x_pos){
					movePositions.push(obj);
				}
				else if(j == y_pos){
					movePositions.push(obj);	
				}

			}
		}
	}
	for(i of movePositions){
		// console.log(i);
	}
}
checkMovablePosition('bishop', 5, 5);

function restore(){
	let count = 0;
	for(let i=0;i<8;i++){
		chessArray[i] = [];
		for(let j=0;j<8;j++){
			if(i==0){
				switch(j){
					case 0: chess_rook1 = new Element('chess_rook1', 'chess_rook', i, j);
					chessArray[i].push(chess_rook1);break; 
					case 1: chess_knight1 = new Element('chess_knight1', 'chess_knight', i, j);
					chessArray[i].push(chess_knight1);break;
					case 2: bishop1 = new Element('bishop1', 'bishop', i, j);
					chessArray[i].push(bishop1);break;
					case 3: chess_queen = new Element('chess_queen', 'chess_queen', i, j); 
					chessArray[i].push(chess_queen);break;
					case 4: chess_king = new Element('chess_king', 'chess_king', i, j);
					chessArray[i].push(chess_king);break;
					case 5: bishop2 = new Element('bishop2', 'bishop', i, j);
					chessArray[i].push(bishop2);break;
					case 6: chess_knight2 = new Element('chess_knight2', 'chess_knight', i, j);
					chessArray[i].push(chess_knight2);break;					
					case 7: chess_rook2 = new Element('chess_rook2','chess_rook', i, j);
					chessArray[i].push(chess_rook2);break;
					default: chessArray[i].push("");  
				}
			}
			else if(i==1){
				switch(j){
					case 0: chess_pawn1 = new Element('chess_pawn1', 'chess_pawn', i, j);
					chessArray[i].push(chess_pawn1);break;					
					case 1: chess_pawn2 = new Element('chess_pawn2', 'chess_pawn', i, j);
					chessArray[i].push(chess_pawn2);break;					
					case 2: chess_pawn3 = new Element('chess_pawn3', 'chess_pawn', i, j);
					chessArray[i].push(chess_pawn3);break;					
					case 3: chess_pawn4 = new Element('chess_pawn4', 'chess_pawn', i, j);
					chessArray[i].push(chess_pawn4);break;					
					case 4: chess_pawn5 = new Element('chess_pawn5', 'chess_pawn', i, j);
					chessArray[i].push(chess_pawn5);break;					
					case 5: chess_pawn6 = new Element('chess_pawn6', 'chess_pawn', i, j);
					chessArray[i].push(chess_pawn6);break;					
					case 6: chess_pawn7 = new Element('chess_pawn7', 'chess_pawn', i, j);
					chessArray[i].push(chess_pawn7);break;
					case 7: chess_pawn8 = new Element('chess_pawn8', 'chess_pawn', i, j);
					chessArray[i].push(chess_pawn8);break;
					default: chessArray[i].push("");  
				}	
			}
			else if(i==6){
				switch(j){					
					case 0: w_chess_pawn1 = new Element('w_chess_pawn1', 'chess_pawn', i, j);
					chessArray[i].push(w_chess_pawn1);break;					
					case 1: w_chess_pawn2 = new Element('w_chess_pawn2', 'chess_pawn', i, j);
					chessArray[i].push(w_chess_pawn2);break;
					case 2: w_chess_pawn3 = new Element('w_chess_pawn3', 'chess_pawn', i, j);
					chessArray[i].push(w_chess_pawn3);break;					
					case 3: w_chess_pawn4 = new Element('w_chess_pawn4', 'chess_pawn', i, j);
					chessArray[i].push(w_chess_pawn4);break;
					case 4: w_chess_pawn5 = new Element('w_chess_pawn5', 'chess_pawn', i, j);
					chessArray[i].push(w_chess_pawn5);break;					
					case 5: w_chess_pawn6 = new Element('w_chess_pawn6', 'chess_pawn', i, j);
					chessArray[i].push(w_chess_pawn6);break;
					case 6: w_chess_pawn7 = new Element('w_chess_pawn7', 'chess_pawn', i, j);
					chessArray[i].push(w_chess_pawn7);break;					
					case 7: w_chess_pawn8 = new Element('w_chess_pawn8', 'chess_pawn', i, j);
					chessArray[i].push(w_chess_pawn8);break;
					default: chessArray[i].push(""); 
				}	
			}
			else if(i==7){
				switch(j){					
					case 0: w_chess_rook1 = new Element('w_chess_rook1', 'chess_rook', i, j);
					chessArray[i].push(w_chess_rook1);break;					
					case 1: w_chess_knight1 = new Element('w_chess_knight1', 'chess_knight', i, j);
					chessArray[i].push(w_chess_knight1);break;					
					case 2: w_bishop1 = new Element('w_bishop1', 'bishop', i, j);
					chessArray[i].push(w_bishop1);break;					
					case 3: w_chess_queen = new Element('w_chess_queen', 'chess_queen', i, j);
					chessArray[i].push(w_chess_queen);break;
					case 4: w_chess_king = new Element('w_chess_king', 'chess_king', i, j);
					chessArray[i].push(w_chess_king);break;					
					case 5: w_bishop2 = new Element('w_bishop2', 'bishop', i, j);
					chessArray[i].push(w_bishop2);break;					
					case 6: w_chess_knight2 = new Element('w_chess_knight2', 'chess_knight', i, j);
					chessArray[i].push(w_chess_knight2);break;					
					case 7: w_chess_rook2 = new Element('w_chess_rook2','chess_rook', i, j);
					chessArray[i].push(w_chess_rook2);break;
					default: chessArray[i].push("");   
				}
			}
			else{
				chessArray[i].push("");	
			}
		}
	}
	localArray = JSON.stringify(chessArray);
	localStorage.setItem('chess-board', localArray);
	chessArray = JSON.parse(localStorage.getItem('chess-board'));
	addChessPieces(chessArray);
}
// storeInLocalStorage();
function createBoard(){
	var chessArray = JSON.parse(localStorage.getItem('chess-board'));
	addChessPieces(chessArray);
}
function iterator(arr){
	let count = 0;
	for(i of arr){
		for(j of i){
			console.log(++count +" -- "+ j);
		}
	}
}
function addChessPieces(chessArray){
	document.getElementById('main-chess-board').innerHTML = "";
	for(let i=0;i<chessArray.length;i++){
		for(let j=0;j<chessArray[i].length;j++){
			let inner_box = document.createElement('div');
			inner_box.className = 'inner-box';
			inner_box.setAttribute('row', i);
			inner_box.setAttribute('col', j);
			// inner_box.id = 'inner-box';
			document.getElementById('main-chess-board').appendChild(inner_box);
			let piecePicture = chessArray[i][j].name+".png";
			if(piecePicture != "undefined.png"){
				var img = document.createElement('img');
				img.className = 'chess-element';
				// img.id = 'chess-element';
				img.draggable = true;
				img.src = "img/"+piecePicture;
				inner_box.appendChild(img);
			}
			else{

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
	let img2 = chessArray[p_i][p_j].name;
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
var chessArray = [];
var bishop1, bishop2, chess_king, chess_queen, chess_knight1, chess_knight2, chess_rook1, chess_rook2;
var chess_pawn1, chess_pawn2, chess_pawn3, chess_pawn4, chess_pawn5, chess_pawn6, chess_pawn7, chess_pawn8;
var w_bishop1, w_bishop2, w_chess_king, w_chess_queen, w_chess_knight1, w_chess_knight2, w_chess_rook1, w_chess_rook2;
var w_chess_pawn1, w_chess_pawn2, w_chess_pawn3, w_chess_pawn4, w_chess_pawn5, w_chess_pawn6, w_chess_pawn7, w_chess_pawn8;
var blackKingPosition;
function checkmate(){

}
function threatElement(b_i, b_j, king,chessArray2){
	if(chessArray2[b_i][b_j].color !== king.color && validMove(b_i,b_j,king.row_pos, king.col_pos, chessArray2)){
		// console.log("true");
		return true;
	}
	else{
		// console.log("false");
		return false;
	}
}
function kingInThreat(king,chessArray2){
	// console.log(king);
	let k_i = king.row_pos;
	let k_j = king.col_pos;
	console.log("------i : "+k_i+" j :"+k_j);
	let max = chessArray.length;
	let min = 0;
	//check in top position
	if(k_i != 0){
		for(let i=k_i-1;i>=min;i--){
			// console.log("i : "+i+" j :"+k_j);
			if(positionBook(i,k_j)){
				// console.log('ok');
				// break;
				// if(threatElement(i,k_j,king,chessArray2)){
				// 	// console.log("King is in threat");
				// }
			}
		}
	}else{
		// console.log("not checked");
	}
	//check in top-right position
	//check in right postion
	//check in right bottom
	//check in bottom
	//check in bottom left
	//check in bottom left
	//check in left
	//check in top left
}


class Element{
	constructor(name, type, color, row_pos, col_pos){
		this.name = name;
		this.type = type;
		this.color = color;
		this.row_pos = row_pos;
		this.col_pos = col_pos;
	}
}
function noOfAvailableElement(){
	chessArray = JSON.parse(localStorage.getItem('chess-board'));
	let b1 = 0;
	let w1 = 0;
	for(i of chessArray){
		for(j of i){
			if(j != "" && j.color === 'black'){
				++b1;
			}
			else if(j != "" && j.color === 'white'){
				++w1;
			}
		}
	}
	// console.log("Available Black element : "+ b1);
	// console.log("Available White element : "+ w1);
}
function checkMovablePosition(elementType, x_pos, y_pos){
	let movePositions = [];
	movePositions[0] = [];
	movePositions[1] = [];
	movePositions[2] = [];
	movePositions[3] = [];
	const max = 8;
	const min = 0;
	if(elementType === 'chess_rook'){
		for(let i=min;i<max;i++){		
			for(let j=min;j<max;j++){
				let booked = positionBook(i, j);
				let obj = {
					x: i,
					y: j 
				}
				if((i>=min && i<x_pos) && j == y_pos){
					let temp = 0;
					if(booked){
						temp = 1;
					}
					if(temp ==0){
						movePositions[0].push(obj);
					}
				}
				else if(i == x_pos && (j>y_pos && j<max)){
					let temp = 0;
					if(booked){
						temp = 1;
					}
					if(temp ==0){
						movePositions[1].push(obj);
					}

				}
				else if((i>x_pos && i<max) && j == y_pos){
					let temp = 0;
					if(booked){
						temp = 1;
					}
					if(temp ==0){
						movePositions[2].push(obj);
					}
				}
				else if(i == x_pos && (j>=min && j<y_pos)){
					let temp = 0;
					if(booked){
						temp = 1;
					}
					if(temp ==0){
						movePositions[3].push(obj);
					}
				}
			}
		}
		let c = 0;
		for(i of movePositions){
			for(j of i){
				++c;
				// console.log(j);
			}
		}
		// console.log(c);
	}
}
function positionBook(x_pos, y_pos){
	chessArray = JSON.parse(localStorage.getItem('chess-board'));
	if(chessArray[x_pos][y_pos] === "")
		return false;
	else 
		return true;
}
function checkRookPosition(p_i, p_j, n_i, n_j){
	
	if(p_j == n_j && p_i < n_i){
		let def = n_i - p_i;
		let c1 = p_i;
		for(let i=0;i<def-1;i++){
			if(positionBook(++c1, p_j)){
				return false;
			}
		}
		++c1;
		if(c1 == n_i && p_j == n_j){
			return true;
		}
		else{
			return false;
		}
	}
	else if(p_j == n_j && p_i > n_i){
		let def = p_i - n_i;
		let c1 = p_i;
		for(let i=0;i<def-1;i++){
			if(positionBook(--c1, p_j)){
				return false;
			}
		}
		--c1;
		if(c1 == n_i && p_j == n_j){
			return true;
		}
		else{
			return false;
		}
	}
	else if(p_i == n_i && p_j > n_j){
		let def = p_j - n_j;
		let c1 = p_j;
		for(let i=0;i<def-1;i++){
			if(positionBook(p_i, --c1)){
				return false;
			}
		}
		--c1;
		if(c1 == n_j && p_i == n_i){
			return true;
		}
		else{
			return false;
		}
	}
	else if(p_i == n_i && p_j < n_j){
		let def = n_j - p_j;
		let c1 = p_j;
		for(let i=0;i<def-1;i++){
			if(positionBook(p_i, ++c1)){
				return false;
			}
		}
		++c1;
		if(c1 == n_j && p_i == n_i){
			return true;
		}
		else{
			return false;
		}
	}
	else{
		return false;
	}
}
function checkKnightPosition(p_i, p_j, n_i, n_j){
	if((p_i - 2 == n_i) && (p_j - 1 == n_j || p_j + 1 == n_j)){
		return true;
	}
	else if((p_i + 2 == n_i) && (p_j - 1 == n_j || p_j + 1 == n_j)){
		return true;
	}
	else if((p_i - 1 == n_i) && (p_j - 2 == n_j || p_j + 2 == n_j)){
		return true;
	}
	else if((p_i + 1 == n_i) && (p_j - 2 == n_j || p_j + 2 == n_j)){
		return true;
	}
	else{
		return false;
	}
}
function checkBishopPosition(p_i, p_j, n_i, n_j){
	if(p_i > n_i  && p_j < n_j){
		let dif1 = n_j - p_j;
		let dif2 = p_i - n_i;
		if(dif1 != dif2)
			return false;
		let c1 = p_i;
		let c2 = p_j;
		for(let i=0;i<dif1-1;i++){
			if(positionBook(--c1, ++c2)){
				return false;
			}
		}
		--c1;++c2;
		if(c1 == n_i && c2 == n_j)
			return true;
		else
			return false;
	}
	else if(p_i < n_i  && p_j < n_j){
		let dif1 = n_i - p_i;
		let dif2 = n_j - p_j;
		if(dif1 != dif2)
			return false;
		let c1 = p_i;
		let c2 = p_j;
		for(let i=0;i<dif1-1;i++){
			if(positionBook(++c1, ++c2)){
				return false;
			}
		}
		++c1;++c2;
		if(c1 == n_i && c2 == n_j)
			return true;
		else
			return false;
	}
	else if(p_i < n_i  && p_j > n_j){
		let dif1 = n_i - p_i;
		let dif2 = p_j - n_j;
		if(dif1 != dif2)
			return false;
		let c1 = p_i;
		let c2 = p_j;
		for(let i=0;i<dif1-1;i++){
			if(positionBook(++c1, --c2)){
				return false;
			}
		}
		++c1; --c2;
		if(c1 == n_i && c2 == n_j)
			return true;
		else
			return false;
	}
	else if(p_i > n_i  && p_j > n_j){
		let dif1 = p_i - n_i;
		let dif2 = p_j - n_j;
		if(dif1 != dif2)
			return false;
		let c1 = p_i;
		let c2 = p_j;
		for(let i=0;i<dif1-1;i++){
			if(positionBook(--c1, --c2)){
				return false;
			}
		}
		--c1;--c2;
		if(c1 == n_i && c2 == n_j)
			return true;
		else
			return false;
	}
	else{
		return false;
	}
}
function checkKingPosition(p_i, p_j, n_i, n_j){
	if((p_j == n_j || p_i-1 == n_i) && (p_i+1 == n_i || p_i-1 == n_i)){
		return true;
	}
	else if((p_i == n_i || p_i+1 == n_i) && (p_j+1 == n_j || p_j-1 == n_j)){
		return true;
	}
	else{
		return false;
	}
}
function checkQueenPosition(p_i, p_j, n_i, n_j){
	if(checkRookPosition(p_i, p_j, n_i, n_j) || checkBishopPosition(p_i, p_j, n_i, n_j)){
		return true;
	}
	else{
		return false;
	}
}
function checkPawnPosition(p_i, p_j, n_i, n_j, color){
	if(color == 'black'){
		// console.log("Working "+(positionBook(p_i+1, p_j+1))+" "+ (p_i+1 == n_i && p_j+1 == n_j));
		if(!positionBook(p_i+1, p_j) && (p_i+1 == n_i && p_j == n_j)){
			return true;
		}
		else if((positionBook(p_i+1, p_j-1)) && (p_i+1 == n_i && p_j-1 == n_j)){
			return true;
		}
		else if((positionBook(p_i+1, p_j+1)) && (p_i+1 == n_i && p_j+1 == n_j)){
			return true;
		}
		else{
			return false;
		}
	}
	else if(color == 'white'){
		if(!positionBook(p_i-1, p_j) && (p_i-1 == n_i && p_j == n_j)){
			return true;
		}
		else if((positionBook(p_i-1, p_j+1)) && (p_i-1 == n_i && p_j+1 == n_j)){
			return true;
		}
		else if((positionBook(p_i-1, p_j-1)) && (p_i-1 == n_i && p_j-1 == n_j)){
			return true;
		}
		else{
			return false;
		}
	}
	else{
		return false;
	}
}
// console.log(checkQueenPosition(2,2,1,2));
function restore(){
	noOfStepsCount = 1;
	let count = 0;
	for(let i=0;i<8;i++){
		chessArray[i] = [];
		for(let j=0;j<8;j++){
			if(i==0){
				switch(j){
					case 0: chess_rook1 = new Element('chess_rook1', 'chess_rook', 'black', i, j);
					chessArray[i].push(chess_rook1);break; 
					case 1: chess_knight1 = new Element('chess_knight1', 'chess_knight', 'black', i, j);
					chessArray[i].push(chess_knight1);break;
					case 2: bishop1 = new Element('bishop1', 'bishop', 'black', i, j);
					chessArray[i].push(bishop1);break;
					case 3: chess_queen = new Element('chess_queen', 'chess_queen', 'black', i, j); 
					chessArray[i].push(chess_queen);break;
					case 4: chess_king = new Element('chess_king', 'chess_king', 'black', i, j);
					chessArray[i].push(chess_king);break;
					case 5: bishop2 = new Element('bishop2', 'bishop', 'black', i, j);
					chessArray[i].push(bishop2);break;
					case 6: chess_knight2 = new Element('chess_knight2', 'chess_knight', 'black', i, j);
					chessArray[i].push(chess_knight2);break;					
					case 7: chess_rook2 = new Element('chess_rook2','chess_rook', 'black', i, j);
					chessArray[i].push(chess_rook2);break;
					default: chessArray[i].push("");  
				}
			}
			else if(i==1){
				switch(j){
					case 0: chess_pawn1 = new Element('chess_pawn1', 'chess_pawn', 'black', i, j);
					chessArray[i].push(chess_pawn1);break;					
					case 1: chess_pawn2 = new Element('chess_pawn2', 'chess_pawn', 'black', i, j);
					chessArray[i].push(chess_pawn2);break;					
					case 2: chess_pawn3 = new Element('chess_pawn3', 'chess_pawn', 'black', i, j);
					chessArray[i].push(chess_pawn3);break;					
					case 3: chess_pawn4 = new Element('chess_pawn4', 'chess_pawn', 'black', i, j);
					chessArray[i].push(chess_pawn4);break;					
					case 4: chess_pawn5 = new Element('chess_pawn5', 'chess_pawn', 'black', i, j);
					chessArray[i].push(chess_pawn5);break;					
					case 5: chess_pawn6 = new Element('chess_pawn6', 'chess_pawn', 'black', i, j);
					chessArray[i].push(chess_pawn6);break;					
					case 6: chess_pawn7 = new Element('chess_pawn7', 'chess_pawn', 'black', i, j);
					chessArray[i].push(chess_pawn7);break;
					case 7: chess_pawn8 = new Element('chess_pawn8', 'chess_pawn', 'black', i, j);
					chessArray[i].push(chess_pawn8);break;
					default: chessArray[i].push("");  
				}	
			}
			else if(i==6){
				switch(j){					
					case 0: w_chess_pawn1 = new Element('w_chess_pawn1', 'chess_pawn', 'white', i, j);
					chessArray[i].push(w_chess_pawn1);break;					
					case 1: w_chess_pawn2 = new Element('w_chess_pawn2', 'chess_pawn', 'white', i, j);
					chessArray[i].push(w_chess_pawn2);break;
					case 2: w_chess_pawn3 = new Element('w_chess_pawn3', 'chess_pawn', 'white', i, j);
					chessArray[i].push(w_chess_pawn3);break;					
					case 3: w_chess_pawn4 = new Element('w_chess_pawn4', 'chess_pawn', 'white', i, j);
					chessArray[i].push(w_chess_pawn4);break;
					case 4: w_chess_pawn5 = new Element('w_chess_pawn5', 'chess_pawn', 'white', i, j);
					chessArray[i].push(w_chess_pawn5);break;					
					case 5: w_chess_pawn6 = new Element('w_chess_pawn6', 'chess_pawn', 'white', i, j);
					chessArray[i].push(w_chess_pawn6);break;
					case 6: w_chess_pawn7 = new Element('w_chess_pawn7', 'chess_pawn', 'white', i, j);
					chessArray[i].push(w_chess_pawn7);break;					
					case 7: w_chess_pawn8 = new Element('w_chess_pawn8', 'chess_pawn', 'white', i, j);
					chessArray[i].push(w_chess_pawn8);break;
					default: chessArray[i].push(""); 
				}	
			}
			else if(i==7){
				switch(j){					
					case 0: w_chess_rook1 = new Element('w_chess_rook1', 'chess_rook', 'white', i, j);
					chessArray[i].push(w_chess_rook1);break;					
					case 1: w_chess_knight1 = new Element('w_chess_knight1', 'chess_knight', 'white', i, j);
					chessArray[i].push(w_chess_knight1);break;					
					case 2: w_bishop1 = new Element('w_bishop1', 'bishop', 'white', i, j);
					chessArray[i].push(w_bishop1);break;					
					case 3: w_chess_queen = new Element('w_chess_queen', 'chess_queen', 'white', i, j);
					chessArray[i].push(w_chess_queen);break;
					case 4: w_chess_king = new Element('w_chess_king', 'chess_king', 'white', i, j);
					chessArray[i].push(w_chess_king);break;					
					case 5: w_bishop2 = new Element('w_bishop2', 'bishop', 'white', i, j);
					chessArray[i].push(w_bishop2);break;					
					case 6: w_chess_knight2 = new Element('w_chess_knight2', 'chess_knight', 'white', i, j);
					chessArray[i].push(w_chess_knight2);break;					
					case 7: w_chess_rook2 = new Element('w_chess_rook2','chess_rook', 'white', i, j);
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
	// xconsole.log(whiteKingPosition);
	addChessPieces(chessArray);
}

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
				inner_box.style.background = "#808080";
			}
			else{
				inner_box.style.background = "#8080ff";	
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
	chessArray = JSON.parse(localStorage.getItem('chess-board'));
	let img2 = chessArray[p_i][p_j];
	img2.row_pos = n_i;
	img2.col_pos = p_i;
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
function checkOponent(p_i,p_j,n_i,n_j,chessArray2){
	colorType1 = chessArray2[p_i][p_j].color;
	colorType2 = chessArray2[n_i][n_j].color;
	if(colorType1 === colorType2)
		return false;
	else
		return true;
}
function validMove(p_i,p_j,n_i,n_j,chessArray2){
	let check;
	if(checkOponent(p_i,p_j,n_i,n_j,chessArray2)){
		if(chessArray2[p_i][p_j].type == 'bishop'){
			// console.log("bishop is moving");
			check = checkBishopPosition(p_i, p_j, n_i, n_j);
			// console.log(check);
		}
		else if(chessArray2[p_i][p_j].type == 'chess_knight'){
			// console.log("Knight is moving");
			check = checkKnightPosition(p_i, p_j, n_i, n_j);
			// console.log(check);
		}
		else if(chessArray2[p_i][p_j].type == 'chess_rook'){
			// console.log("rook is moving");
			check = checkRookPosition(p_i, p_j, n_i, n_j);
			// console.log(check);
		}
		else if(chessArray2[p_i][p_j].type == 'chess_king'){
			// console.log("king is moving");
			check = checkKingPosition(p_i, p_j, n_i, n_j);
			// console.log(check);
		}
		else if(chessArray2[p_i][p_j].type == 'chess_queen'){
			// console.log("Queen is moving");
			check = checkQueenPosition(p_i, p_j, n_i, n_j);	
			// console.log(check);
		}
		else if(chessArray2[p_i][p_j].type == 'chess_pawn'){
			// console.log("Pawn is moving");
			check = checkPawnPosition(p_i, p_j, n_i, n_j, chessArray[p_i][p_j].color);	
			// console.log(check);
		}
		else{
			// console.log("else part is running");
			check = false;
		}
	}
	else{
		// console.log("Same color cannot move");
		check = false;
	}
	return check;
}
function countSteps(count, dragElement){
	// console.log(dragElement);
	if(count <=4){
		if((count == 1 || count == 2) && dragElement == 'white'){
			console.log("white element is drag");
			return true;
		}
		else if((count == 3 || count == 4) && dragElement == 'black'){
			console.log("black element is drag");
			return true;
		}
		else{
			console.log("wrong move");
			return false;
		}
	}
	else{
		if((count % 2 == 1) && (dragElement == 'white')){
			console.log("Odd move and white element");
			return true;
		}
		else if((count % 2 == 0) && (dragElement == 'black')){
			console.log("Even move and black element");
			return true;
		}
		else{
			console.log("after 4th step wrong move");
			return false;
		}
	}
}
function kingCurrentPosition(k_color, chessArray2){
	for(let i=0;i<chessArray2.length;i++){
		for(let j=0;j<chessArray2[i].length;j++){
			if(chessArray2[i][j].type == 'chess_king' && chessArray2[i][j].color == k_color){
				return chessArray2[i][j];
			}	
		}
	}
}
var noOfStepsCount;
function drop(event){
	event.preventDefault();
	event.stopPropagation();
	chessArray = JSON.parse(localStorage.getItem('chess-board'));
	let p_i = parseInt(dragBox.getAttribute('row'));
	let p_j = parseInt(dragBox.getAttribute('col'));
	let n_i;
	let n_j;
	if(event.target.tagName == 'IMG'){
		n_i = parseInt(event.target.parentNode.getAttribute('row'));
		n_j = parseInt(event.target.parentNode.getAttribute('col'));
	}
	else{
		n_i = parseInt(event.target.getAttribute('row'));
		n_j = parseInt(event.target.getAttribute('col'));	
	}
	let check = validMove(p_i,p_j,n_i,n_j,chessArray);
	let validStep = true;
	if(check && validStep){
		updateInLocalStorage(p_i,p_j,n_i,n_j);
		chessArray = JSON.parse(localStorage.getItem('chess-board'));
		let king1 = kingCurrentPosition('black', chessArray);
		// let king2 = kingCurrentPosition('white', chessArray);
		//console.log(kingCurrentPosition('black', chessArray));
		// noOfAvailableElement();
		// console.log("No of steps "+noOfStepsCount);
		// ++noOfStepsCount;
		//king is in threat postion or not
		// console.log(whiteKingPosition);
		// kingInThreat(whiteKingPosition,chessArray);
		console.log(king1);
		 // kingInThreat(king1,chessArray);
		// kingInThreat(king2,chessArray);
	}
}


document.getElementById('main-chess-board').addEventListener("dragstart", dragStart);
document.getElementById('main-chess-board').addEventListener("dragover", dragOver);
document.getElementById('main-chess-board').addEventListener("drop", drop);
document.getElementById('reset-btn').addEventListener("click", restore);
document.getElementById('clear-btn').addEventListener("click", clear);
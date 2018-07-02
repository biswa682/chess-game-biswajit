var chessArray = [];
var bishop1, bishop2, chess_king, chess_queen, chess_knight1, chess_knight2, chess_rook1, chess_rook2;
var chess_pawn1, chess_pawn2, chess_pawn3, chess_pawn4, chess_pawn5, chess_pawn6, chess_pawn7, chess_pawn8;
var w_bishop1, w_bishop2, w_chess_king, w_chess_queen, w_chess_knight1, w_chess_knight2, w_chess_rook1, w_chess_rook2;
var w_chess_pawn1, w_chess_pawn2, w_chess_pawn3, w_chess_pawn4, w_chess_pawn5, w_chess_pawn6, w_chess_pawn7, w_chess_pawn8;

window.onload = createBoard();
function createBoard() {
	chessArray = JSON.parse(localStorage.getItem('chess-board'));
	if (chessArray === null) {
		restore();
	}
	else {
		addChessPieces(chessArray);
		document.getElementById('noOfMoves').innerHTML = "No of Moves : " + Math.floor(chessArray[8] / 2);
	}
}
class Element {
	constructor(name, type, color, row_pos, col_pos) {
		this.name = name;
		this.type = type;
		this.color = color;
		this.row_pos = row_pos;
		this.col_pos = col_pos;
	}
}
function clear() {
	for (let i = 0; i < chessArray.length; i++) {
		for (let j = 0; j < chessArray[i].length; j++) {
			chessArray[i][j] = "";
		}
	}
	localArray = JSON.stringify(chessArray);
	localStorage.setItem('chess-board', localArray);
	chessArray = JSON.parse(localStorage.getItem('chess-board'));
	addChessPieces(chessArray);
}
var noOfStepsCount;
function restore() {
	let noOfStepsCount = 1;
	let count = 0;
	chessArray = [];
	for (let i = 0; i < 8; i++) {
		chessArray[i] = [];
		for (let j = 0; j < 8; j++) {
			if (i == 0) {
				switch (j) {
					case 0: chess_rook1 = new Element('chess_rook1', 'chess_rook', 'black', i, j);
						chessArray[i].push(chess_rook1); break;
					case 1: chess_knight1 = new Element('chess_knight1', 'chess_knight', 'black', i, j);
						chessArray[i].push(chess_knight1); break;
					case 2: bishop1 = new Element('bishop1', 'bishop', 'black', i, j);
						chessArray[i].push(bishop1); break;
					case 3: chess_queen = new Element('chess_queen', 'chess_queen', 'black', i, j);
						chessArray[i].push(chess_queen); break;
					case 4: chess_king = new Element('chess_king', 'chess_king', 'black', i, j);
						chessArray[i].push(chess_king); break;
					case 5: bishop2 = new Element('bishop2', 'bishop', 'black', i, j);
						chessArray[i].push(bishop2); break;
					case 6: chess_knight2 = new Element('chess_knight2', 'chess_knight', 'black', i, j);
						chessArray[i].push(chess_knight2); break;
					case 7: chess_rook2 = new Element('chess_rook2', 'chess_rook', 'black', i, j);
						chessArray[i].push(chess_rook2); break;
					default: chessArray[i].push("");
				}
			}
			else if (i == 1) {
				switch (j) {
					case 0: chess_pawn1 = new Element('chess_pawn1', 'chess_pawn', 'black', i, j);
						chessArray[i].push(chess_pawn1); break;
					case 1: chess_pawn2 = new Element('chess_pawn2', 'chess_pawn', 'black', i, j);
						chessArray[i].push(chess_pawn2); break;
					case 2: chess_pawn3 = new Element('chess_pawn3', 'chess_pawn', 'black', i, j);
						chessArray[i].push(chess_pawn3); break;
					case 3: chess_pawn4 = new Element('chess_pawn4', 'chess_pawn', 'black', i, j);
						chessArray[i].push(chess_pawn4); break;
					case 4: chess_pawn5 = new Element('chess_pawn5', 'chess_pawn', 'black', i, j);
						chessArray[i].push(chess_pawn5); break;
					case 5: chess_pawn6 = new Element('chess_pawn6', 'chess_pawn', 'black', i, j);
						chessArray[i].push(chess_pawn6); break;
					case 6: chess_pawn7 = new Element('chess_pawn7', 'chess_pawn', 'black', i, j);
						chessArray[i].push(chess_pawn7); break;
					case 7: chess_pawn8 = new Element('chess_pawn8', 'chess_pawn', 'black', i, j);
						chessArray[i].push(chess_pawn8); break;
					default: chessArray[i].push("");
				}
			}
			else if (i == 6) {
				switch (j) {
					case 0: w_chess_pawn1 = new Element('w_chess_pawn1', 'chess_pawn', 'white', i, j);
						chessArray[i].push(w_chess_pawn1); break;
					case 1: w_chess_pawn2 = new Element('w_chess_pawn2', 'chess_pawn', 'white', i, j);
						chessArray[i].push(w_chess_pawn2); break;
					case 2: w_chess_pawn3 = new Element('w_chess_pawn3', 'chess_pawn', 'white', i, j);
						chessArray[i].push(w_chess_pawn3); break;
					case 3: w_chess_pawn4 = new Element('w_chess_pawn4', 'chess_pawn', 'white', i, j);
						chessArray[i].push(w_chess_pawn4); break;
					case 4: w_chess_pawn5 = new Element('w_chess_pawn5', 'chess_pawn', 'white', i, j);
						chessArray[i].push(w_chess_pawn5); break;
					case 5: w_chess_pawn6 = new Element('w_chess_pawn6', 'chess_pawn', 'white', i, j);
						chessArray[i].push(w_chess_pawn6); break;
					case 6: w_chess_pawn7 = new Element('w_chess_pawn7', 'chess_pawn', 'white', i, j);
						chessArray[i].push(w_chess_pawn7); break;
					case 7: w_chess_pawn8 = new Element('w_chess_pawn8', 'chess_pawn', 'white', i, j);
						chessArray[i].push(w_chess_pawn8); break;
					default: chessArray[i].push("");
				}
			}
			else if (i == 7) {
				switch (j) {
					case 0: w_chess_rook1 = new Element('w_chess_rook1', 'chess_rook', 'white', i, j);
						chessArray[i].push(w_chess_rook1); break;
					case 1: w_chess_knight1 = new Element('w_chess_knight1', 'chess_knight', 'white', i, j);
						chessArray[i].push(w_chess_knight1); break;
					case 2: w_bishop1 = new Element('w_bishop1', 'bishop', 'white', i, j);
						chessArray[i].push(w_bishop1); break;
					case 3: w_chess_queen = new Element('w_chess_queen', 'chess_queen', 'white', i, j);
						chessArray[i].push(w_chess_queen); break;
					case 4: w_chess_king = new Element('w_chess_king', 'chess_king', 'white', i, j);
						chessArray[i].push(w_chess_king); break;
					case 5: w_bishop2 = new Element('w_bishop2', 'bishop', 'white', i, j);
						chessArray[i].push(w_bishop2); break;
					case 6: w_chess_knight2 = new Element('w_chess_knight2', 'chess_knight', 'white', i, j);
						chessArray[i].push(w_chess_knight2); break;
					case 7: w_chess_rook2 = new Element('w_chess_rook2', 'chess_rook', 'white', i, j);
						chessArray[i].push(w_chess_rook2); break;
					default: chessArray[i].push("");
				}
			}
			else {
				chessArray[i].push("");
			}
		}
	}
	document.getElementById('noOfMoves').innerHTML = "No of Moves : " + 0;
	document.getElementById('w-checkmate').style.visibility = "hidden";
	document.getElementById('b-checkmate').style.visibility = "hidden";
	chessArray.push(noOfStepsCount);
	localStorage.setItem('chess-board', JSON.stringify(chessArray));
	chessArray = JSON.parse(localStorage.getItem('chess-board'));
	addChessPieces(chessArray);
}
function addChessPieces(chessArray) {
	document.getElementById('main-chess-board').innerHTML = "";
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			let inner_box = document.createElement('div');
			inner_box.className = 'inner-box';
			inner_box.setAttribute('row', i);
			inner_box.setAttribute('col', j);
			// inner_box.id = 'inner-box';
			document.getElementById('main-chess-board').appendChild(inner_box);
			let piecePicture = chessArray[i][j].name + ".png";
			if (piecePicture != "undefined.png") {
				var img = document.createElement('img');
				img.className = 'chess-element';
				// img.id = 'chess-element';
				img.draggable = true;
				img.src = "img/" + piecePicture;
				inner_box.appendChild(img);
			}
			else {

			}
			if ((i + j) % 2 != 0) {
				inner_box.style.background = "#514d4c";
			}
			else {
				inner_box.style.background = "#b2b1b0";
			}
		}
	}
	if (chessArray[8] % 2 == 0) {
		document.getElementById('noOfMoves').innerHTML = "No of Moves : " + chessArray[8] / 2;
		document.getElementById('colorOfMovingPiece').innerHTML = "Black's Turn";
	}
	else {
		document.getElementById('colorOfMovingPiece').innerHTML = "White's Turn";
	}
}
function checkPosition(element, element_color, arr) {
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			if (arr[i][j].color == element_color && arr[i][j].type == element) {
				return arr[i][j];
			}
		}
	}
}
function positionBook(x_pos, y_pos) {
	chessArray = JSON.parse(localStorage.getItem('chess-board'));
	if (chessArray[x_pos][y_pos] === "")
		return false;
	else
		return true;
}
function checkRookPosition(p_i, p_j, n_i, n_j) {

	if (p_j == n_j && p_i < n_i) {
		let def = n_i - p_i;
		let c1 = p_i;
		for (let i = 0; i < def - 1; i++) {
			if (positionBook(++c1, p_j)) {
				return false;
			}
		}
		++c1;
		if (c1 == n_i && p_j == n_j) {
			return true;
		}
		else {
			return false;
		}
	}
	else if (p_j == n_j && p_i > n_i) {
		let def = p_i - n_i;
		let c1 = p_i;
		for (let i = 0; i < def - 1; i++) {
			if (positionBook(--c1, p_j)) {
				return false;
			}
		}
		--c1;
		if (c1 == n_i && p_j == n_j) {
			return true;
		}
		else {
			return false;
		}
	}
	else if (p_i == n_i && p_j > n_j) {
		let def = p_j - n_j;
		let c1 = p_j;
		for (let i = 0; i < def - 1; i++) {
			if (positionBook(p_i, --c1)) {
				return false;
			}
		}
		--c1;
		if (c1 == n_j && p_i == n_i) {
			return true;
		}
		else {
			return false;
		}
	}
	else if (p_i == n_i && p_j < n_j) {
		let def = n_j - p_j;
		let c1 = p_j;
		for (let i = 0; i < def - 1; i++) {
			if (positionBook(p_i, ++c1)) {
				return false;
			}
		}
		++c1;
		if (c1 == n_j && p_i == n_i) {
			return true;
		}
		else {
			return false;
		}
	}
	else {
		return false;
	}
}
function checkKnightPosition(p_i, p_j, n_i, n_j) {
	if ((p_i - 2 == n_i) && (p_j - 1 == n_j || p_j + 1 == n_j)) {
		return true;
	}
	else if ((p_i + 2 == n_i) && (p_j - 1 == n_j || p_j + 1 == n_j)) {
		return true;
	}
	else if ((p_i - 1 == n_i) && (p_j - 2 == n_j || p_j + 2 == n_j)) {
		return true;
	}
	else if ((p_i + 1 == n_i) && (p_j - 2 == n_j || p_j + 2 == n_j)) {
		return true;
	}
	else {
		return false;
	}
}
function checkBishopPosition(p_i, p_j, n_i, n_j) {
	if (p_i > n_i && p_j < n_j) {
		let dif1 = n_j - p_j;
		let dif2 = p_i - n_i;
		if (dif1 != dif2)
			return false;
		let c1 = p_i;
		let c2 = p_j;
		for (let i = 0; i < dif1 - 1; i++) {
			if (positionBook(--c1, ++c2)) {
				return false;
			}
		}
		--c1; ++c2;
		if (c1 == n_i && c2 == n_j)
			return true;
		else
			return false;
	}
	else if (p_i < n_i && p_j < n_j) {
		let dif1 = n_i - p_i;
		let dif2 = n_j - p_j;
		if (dif1 != dif2)
			return false;
		let c1 = p_i;
		let c2 = p_j;
		for (let i = 0; i < dif1 - 1; i++) {
			if (positionBook(++c1, ++c2)) {
				return false;
			}
		}
		++c1; ++c2;
		if (c1 == n_i && c2 == n_j)
			return true;
		else
			return false;
	}
	else if (p_i < n_i && p_j > n_j) {
		let dif1 = n_i - p_i;
		let dif2 = p_j - n_j;
		if (dif1 != dif2)
			return false;
		let c1 = p_i;
		let c2 = p_j;
		for (let i = 0; i < dif1 - 1; i++) {
			if (positionBook(++c1, --c2)) {
				return false;
			}
		}
		++c1; --c2;
		if (c1 == n_i && c2 == n_j)
			return true;
		else
			return false;
	}
	else if (p_i > n_i && p_j > n_j) {
		let dif1 = p_i - n_i;
		let dif2 = p_j - n_j;
		if (dif1 != dif2)
			return false;
		let c1 = p_i;
		let c2 = p_j;
		for (let i = 0; i < dif1 - 1; i++) {
			if (positionBook(--c1, --c2)) {
				return false;
			}
		}
		--c1; --c2;
		if (c1 == n_i && c2 == n_j)
			return true;
		else
			return false;
	}
	else {
		return false;
	}
}
function checkKingPosition(p_i, p_j, n_i, n_j) {
	if ((p_j == n_j || p_i - 1 == n_i) && (p_i + 1 == n_i || p_i - 1 == n_i)) {
		return true;
	}
	else if ((p_i == n_i || p_i + 1 == n_i) && (p_j + 1 == n_j || p_j - 1 == n_j)) {
		return true;
	}
	else {
		return false;
	}
}
function checkQueenPosition(p_i, p_j, n_i, n_j) {
	if (checkRookPosition(p_i, p_j, n_i, n_j) || checkBishopPosition(p_i, p_j, n_i, n_j)) {
		return true;
	}
	else {
		return false;
	}
}
function checkPawnPosition(p_i, p_j, n_i, n_j, color) {

	if (color == 'black') {
		// console.log("Working "+(positionBook(p_i+1, p_j+1))+" "+ (p_i+1 == n_i && p_j+1 == n_j));
		if (p_i == 1) {
			if (!positionBook(p_i + 2, p_j) && (p_i + 2 == n_i && p_j == n_j)) {
				return true;
			}
		}
		if (!positionBook(p_i + 1, p_j) && (p_i + 1 == n_i && p_j == n_j)) {
			return true;
		}
		else if ((positionBook(p_i + 1, p_j - 1)) && (p_i + 1 == n_i && p_j - 1 == n_j)) {
			return true;
		}
		else if ((positionBook(p_i + 1, p_j + 1)) && (p_i + 1 == n_i && p_j + 1 == n_j)) {
			return true;
		}
		else {
			return false;
		}
	}
	else if (color == 'white') {
		if (p_i == 6) {
			if (!positionBook(p_i - 2, p_j) && (p_i - 2 == n_i && p_j == n_j)) {
				return true;
			}
		}
		if (!positionBook(p_i - 1, p_j) && (p_i - 1 == n_i && p_j == n_j)) {
			return true;
		}
		else if ((positionBook(p_i - 1, p_j + 1)) && (p_i - 1 == n_i && p_j + 1 == n_j)) {
			return true;
		}
		else if ((positionBook(p_i - 1, p_j - 1)) && (p_i - 1 == n_i && p_j - 1 == n_j)) {
			return true;
		}
		else {
			return false;
		}
	}
	else {
		return false;
	}
}
var dragBox;
function dragStart(event) {
	event.stopPropagation();
	dragBox = event.target.parentNode;
}

function dragOver(event) {
	event.preventDefault();
	event.stopPropagation();
}
function updateInLocalStorage(p_i, p_j, n_i, n_j, chessArray) {
	let img2 = chessArray[p_i][p_j];
	img2.row_pos = n_i;
	img2.col_pos = n_j;
	chessArray[p_i][p_j] = "";
	chessArray[n_i][n_j] = img2;
	chessArray[8] = ++chessArray[8];
	localArray = JSON.stringify(chessArray);
	localStorage.setItem('chess-board', localArray);
	chessArray = JSON.parse(localStorage.getItem('chess-board'));
	// console.log(chessArray);
	addChessPieces(chessArray);
}
function checkOponent(p_i, p_j, n_i, n_j, chessArray2) {
	colorType1 = chessArray2[p_i][p_j].color;
	colorType2 = chessArray2[n_i][n_j].color;
	if (colorType1 === colorType2)
		return false;
	else
		return true;
}
function validMove(p_i, p_j, n_i, n_j, chessArray2) {
	let check;
	if (checkOponent(p_i, p_j, n_i, n_j, chessArray2)) {
		if (chessArray2[p_i][p_j].type == 'bishop') {
			// console.log("bishop is moving");
			check = checkBishopPosition(p_i, p_j, n_i, n_j);
			// console.log(check);
			// checkPosition(chessArray2[p_i][p_j].type, chessArray2[p_i][p_j].color, chessArray2);
		}
		else if (chessArray2[p_i][p_j].type == 'chess_knight') {
			// console.log("Knight is moving");
			check = checkKnightPosition(p_i, p_j, n_i, n_j);
			// console.log(check);
			// checkPosition(chessArray2[p_i][p_j].type, chessArray2[p_i][p_j].color, chessArray2);
		}
		else if (chessArray2[p_i][p_j].type == 'chess_rook') {
			// console.log("rook is moving");
			check = checkRookPosition(p_i, p_j, n_i, n_j);
			// console.log(check);
			// checkPosition(chessArray2[p_i][p_j].type, chessArray2[p_i][p_j].color, chessArray2);
		}
		else if (chessArray2[p_i][p_j].type == 'chess_king') {
			// console.log("king is moving");
			check = checkKingPosition(p_i, p_j, n_i, n_j);
			// console.log(check);
			// checkPosition(chessArray2[p_i][p_j].type, chessArray2[p_i][p_j].color, chessArray2);
		}
		else if (chessArray2[p_i][p_j].type == 'chess_queen') {
			// console.log("Queen is moving");
			check = checkQueenPosition(p_i, p_j, n_i, n_j);
			// console.log(check);
			// checkPosition(chessArray2[p_i][p_j].type, chessArray2[p_i][p_j].color, chessArray2);
		}
		else if (chessArray2[p_i][p_j].type == 'chess_pawn') {
			// console.log("Pawn is moving");
			check = checkPawnPosition(p_i, p_j, n_i, n_j, chessArray[p_i][p_j].color);
			// console.log(check);
			// console.log(chessArray2[p_i][p_j]);
			// checkPosition(chessArray2[p_i][p_j].type, chessArray2[p_i][p_j].color, chessArray2);
		}
		else {
			// console.log("else part is running");
			check = false;
		}
	}
	else {
		// console.log("Same color cannot move");
		check = false;
	}
	return check;
}
function threatElement(b_i, b_j, king, chessArray2) {
	if (chessArray2[b_i][b_j].color !== king.color && validMove(b_i, b_j, king.row_pos, king.col_pos, chessArray2)) {
		return true;
	}
	else {
		return false;
	}
}
function kingInThreat(king, k_i, k_j, chessArray2) {
	let max = 8;
	let min = 0;
	if (k_i != 0 && (k_j >= 0 && k_j < 8)) { // && (k_j>=0 && k_j<8)
		//check in top position

		for (let i = k_i - 1; i >= min; i--) {
			if ((positionBook(i, k_j)) && threatElement(i, k_j, king, chessArray2)) {
				console.log("king is in threat");
				return true;
			}
		}
		//check in top-right position 
		for (let i = k_i - 1; i >= min; i--) {
			for (let j = k_j + 1; j < max; j++) {
				if ((positionBook(i, j)) && threatElement(i, j, king, chessArray2)) {
					console.log("king is in threat");
					return true;
				}
			}
		}
	}
	if (k_j != 7 && (k_i >= 0 && k_i < 8)) { //  && (k_i>=0 && k_i<8)
		//check in right postion
		for (let j = k_j + 1; j < max; j++) {
			if ((positionBook(k_i, j)) && threatElement(k_i, j, king, chessArray2)) {
				console.log("king is in threat");
				return true;
			}
		}
		//check in right bottom
		for (let i = k_i + 1; i < max; i++) {
			for (let j = k_j + 1; j < max; j++) {
				if ((positionBook(i, j)) && threatElement(i, j, king, chessArray2)) {
					console.log("king is in threat");
					return true;
				}
			}
		}
	}
	if (k_i != 7 && (k_j >= 0 && k_j < 8)) { //  && (k_j>=0 && k_j<8)
		//check in bottom postion
		for (let i = k_i + 1; i < max; i++) {
			if ((positionBook(i, k_j)) && threatElement(i, k_j, king, chessArray2)) {
				console.log("king is in threat");
				return true;
			}
		}
		//check in left bottom
		for (let i = k_i + 1; i < max; i++) {
			for (let j = k_j - 1; j >= min; j--) {
				if ((positionBook(i, j)) && threatElement(i, j, king, chessArray2)) {
					console.log("king is in threat");
					return true;
				}
			}
		}
	}

	if (k_j != 0) { //  && (k_i>=0 && k_i<8)
		//check in left postion
		for (let j = k_j - 1; j >= min; j--) {
			if ((positionBook(k_i, j)) && threatElement(k_i, j, king, chessArray2)) {
				console.log("king is in threat");
				return true;
			}
		}
		//check in left top
		for (let i = k_i - 1; i >= min; i--) {
			for (let j = k_j - 1; j >= min; j--) {
				if ((positionBook(i, j)) && threatElement(i, j, king, chessArray2)) {
					console.log("king is in threat");
					return true;
				}
			}
		}
	}
	return false;
}
function kingPossibleMovesInThreat(king, chessArray2) {
	let k_i = king.row_pos;
	let k_j = king.col_pos;
	if (
		kingInThreat(king, k_i, k_j - 1, chessArray2) ||
		kingInThreat(king, k_i, k_j + 1, chessArray2) ||

		kingInThreat(king, k_i + 1, k_j, chessArray2) ||
		kingInThreat(king, k_i + 1, k_j + 1, chessArray2) ||
		kingInThreat(king, k_i + 1, k_j - 1, chessArray2) ||

		kingInThreat(king, k_i - 1, k_j, chessArray2) ||
		kingInThreat(king, k_i - 1, k_j - 1, chessArray2) ||
		kingInThreat(king, k_i - 1, k_j + 1, chessArray2)) {
		console.log("Next move is in threat");
		return true;
	}
	else
		return false;
}
function countSteps(count, dragElement) {
	if (count % 2 == 1 && dragElement == 'white') {
		return true;
	}
	else if (count % 2 == 0 && dragElement == 'black') {
		return true;
	}
	else {
		return false;
	}
}
function gameOver(val) {
	if (val == 0) {
		return true;
	}
	else {
		return false;
	}
}
function drop(event) {
	event.preventDefault();
	event.stopPropagation();
	chessArray = JSON.parse(localStorage.getItem('chess-board'));
	let p_i = parseInt(dragBox.getAttribute('row'));
	let p_j = parseInt(dragBox.getAttribute('col'));
	let n_i;
	let n_j;
	if (event.target.tagName == 'IMG') {
		n_i = parseInt(event.target.parentNode.getAttribute('row'));
		n_j = parseInt(event.target.parentNode.getAttribute('col'));
	}
	else {
		n_i = parseInt(event.target.getAttribute('row'));
		n_j = parseInt(event.target.getAttribute('col'));
	}
	let check = validMove(p_i, p_j, n_i, n_j, chessArray);
	// console.log(check);
	let validStep = countSteps(chessArray[8], chessArray[p_i][p_j].color);
	// validStep = true;
	let game = gameOver(chessArray[8]);
	let oldChessArray = chessArray;
	if (game) {
		alert("Please restart the game");
	}
	if (check && validStep && !game) {
		updateInLocalStorage(p_i, p_j, n_i, n_j, chessArray);
		chessArray = JSON.parse(localStorage.getItem('chess-board'));
		let kingBlack = checkPosition('chess_king', 'black', chessArray);
		if (kingBlack === undefined) {
			alert("Game over White Player Win the match");
			oldChessArray[8] = 0;
			localStorage.setItem('chess-board', JSON.stringify(oldChessArray));
			chessArray = JSON.parse(localStorage.getItem('chess-board'));
			addChessPieces(chessArray);
			return;
		}
		let kingWhite = checkPosition('chess_king', 'white', chessArray);
		if (kingWhite === undefined) {
			alert("Game over Black Player Win the match");
			oldChessArray[8] = 0;
			localStorage.setItem('chess-board', JSON.stringify(oldChessArray));
			chessArray = JSON.parse(localStorage.getItem('chess-board'));
			addChessPieces(chessArray);
			return;
		}
		if (kingInThreat(kingBlack, kingBlack.row_pos, kingBlack.col_pos, chessArray)) {
			document.getElementById('b-checkmate').style.visibility = "visible";
		}
		else {
			document.getElementById('b-checkmate').style.visibility = "hidden";
		}

		if (kingInThreat(kingWhite, kingWhite.row_pos, kingWhite.col_pos, chessArray)) {
			document.getElementById('w-checkmate').style.visibility = "visible";
		}
		else {
			document.getElementById('w-checkmate').style.visibility = "hidden";
		}

		// kingPossibleMovesInThreat(kingBlack,chessArray);
	}
}
document.getElementById('main-chess-board').addEventListener("dragstart", dragStart);
document.getElementById('main-chess-board').addEventListener("dragover", dragOver);
document.getElementById('main-chess-board').addEventListener("drop", drop);
document.getElementById('reset-btn').addEventListener("click", restore);
document.getElementById('clear-btn').addEventListener("click", clear);
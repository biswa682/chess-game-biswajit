var mainChessBoard = [];
function createBoard(){
	for(let i=0;i<8;i++){
		for(let j=0;j<8;j++){
			console.log("working");
			var inner_box = document.createElement('div');
			inner_box.className = 'inner-box';
			inner_box.draggable = true;
			document.getElementById('main-chess-board').appendChild(inner_box);
			if((i+j) % 2 ==0){
				inner_box.style.background = "black";
			}
		}
	}
}
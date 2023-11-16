
const game = () => { 
	let playerScore = 0; 
	let computerScore = 0; 
	let moves = 0; 

	const playGame = () => { 
		const rockBtn = document.querySelector('.rock'); 
		const paperBtn = document.querySelector('.paper'); 
		const scissorBtn = document.querySelector('.scissor'); 
		const playerOptions = [rockBtn,paperBtn,scissorBtn]; 
		const computerOptions = ['rock','paper','scissors'] 
		
		// code to start playing game 
		playerOptions.forEach(option => { 
			option.addEventListener('click',function(){ 

				const movesLeft = document.querySelector('.movesleft'); 
				moves++; 
				movesLeft.innerText = `Moves Left: ${10-moves}`; 
				

				const choiceNumber = Math.floor(Math.random()*3); 
				const computerChoice = computerOptions[choiceNumber]; 

				winner(this.innerText,computerChoice) 
				 
			}) 
		}) 
		
	} 

	// Function to decide winner 
	const winner = (player,computer) => { 
		const result = document.querySelector('.result'); 
		const playerScoreBoard = document.querySelector('.p-count'); 
		const computerScoreBoard = document.querySelector('.c-count'); 
		player = player.toLowerCase(); 
		computer = computer.toLowerCase(); 
		if(player === computer){ 
			result.textContent = 'Tie'
		} 
		else if(player == 'rock'){ 
			if(computer == 'paper'){ 
				result.textContent = 'You Lose! Paper beats Rock'; 
				computerScore++; 
				computerScoreBoard.textContent = computerScore; 

			}else{ 
				result.textContent = 'Player Won'
				playerScore++; 
				playerScoreBoard.textContent = playerScore; 
			} 
		} 
		else if(player == 'scissors'){ 
			if(computer == 'rock'){ 
				result.textContent = 'You Lose! rock beats Scissors'; 
				computerScore++; 
				computerScoreBoard.textContent = computerScore; 
			}else{ 
				result.textContent = 'Player Won'; 
				playerScore++; 
				playerScoreBoard.textContent = playerScore; 
			} 
		} 
		else if(player == 'paper'){ 
			if(computer == 'scissors'){ 
				result.textContent = 'You Lose! Scissors beats paper'; 
				computerScore++; 
				computerScoreBoard.textContent = computerScore; 
			}else{ 
				result.textContent = 'Player Won'; 
				playerScore++; 
				playerScoreBoard.textContent = playerScore; 
			} 
		} 
	} 
 
	playGame(); 
	
}  
game();

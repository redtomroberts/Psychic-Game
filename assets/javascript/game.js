
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

document.onkeyup = function(event) {

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
		 	

	if (options.indexOf(userGuess) > -1) {
        if (userGuess === computerGuess) {
            wins ++;
            /* solution for adding audio to the alert event take from user 'MixedCoded' on https://stackoverflow.com/questions/21815323/have-sound-play-when-alert-is-triggered*/
            document.getElementById('cheer').play();
            document.getElementById('ta-da').play();
            alert('That is correct.');
			numGuesses = 9;
			guessChoices = [];
		}
        if (userGuess != computerGuess) {
			numGuesses --;
			guessChoices.push(userGuess);
		}
        if (numGuesses === 0) {
            numGuesses = 9;
            losses ++;
            /* solution for adding audio to the alert event take from user 'MixedCoded' on https://stackoverflow.com/questions/21815323/have-sound-play-when-alert-is-triggered*/
            document.getElementById('hurt').play();
            document.getElementById('sad').play();
            alert("You have failed to guess the correct letter.")
		    guessChoices = [];
		}

        var html = 
			'<h1>GUESS YOUR FATE</h1>' +
			'<h2><p>Guess the letter that HAL 9000 is thinking of!</p></h2>' +
			'<h3><p>Wins: ' + wins + '</p></h3>' +
			'<h3><p>Losses: ' + losses + '</p></h3>' +
			'<h3><p>Guesses Left: ' + numGuesses + '</p></h3>' +
            '<h3><p>Your Guesses so far: </p></h3>' +
            '<h3><p>[ ' + guessChoices.join(', ') + ' ]</p></h3>'
            

		document.querySelector('#game').innerHTML = html;
        }
	};
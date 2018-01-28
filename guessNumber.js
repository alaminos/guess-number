// things to fix:
/*


- if no number is entered, message: enter a number in the input field below
- bigger input field
-arreglar lo del salto de linea
- print update tries left
- fix line 82 and isNaN in line


*/

var guessTheNumber = {
    
    //initialize secret number
    secretNumber: 0,

    //initialize user's guess
    userGuess: 0,

    //counter for the number of tries
    triesLeft: 4,

    // getting a random number up to 1000 inclusive
    getRandomNumber: function() {
        this.secretNumber = Math.floor(Math.random() * 11);
        //view.printInNumber(this.secretNumber); prints number in a box
    },

    // start game
    startGame: function() {
        this.getRandomNumber();
    },

    //is it right?
    isRight: function(userInput) {
        view.clearInputField();
        if (isNaN(userInput)) { 
            view.numbersOnly();
        } else {
            this.triesLeft --;
            view.guessesLog(userInput);
            view.triesLeftUpdate();
            if (userInput === this.secretNumber) {
            view.youWin();
            view.isVisible("userInputForm", "none");
            view.isVisible("startGameBtn", "block");
            } else {
                if (this.triesLeft > 0) { //if guess is wrong, first we check if the user ran out of tries
                    this.someFeedback(userInput); //if user is still alive, we offer her some feedback
                } else {
                    view.gameOver(); //otherwise: gameOver
                    view.isVisible("userInputForm", "none");
                    view.isVisible("startGameBtn", "block");
                };
            }
        }
    },

    //response to user after a wrong guess
    someFeedback: function(wrongGuess) {
        if (wrongGuess > this.secretNumber) {
            view.wrongGuess("smaller than ", wrongGuess);
        } else { 
            view.wrongGuess("larger than ", wrongGuess);
        }
    }

};


var handlers = {
    startGame: function() {
        guessTheNumber.triesLeft = 4;
        guessTheNumber.getRandomNumber();
        view.welcome();
        view.isVisible("userInputForm", "flex");
        view.isVisible("startGameBtn", "none");
        view.triesLeftUpdate();
    },

    newGuess: function() {
        var newGuess = document.getElementById("guessInput").valueAsNumber;
         //this call should go AFTER user input has been checked to be a number
        guessTheNumber.isRight(newGuess);
        return false;
    }
};


var view = {

    infoPanel: document.getElementById("infoPanel"),

    welcome: function() {
        //var welcomeMessage = document.getElementById("infoPanel");
        this.infoPanel.textContent = "Hi, I have a number between 0 and 10 (both included). You have 4 tries to guess the number. ";
        var triesPanel = document.getElementById("triesPanel");
        triesPanel.textContent = "";
    },

    isVisible: function(element, display) {
        var visibility = document.getElementById(element);
        visibility.style.display = display;
    },

    wrongGuess: function(clue, wrongGuess) {
        //var message = document.getElementById("infoPanel");
        this.infoPanel.textContent = "Sorry, the secret number is " + clue + wrongGuess + ". Please try again. "; //solucionar saltos de línea
    },

    numbersOnly: function() {
        this.infoPanel.textContent = "You did not enter a number. Try again champion";
    },

    gameOver: function() {
        //var gameOverMessage = document.getElementById("infoPanel");
        this.infoPanel.textContent = "You ran out of tries. GAME OVER."
    },

    youWin: function() {
        //var youwinMessage = document.getElementById("infoPanel");
        this.infoPanel.textContent = "YOU WIN! Congratulations for such an absolutely useless waste of precious time.";
    },

    clearInputField: function() {
        var guessInput = document.getElementById("guessInput");
        guessInput.value = "";
    },

    guessesLog: function(newGuess) {
        var triesPanel = document.getElementById("triesPanel");
        triesPanel.textContent += " " + newGuess + " ";

    },

    triesLeftUpdate: function() {
        var triesLeftPanel = document.getElementById("triesLeftPanel");
        triesLeftPanel.textContent = guessTheNumber.triesLeft;
    }

};












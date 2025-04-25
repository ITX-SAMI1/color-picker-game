// List of color choices
var colors = ['red', 'green', 'blue', 'yellow'];

// Track the hidden color and score
var hiddenColor = '';
var score = 0;

// This function shuffles the color array
function shuffleColors(array) {
  return array.sort(function () {
    return Math.random() - 0.5;
  });
}

// This function starts a new round
function newRound() {
  var container = document.getElementById('color-container');
  container.innerHTML = ''; // clear old boxes

  document.getElementById('message').textContent = '';

  var shuffled = shuffleColors(colors);
  hiddenColor = shuffled[Math.floor(Math.random() * shuffled.length)];

  for (var i = 0; i < shuffled.length; i++) {
    var color = shuffled[i];
    var box = document.createElement('div');
    box.className = 'color-box';
    box.style.backgroundColor = color;

    // Check if user's guess is correct
    box.onclick = function () {
      if (this.style.backgroundColor === hiddenColor) {
        score++;
        document.getElementById('message').textContent = '✅ Correct!';
      } else {
        score = 0;
        document.getElementById('message').textContent = '❌ Wrong!';
      }

      document.getElementById('score').textContent = 'Score: ' + score;
      setTimeout(newRound, 1000);
    };

    container.appendChild(box);
  }
}

// Start the game
newRound();

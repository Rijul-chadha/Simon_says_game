# Simon Says Game

## Introduction

The **Simon Says Game** is a classic memory-based game where players must replicate a sequence of colors in the correct order. Each level adds a new color to the sequence, testing the player's ability to remember and reproduce the pattern. This implementation is built using **HTML**, **CSS**, and **JavaScript**, with a dynamic and interactive interface.

---

## Features

- **Dynamic Leveling System**: Each level increases the sequence length by one, progressively challenging the player.
- **User Interaction**: Players can interact with the game using their keyboard to start and mouse clicks to input the sequence.
- **Feedback System**: Visual and textual feedback is provided to guide and inform players:
  - Flashing buttons to indicate the sequence.
  - Red screen and "Game Over" message for incorrect inputs.
  - Real-time level display to track progress.
- **Automatic Reset**: The game resets upon failure, allowing players to restart easily.

---

## Gameplay Instructions

1. **Start the Game**:
   - Press any key to start the game. The game will begin at **Level 1**.
   - A random color will flash, indicating the first sequence.

2. **Replicate the Sequence**:
   - Click on the buttons corresponding to the flashing sequence.
   - Each correct input progresses the game. A new color is added to the sequence at each level.

3. **Feedback**:
   - If the input is correct, the game moves to the next level.
   - If the input is incorrect, the game ends with a **Game Over** message and the screen flashes red.

4. **Restart**:
   - Press any key to reset the game and start over.

---

## How It Works

### Core Components

1. **Game Sequence**:
   - The game generates a random sequence of colors stored in the `gameSeq` array.
   - Each level appends a new random color to this sequence.

2. **User Sequence**:
   - The user's inputs are recorded in the `userSeq` array.
   - The game checks the user’s input against the `gameSeq` after each button press.

3. **Level Progression**:
   - The `Levelup` function clears the user's sequence, increments the level, and adds a new color to the game sequence.
   - The current level is displayed on the screen.

4. **Answer Checking**:
   - The `checkAns` function compares the user's input to the corresponding color in the game sequence.
   - If the input is correct and the sequence matches completely, the game progresses to the next level.
   - If the input is incorrect, the game ends, displaying the score and resetting the game.

5. **Visual Effects**:
   - Buttons flash with different styles for the game sequence (`gameFlash`) and user interaction (`userflash`).

### Event Listeners

- **Keypress Listener**: Starts the game when a key is pressed for the first time.
- **Button Click Listener**: Captures the user’s input and checks it against the game sequence.

### Reset Mechanism

The `reset` function restores the game to its initial state by clearing the sequences, resetting the level, and allowing the user to restart from Level 1.

---

## Code Highlights

- **Dynamic Sequence Generation**:  
  The game uses `Math.random()` to select a random color from the array of available buttons.

- **User Feedback**:  
  Feedback is provided visually through button flashes and textual updates using DOM manipulation (`document.querySelector`).

- **Error Handling**:  
  Incorrect inputs trigger a "Game Over" message and a temporary red background, ensuring an engaging user experience.

---

## Future Improvements

Here are some potential enhancements for the game:

- **Sound Effects**: Add sound cues for each button press and sequence flash.
- **High Score Tracking**: Save the highest level reached by the player in local storage.
- **Mobile Responsiveness**: Optimize the game for mobile devices.
- **Advanced Levels**: Introduce speed increases or additional buttons as the levels progress.

---

## Technologies Used

- **HTML**: For the game structure.
- **CSS**: For styling and visual feedback effects.
- **JavaScript**: For game logic, user interaction, and DOM manipulation.

---

## How to Play Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/simon-says-game.git

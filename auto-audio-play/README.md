# Auto audio play after countdown

## Description
Play the audio after a countdown

## About
An experiment to play audio automatically after a countdown.
The issue was that on most browsers, the audio cannot be played automatically as it requires user interaction.
As the original project had a timer that was initiated on user click, the solution was to start the audio when the user clicks on the "start timer" button and then immediately pause it.  Once the timer reaches 0 the code can then start the audio automatically.

[Codepen Demo](http://127.0.0.1:5502/auto-audio-play/index.html)
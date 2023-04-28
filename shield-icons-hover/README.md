# Badge hover

## Description
Added hover state to shield.io badges via JavaScript

## About
The badge images are created dynamically by shield.io according to variables that are passed to them.
However, as far as I am aware, they do not offer the ability to create a hover state.
This JavaScript code adds a hover state, which is basically an alternative image source, by reading 2 custom attributes that I have added to each icon.
The attributes required are:
- "hover-clr" : the background color for the badge
- "hover-bg" : the icon color

Note - I believe that shield.io is automatically defining the text color to contrast with the background color. I have not been able to alter this.

## Sources
- Badges by [shields.io](https://shields.io/)
- Shield.io uses the icons from  [simpleicons.org](https://simpleicons.org) which I also used to get the correct logo colors.
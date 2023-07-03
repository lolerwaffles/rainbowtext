# rainbowText 

A JavaScript function to color a string with a rainbow gradient and add it to the body of the HTML document. 

## Installation

```bash
npm install rainbow-text
```
## Usage

rainbowText(text, saturation, lightness, repetitionsPerString);

### Parameters
* text (required): The string you want to color with the rainbow gradient.
* saturation (optional, default = 100): The saturation of the colors in the rainbow gradient. It's a percentage, and 100% is the full color.
* lightness (optional, default = 50): The lightness of the colors in the rainbow gradient. It's a percentage; 0% is black, 100% is white.
* repetitionsPerString (optional, default = 1): The number of times the gradient should restart across the string.

### Example

rainbowText("Hello, world!", 100, 50, 2);

This will add the text "Hello, world!" to the body of your HTML document. The text will be colored with a rainbow gradient that repeats twice across the string.
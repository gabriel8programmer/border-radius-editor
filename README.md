# Border Radius Editor

This project was created for learning purposes and consists of a simple border radius editor, allowing the editing of the four borders of a div identified by the id '#box'.

## Features

- Edit the div borders using sliders.
- Copy the border values to the clipboard.

## Used Resources

- **navigator.clipboard.writeText("text")**: This command allows copying text to the clipboard, facilitating the copying of border values.

- **getComputedStyle(element)** and **getPropertyValue('CssProperty')**: These commands are used to obtain the string value of a CSS property. In this project, they are used to get the computed styles of the div and extract the border values.

## How to Use

1. Open the HTML file in your browser.
2. Use the sliders to adjust the div border values.
3. If you wish to copy the border values, click the "Copy Values" button to copy them to the clipboard.



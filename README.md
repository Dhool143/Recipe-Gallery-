React Recipe Gallery

 Overview

This project is an interactive recipe gallery built using React. It demonstrates how to use the useState hook to manage dynamic content and respond to user actions.

Users can navigate through a list of images using “Next” and “Previous” buttons. The application ensures proper boundary handling so users cannot go beyond the first or last image.


Features

* Display images with descriptions
* Navigate using Next and Previous buttons
* Prevent navigation beyond limits (boundary check)
* Show current image position (e.g., 1 of 5)
* Display messages for first and last images


Technologies Used

* React
* JavaScript (ES6)
* CSS


Project Structure

src/

* Gallery.jsx
* App.jsx
* main.jsx
* index.css


How It Works

* The useState hook is used to track the current image index.
* Clicking “Next” or “Previous” updates the index.
* Math.min and Math.max are used to prevent going out of bounds.
* Conditional rendering is used to display messages for the first and last images.



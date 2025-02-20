# Ideal Destination

The ideal destination quiz suggests the perfect getaway for you based on your answers. Users answer a selection of questions and are finally introduced the the ideal destination package for a dream holiday.

The site is aimed at users of all ages for a fun experience to help identify a perfect vacation scenario based on popular holiday destinations.

[View the site from here.](https://chandni-l5.github.io/ideal-destination/)

//responsive mock-up//

## 1. User Experience

The purpose of this website is to provide a fun and interactive quiz that helps the user determine their ideal travel destination based on their preferences. Based on the responses, it suggests a destination, type of accommodation and exciting activity.

### 1.1 User Goals

- To be able to view the site on a range of devices.
- An easy-to-use format to proceed through the quiz.
- Bright and engaging imagery without compromising visibility of the written content.
- Ability to restart the quiz
- Ability to feedback on future destination suggestions
- Ability to clearly identify which option you have clicked on, and change selection before moving to the next question

## 2. Design

### 2.1 Imagery

The colour scheme chosen to apply to this project has been determined on the background image. The ai image has been sourced through [chatgpt.com](https://chatgpt.com/). A request for an image of an airplane in the bright blue sky with clouds was entered and various images were provided. I selected the chose background as it was a clear and uncluttered image, the colours used are uniform and it was suitable to be used as a background.

The opacity of the image was altered using [befunky.com](https://www.befunky.com/dashboard/).

The ai images used on the results pages have also been sourced from [chatgpt.com](https://chatgpt.com/). The images are based on three themes;
general, accommodation and activity. I have entered a variety of descriptions into the search box and chosen the most appealing images.

![background image for the index page](/documentation/2.2-imagery.webp)

### 2.2 Colour Scheme

![Colour palette of the colours applied](/documentation/color-palette.webp)

The colour scheme applied has been selected based on the tones of the background image. In order the standout against the blue tones the darker colours have a green/blue hue. The opacity of the white sections which contain text has been altered to overlay over the background without creating a harsh delineation.

### 2.3 Wireframes

I used Balsamiq to create wireframes to help me visualize the layout of the site. Wireframes for mobile, tablet and desktop were created.

![Balsamiq Wireframes image 1](/documentation/wireframe-1.webp)
![Balsamiq Wireframes image 2](/documentation/wireframe-2.webp)

## 3. Features

The website consists of four different pages. The main page contains the introduction and quiz section. Once the finish button is selected at the end of the quiz the user is navigated to another page based on their results of the selections made when completing the quiz.

When the index page initially loads, only the page heading, a section contain an introductory message and a start button.
![Screenshot of the intro message](/documentation/intro-screenshot.webp)

Once the start button is selected, the previous section is hidden and a new section is displayed which is the main quiz section. The first question is displayed with three selectable options displayed below. In addition there is another button which allows the user to move the the next question.

Feedback is provided to the user by the interactivity on the quiz section. When the options are hovered over there is an effect and once an option is selected this effect is applied to allow the selection to standout from the other options.

The 'Next Question' button is disabled until a selection is made and the user can only move forward to the next question once a selection has been made. In addition the cursor becomes a pointer when hovering over anything selectable on the page.

Once you reach the final question the 'Next Question' button changes to the 'Finish' button.

![Screenshot of the first question and options](/documentation/quizbox-screenshot.webp) ![Screenshot of the last Question with Finish Button](/documentation/finishbutton.webp)

After the last question is answered and 'Finish' is selected, the user is navigated to a different html page which contains the result of the quiz. The Javascript in the background calculates which option has been selected most frequently to provide a result. In the event of a tie the result is randomized between the two most popular options selected.

An additional effect is applied once the result page is loaded to celebrate the result. The confetti function has been customized to throw out themed emoji's based on the winning destination. 

![gif of kenya.html](/documentation/kenya-gif.gif)
![gif of japan.html](/documentation/japan-gif.gif)
![gif of barbados.html](/documentation/barbados-gif.gif)

All of the pages other than that primary introductory section contain a restart button which navigate back to the very start.

## 4. Technologies Used

### 4.1 Languages Used

- HTML 
- CSS
- JavaScript

### 4.2 Frameworks, Libraries & Programs Used

- Balsamiq - to create wireframes
- [Github](https://github.com/) - For version control and deployment
- VS Code - used as the code editor and save files
- [Google Fonts](https://fonts.google.com/) - to implement the fonts used in the site
- [Font Awesome](https://fontawesome.com/) - for the start icon
- Chrome dev tools - To test and troubleshoot various features and also test responsiveness of the pages.
- [ChatGPT](https://chatgpt.com/) - to create the text and ai images which have been implemented on the results pages, and to help identify and trouble shoot the format and wording of the Javascript functions. 
- [JavaScript compiler](https://pythontutor.com/javascript.html#mode=edit) - to test the JavaScript code and functions before applying to script.js
- [mdn](https://developer.mozilla.org/en-US/) - to research how to apply and implement JavaScript code and what tools would be ideal to be implemented in this project. 
- [javascript.info](https://javascript.info/dom-nodes) - to research further into JavaScript and how to apply
- [npmjs.com](https://www.npmjs.com/package/js-confetti) and [Youtube tutorial to add confetti with JavaScript](https://www.youtube.com/watch?v=tTIaA1Xmzmg) - to learn how to implement the confetti effect
- [Youtube tutorial](https://www.youtube.com/watch?v=Vp8x8-reqZA) - use for inspiration of how to structure a quiz using all three types of languages
- [befunky.com](https://www.befunky.com/dashboard/) - to edit and resize the images used in the site
- [Free Convert](https://www.freeconvert.com/jpg-to-webp) - to convert images to different file types
- [Favicon.io](https://favicon.io/emoji-favicons/) - to create an emoji favicon
-[Amiresponsive](https://ui.dev/amiresponsive) - to show the website on a range of device screens

## 5. Deployment & Local Development

The website is deployed using GitHub Pages. To Deploy the site using GitHub Pages:

1. Login (or signup) to GitHub.
2. Go to the repository for this project - [Ideal Destination](https://chandni-l5.github.io/ideal-destination/)
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select 'Deploy from a branch' and in the branch dropdown select 'main' and press save.
6. The site has now been deployed.
7. When returning to the code page in the repository a Deployments section will appear in the right side column - this process may take a few minutes before the site goes live. The deployed sight can be accessed via this link.

## 6. Testing

### 6.1 Testing User Stories

### 6.2 Accessibility

### 6.3 Fixing Bugs

### 6.4 Manual Testing

### 6.5 Lighthouse

### 6.6 Validation

#### 6.6.1 W3C HTML and CSS

#### 6.6.2 Autoprefixer CSS

#### 6.6.3 JS jshint

## 7. Credits

### 7.1 Code Used
- [Youtube tutorial to add confetti with JavaScript](https://www.youtube.com/watch?v=tTIaA1Xmzmg) - referred to in 4.2
- [CodeHal Youtube tutorial](https://www.youtube.com/watch?v=Vp8x8-reqZA) - referred to in 4.2

### 7.2 Content
- [chatgpt.com](https://chatgpt.com/)- referred to in 4.2

### 7.3 Media
- [befunky.com](https://www.befunky.com/dashboard/)- referred to in 4.2
- [coolers.co](https://coolors.co/)- to create the colour palette displayed in 2.2
- [npmjs.com](https://www.npmjs.com/package/js-confetti) - referred to in 4.2
- [Free Convert](https://www.freeconvert.com/jpg-to-webp) - - referred to in 4.2
- [Favicon.io](https://favicon.io/emoji-favicons/) - referred to in 4.2

### 7.4 Documentation and Testing
I have used the following sources to help guide and structure the documentation of this project.
- [JavaScript compiler](https://pythontutor.com/javascript.html#mode=edit) - to test the JavaScript code and functions before applying to script.js
- [chatgpt.com](https://chatgpt.com/)
- [The love running readme template](https://github.com/Code-Institute-Solutions/readme-template?tab=readme-ov-file) 
- [A markdown cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#tables)
- [Kera Cudmore's readme template](https://github.com/kera-cudmore/readme-examples/blob/main/milestone1-readme.md) - shared on slack
- [Diffchecker](https://www.diffchecker.com/)
- [W3C](https://validator.w3.org/)
-[Autoprefixer](https://autoprefixer.github.io/)
- [Gyazo](https://gyazo.com/en) plugin- to create gifs to use in the testing documentation
- [WebAIM](https://webaim.org/resources/contrastchecker/) - consider the accessibility and contrast
- [Accessibility Checker](https://www.accessibilitychecker.org/audit/?website=https%3A%2F%2Fchandni-l5.github.io%2Fideal-destination%2F&flag=uk) - to test the accessibility of the site.
- [Amiresponsive](https://ui.dev/amiresponsive) - to show the website on a range of device screens


### 7.5 Acknowledgements
I would like to acknowledge the following people who have helped me along the way in completion of this project. 

- - Moritz Wach - my Code Institute Mentor who made himself available when I needed support and provided excellent feedback to improve the functionality of my site. 
 - LanaD_5P and Ivan Kimpl - fellow students who supported me throughout this project and provided encouragement and advice. 
 - Tom, Prash, Suraj, Anj and Nik - family and friends who helped to test out the site on various devices. 

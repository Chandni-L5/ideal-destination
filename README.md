# Ideal Destination

The ideal destination quiz suggests the perfect getaway for you based on your answers. Users answer a selection of questions and are finally introduced the the ideal destination package for a dream holiday.

[View the site from here.](https://chandni-l5.github.io/ideal-destination/)

![screenshot to display the responsiveness of the site](/documentation/responsive.webp)

## 1. User Experience

The purpose of this website is to provide a fun and interactive quiz that helps the user determine their ideal travel destination based on their preferences. Based on the responses, it suggests a destination, type of accommodation and exciting activity.

The site is aimed at users of all ages for a fun experience to help identify a perfect vacation scenario based on popular holiday destinations.

### 1.1 User Stories

#### Client Goals
- To be able to view the site on a range of devices.
- An easy-to-use format to proceed through the quiz.
- Ability to clearly identify which option you have clicked on, and change selection before moving to the next question

#### Returning Client Goals
- Bright and engaging imagery without compromising visibility of the written content.
- Ability to restart the quiz
- Ability to feedback on future destination suggestions

I have utilized the Projects function on my repository to keep track of the user stories that apply to this site. The user stories are recorded along with the acceptance criteria and tasks required to meet this goal. The stories are organized into sections of progress and allow me to keep track of where I am at throughout the development process.

![screenshot of user stories](/documentation/user-stories.webp)

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

When the index page initially loads, only the page heading, a section contain an introductory message and a start button are displayed.

![Screenshot of the intro message](/documentation/intro-screenshot.webp)

Once the start button is selected, the intro section is hidden and a new section is displayed which is the main quiz section. The first question is displayed with three selectable options displayed below. In addition there is another button which allows the user to move the the next question. The next button is disabled until an option is selected. When the user hovers over or tries to select the next button a tooltip pops up to feedback to the user that an option must be selected first. In addition the cursor displays a no entry symbol. When an option is selected the next button becomes active and no longer displays a tooltip. In addition the cursor becomes a pointer to indicate the button is active.

![image of the tooltip alert when the next button is disabled](/documentation/alert-tooltip.webp)
![GIF of the hover effect](/documentation/hover.gif)

Additional feedback is provided to the user by the interactivity on the quiz section. When the options are hovered over there is an effect and once an option is selected this effect is applied to allow the selection to standout from the other options.

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
- [Amiresponsive](https://ui.dev/amiresponsive) - to show the website on a range of device screens

## 5. Deployment & Local Development

The website is deployed using GitHub Pages. To Deploy the site using GitHub Pages:

1. Login (or signup) to GitHub.
2. Go to the repository for this project - [Ideal Destination](https://chandni-l5.github.io/ideal-destination/)
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select 'Deploy from a branch' and in the branch dropdown select 'main' and press save.
6. The site has now been deployed.
7. When returning to the code page in the repository a Deployments section will appear in the right side column - this process may take a few minutes before the site goes live. The deployed sight can be accessed via this link.

## 6. Testing and Bug Fixing

### 6.1 Testing User Stories

#### Client Goals
##### Goal: To be able to view the site on a range of devices.
Result- ✔ - The site is responsive on a number of browsers and devices.
##### Goal: An easy-to-use format to proceed through the quiz.
Result- ✔ - simple and clear format of how to step through each section and complete the quiz.
##### Goal: Ability to clearly identify which option you have clicked on, and change selection before moving to the next question
Result- ✔ - the selected option is highlighted and the option even expands subtly to clearly showcase the selection. The user also has the ability to change their selection before moving the the next question. 

#### Returning Client Goals
##### Goal: Bright and engaging imagery without compromising visibility of the written content.
Result- ✔ - The site includes relevant images, following a similar colour theme and is bright and engaging. 

##### Goal: Ability to restart the quiz 
Result- ✔ - A clear and obvious restart button is visible throughout the quiz and also on the final result page which navigates the user back to the start. 

##### Goal: Ability to feedback on future destination suggestions
Result- ✘ - Due to time constraints I was unable to include a feedback function however on future implementations this is something that I would consider to include.

### 6.2 Accessibility
During the designing and styling process of the website, I have kept in mind to aim to make the page as user friendly and accessible as possible. I have achieved this by:

Semantic HTML -Use of descriptive alt attributes on the images used throughout the site. -I have checked the colour scheme used on the page using [WebAIM](https://webaim.org/resources/contrastchecker/) to check the colour contrast.

I have also used the chrome extension Web Disability Simulator to also consider the visuals of the page and contrast between the content for users with visual impairments.

A google font has been used on the site however I have also applied Sans-Serif as a font alternative.

Finally, as displayed in the Lighthouse testing in section 6.5 below, the scores of accessibility are at 100% on all pages of the site.

### 6.3 Fixing Bugs

A number of issues have occurred during the development process of the site. 

#### Hiding and showing sections when required 
When I initially planned the quiz I wanted the introduction section to appear initially and then once the quiz starts the intro section would be hidden and the quiz section would appear. I was unsure of how to make this process occur and so I carried out some research to try and learn how to create this functionality. 

 Initially I followed [CodeHal Youtube tutorial](https://www.youtube.com/watch?v=Vp8x8-reqZA), by creating 2 sections of the index page and swapping out sides of the page when required using CSS. 
 
 However when testing the responsiveness of the site it became evident that this was creating issues with the layout of the background and creating additional white space. In addition when trying to add buttons on the page it was difficult to position due to these settings. I discussed this issue with my mentor Moritz and we identified that the issue was created by the split of the page. 

 Instead he advised to used the hidden styling and create a JavaScript function to hide and display the relevant sections at the relevant time. This was implemented using the query selector and adding an id to the relevant sections. This effectively allowed the site to function as I initially planned. 

 #### Page Loading and Unused JS 
 The JavaScript used on the index page and the JavaScript used on the results page run completely independently. When initially starting the projecting, all of the JS script was on a single page, however this created some issues with functionality and loading speed. 

 As the separate pages used the JS independently, it was not necessary for it all to be contained in a single js file and so two separate js files were created and the relevant one is linked on the relevant html page. This helped to improve the page load speed and functionality of the site. 

 #### Disabling the next/final button and tooltip
 I decided to add steps within the quiz to disable to next and finish button until an answer/option has been selected. This is because the initial functionality allowed the user to skip a question and this would affect the final result and not provide an accurate result. 

 I initially set the button to inactive using CSS. Then I created a JS function to make the button active once an option has been selected. To build on this I also added a cursor pointer to show a no entry symbol when the button is disabled and to change to a pointer once an option has been selected. This is to indicate when the button is available for use. 

 On reflection although the cursor pointers provide an element of feedback to the user as to when the button functionality is active, I felt that some more clear guidance was required. I decided to add a tooltip function so that when the button is selected or hovered over without an option selected the tooltip alert would appear and alert the user that they need to make an option selection first. I used JS code to ensure that this alert is only visible when an option has not been selected.
 ![gif of the hover effect showing the tooltip and no entry pointer](/documentation/hover.gif)

 #### Creating the calculation to randomize the result in the event of a tie.
 After I created the calculation to push the relevant html page based on the results of the quiz, I identified that I needed a function to run in the event that there was a tie in the answers. I used the material from the JavaScript Data Types Modules to understand what features I might need to use however I struggled to create anything myself. 

 I reached out to other students in slack to see if anyone could make any suggestions of how this functionality could be achieved however was unable to get an answer through this format. I studied slack overflow and MDN webdocs and attempted various formats to implement this function. Finally i entered the initial calculation in chatGPT and requested it to consider additional calculations to help randomize a result. This helped me to create the specific calculation to randomize a result. 

 ![screenshot of the section of JS displaying the calculation](/documentation/random-calculation.png)

### 6.4 Manual Testing
Full testing has been completed on the following devices: 
* Laptop: Macbook Air M3 2024
* Mobile: Iphone 15

The browsers used to test the site include: 
* Google Chrome
* Safari
* Mozilla Firefox

![table showing manual testing](/documentation/manual-testing.png)

All of the manual testing yielded a positive result. During the development process, manual testing was ongoing, especially whilst building the JavaScript code as it was essential to ensure the functions being applied were working correctly and as expected. Chrome dev tools was used in this process, particularly the Console tool to identify any errors that were occurring in JavaScript and also using the AI assistance to identify how to resolve the issue.

The site was also tested by numerous friends and family members who confirmed that the site was functioning as expected and they had a positive experience. 

### 6.5 Lighthouse

Please select this [link](lighthouse.md) to view screenshots of the lighthouse analysis.

The main issues identified across the site were in relation to the speed at which the page and content loads and issues with cumulative layout shifts and image sizing. I implemented some changes by preloading some of the external content as the page loads and adding a height to the `<img>` tag in CSS.

On checking the site through lighthouse after the changes were made, this improved the scores greatly.

### 6.6 Validation

#### 6.6.1 W3C HTML and CSS

[W3C](https://validator.w3.org/) validator has been used to check the HTML on each of the pages of the website and the css stylesheet.

##### HTML - [index.html](index.html)

![screenshot of html validator results for the index page](/documentation/html-val-index.webp)

The initial check highlighted a few issues with the code. These issues have now been addressed and all of the html code on the homepage has successfully passed the html validation.
![screenshot of final html validator results](/documentation/html-val-index-2.webp)

##### HTML - [japan.html](japan.html)

![screenshot of html validator results for the japan page](/documentation/html-val-japan.webp)

The initial check highlighted a few issues with the code. These issues have now been addressed and all of the html code on the Japan result page has successfully passed the html validation.
![screenshot of final html validator results](/documentation/html-val-index-2.webp)

##### HTML - [kenya.html](kenya.html)

![screenshot of html validator results for the kenya page](/documentation/html-val-kenya.webp)

The initial check highlighted a few issues with the code. These issues have now been addressed and all of the html code on the Kenya result page has successfully passed the html validation.
![screenshot of final html validator results](/documentation/html-val-index-2.webp)

##### HTML - [barbados.html](barbados.html)

![screenshot of final html validator results](/documentation/html-val-index-2.webp)

The initial check did not highlight any issues with the code on the Barbados result page.

##### CSS Stylesheet

Please view this [link](http://jigsaw.w3.org/css-validator/validator?lang=en&profile=css3svg&uri=https%3A%2F%2Fchandni-l5.github.io%2Fideal-destination%2F&usermedium=all&vextwarning=&warning=1) to see the results of the CSS validation which has passed checks. Although there are 2 warning messages shown no further action is required as these are related to shortfalls of certain browsers.

#### 6.6.2 Autoprefixer CSS

I have used [Autoprefixer](https://autoprefixer.githib.io) to add vendor prefixes to the CSS.

#### 6.6.3 JS jshint

The JavaScript code has been validated through [Jshint](https://jshint.com/). Both script sheets have been checked and no amendment is required. The second script does identify an undefined variable however the confetti effect used on the result pages has been implemented through a JS library and so the variable defined is linked on the html page before the closing tag for `</body>` on the result html pages.

![result of running script.js through JShint](/documentation/jshint-js.webp)
![result of running script2.js through Jshint](/documentation/jshint-js2.webp)

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
- [W3C](https://validator.w3.org/) -[Autoprefixer](https://autoprefixer.github.io/)
- [Gyazo](https://gyazo.com/en) plugin- to create gifs to use in the testing documentation
- [WebAIM](https://webaim.org/resources/contrastchecker/) - consider the accessibility and contrast
- [Accessibility Checker](https://www.accessibilitychecker.org/audit/?website=https%3A%2F%2Fchandni-l5.github.io%2Fideal-destination%2F&flag=uk) - to test the accessibility of the site.
- [Amiresponsive](https://ui.dev/amiresponsive) - to show the website on a range of device screens

### 7.5 Acknowledgements

I would like to acknowledge the following people who have helped me along the way in completion of this project.

- Moritz Wach - my Code Institute Mentor who made himself available when I needed support and provided excellent feedback to improve the functionality of my site.
- LanaD_5P and Ivan Kimpl - fellow students who supported me throughout this project and provided encouragement and advice.
- Tom, Prash, Suraj, Anj and Nik - family and friends who helped to test out the site on various devices.
- Spencer_ci, Kera_Hackteam, Martin_alumni and Niclas_lead_Banana_code_Alumnus - who provided support and assistance on slack.

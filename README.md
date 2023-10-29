# Quiz Night Trivia Quiz

Visit the live website [here!](https://tonichab.github.io/Trivia-Quiz/)

Quiz Night is an online trivia quiz for users wanting to have fun with friends testing their general knowledge. The objective is to try and answer multiple choice questions correctly

![responsive website example image] ()

---

## Contents

- [Quiz Night Trivia Quiz](#quiz-night-trivia-quiz)
  - [Contents](#contents)
  - [User Experience](#user-experience)
    - [Target Audience](#target-audience)
    - [User Expectations](#user-expectations)
    - [User Stories](#user-stories)
  - [Design](#design)
    - [Wireframes](#wireframes)
    - [Colour Palette](#colour-palette)
    - [Typography](#typography)
  - [Back to Contents](#back-to-contents)
  - [Features and Functionality](#features-and-functionality)
    - [Start Page](#start-page)
    - [Main Quiz Page](#main-quiz-page)
    - [End Page](#end-page)
  - [Back to Contents](#back-to-contents-1)
  - [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
  - [Back to Contents](#back-to-contents-2)
  - [Deployment and Local Development](#deployment-and-local-development)
    - [Deployment](#deployment)
    - [Local Development](#local-development)
      - [How to Fork](#how-to-fork)
      - [How to Clone](#how-to-clone)
  - [Back to Contents](#back-to-contents-3)
  - [Testing](#testing)
    - [Validators](#validators)
      - [HTML](#html)
      - [CSS](#css)
      - [JS Hint](#js-hint)
      - [Lighthouse](#lighthouse)
      - [WebAim](#webaim)
    - [Bug Fixes](#bug-fixes)
  - [Back to Contents](#back-to-contents-4)
  - [Credits](#credits)
    - [Code Used](#code-used)
    - [Content](#content)
    - [Media](#media)
    - [Acknowledgements](#acknowledgements)

---

## User Experience

### Target Audience

This site is targeted for webusers everywhere who want to test their general knowledge. It can be used by single users testing their knowledge, or in group settings to have fun. All that is needed is a web browser with JavaScript enabled to make full use of the quiz. The site has a competitive aspect through users comparing their scores through the leaderboard.

### User Expectations

- An effective navigation system amendable for all screen sizes.
- Easy to locate instructions and leaderboard sections, accessible from the start screen.
- A perceptive game interface with clear controls and notifications aiding in the gameplay.
- A clear way in which to save the score for comparison on the leaderboard.
- A simply way to restart the quiz without navigating through the start page.
- A practical quiz website available to view on all devices.

### User Stories

As a player, I want a smooth functional experience with quick loading times for an enjoyable experience. <br>
The design of the website is intentionally simple to allow for quick loading times. All iamges used are also in WEBP format as the current quickest for web use. <br>

As a player, I want to see my score progress as I play the quiz. <br>
The quiz interface includes an interactive score tracker that shows the users how many correct answers they have throughout the quiz. <br>

As a player, I want to be notified if my answer is correct or incorrect. <br>
As each answer is selected a clear notification will appear on all devices to confirm whether or not the users answer is correct, whilst the next question is able to load in the background. <br>

As a player, I want the ability to save my score to compare with other users.<br> 
Once a player has completed the quiz they will be prompted to add a username in order to save their score to view on the leaderboard. <br>

As a player, I want to easily start the quiz again without needing to go back to the start page. <br>
Once the quiz has completed, the player can restart the quiz using a Try Again button without needing to save their score or start from the main page. <br>

As a player, I want to compare my score with other users through a leaderboard. <br>
From the main page a user can view the leaderboard to see scores previously saved. Currently these scores will pull from a users local storage. <br>

As a player, I want a webpage with an appropriate amount of content so as not to distract me from the quiz.<br>
The site is kept simple to allow the players a straight forward experience without overly complicated navigation or functions. <br>
[Back to Contents](#contents)

---

## Design

### Wireframes

Desktop
![desktop wireframe](assets/images/desktop-wireframe.webp)

Mobile
![mobile wireframe](assets/images/Mobile%20Wireframe.webp)

### Colour Palette

![colour blind palette](assets/images/color.adobe.com_create_color-accessibility.webp)

### Typography

![font image](assets/images/mooli-font.webp)

[Back to Contents](#contents)
---

## Features and Functionality

### Start Page

### Main Quiz Page

### End Page

[Back to Contents](#contents)
---

## Technologies Used

The following technologies have been utilised in the production of this website;

- HTML5- The core of the website has been built with HTML5.
- CSS- The website styling has been completed using CSS.
- Javascript- In order to utilise the Font Awesome icons a script had to be added using Javascript. Javascript has also been used for the functionality of the website.
- GitHub- Storage and publishing of the website has been done through GitHub.
- GitHub Pages- The website has been published through GitHub Pages.
- Codeanywhere- This is the IDE used to edit and push changes for the website.
- Font Awesome- Icons such as the social media icons were obtained through the Font Awesome website.
- Favicon Generator Website- I have used this website to generate the favicon code for my chosen image.
- Google Chrome- The majority of the website testing and building has been done with the assistance of Google Chrome and the Developer Tools.
- Pixelied.com Website- I have used this website to convert my images from JPEG/PNG to WEBP.
- Python- Via the terminal in Codeanywhere I have used python3 in order to preview the website using a local HTTP server.
- AmIResponsive Website- To view overall functionality across devices I have used the AmIResponsive website.

### Languages Used

HTML, CSS, Javascript

[Back to Contents](#contents)
---

## Deployment and Local Development

### Deployment

The Trivia Quiz Website has been deployed to Git Pages.

### Local Development

#### How to Fork

If you would like to fork the repository:

1. Log in (or sign up) to your account on GitHub.
2. Go to the repository for this project- /TonichaB/Trivia-Quiz/
3. Click on the Fork button in the top right corner.

#### How to Clone

If you would like to clone this repository:

1. Log in (or sign up) to your account on GitHub.
2. Go to the repository for this project- /TonichaB/Niche-Crystals/
3. Click on the code button, and copy your preferred clone link.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and paste the link copied in step 3 above. Press enter.

[Back to Contents](#contents)
---

## Testing

### Validators

#### HTML

#### CSS

#### JS Hint

#### Lighthouse

#### WebAim

![contrast checker D6CCC2](assets/images/contrast-checker-%23D6CCC2.webp)
![contrast checker DE7C8E](assets/images/contrast-checker-%23DE7C8E.webp)

### Bug Fixes

During the process of building the quiz I came accross a couple of bugs to be fixed.

The first bug I came across related to the functionality of the start page buttons. The play button to start the quiz was not functioning, and the instructions and how to play buttons would open the relevant divs but showing at the bottom of the page. I spoke with my Mentor, Luke, who pointed out the sections of my code causing the bug, making use of the Google Developer Tools. Using his guidance and further testing with Google Developer Tools, I sourced the issue to the javascript functions to hide the start page when each button is clicked.

[Back to Contents](#contents)
---

## Credits

### Code Used

To assist with the building of this quiz I have made use of the following;

- As a general guide to build the quiz I have referred to the following YouTube tutorials:
  - [Brian Design](https://www.youtube.com/watch?v=f4fB9Xg2JEY)
  - [Codehal](https://www.youtube.com/watch?v=Vp8x8-reqZA)
- The following websites have also been used for guidance with the code used:
  - [Michael Karen](https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68) This page was used to assist with saving high scores for the leaderboard feature.
- I have utilised [Trivia API](https://the-trivia-api.com) to generate the questions and answers for the quiz.

### Content

The icons used on the home page of the quiz have been sourced from [Font Awesome](https://fontawesome.com/)

### Media

### Acknowledgements

I would like to acknowledge Code Institute and their Full Stack Development course which has assisted me in building the site.

I would also like to thank my fellow students and members of the Stack community whose contributions within the Slack channels have proven to be very helpful when facing challenges during the project.

Lastly I would like to thank my Mentor Luke who helped me overcome my biggest bug hurdle when completing the project.

[Back to Contents](#contents)

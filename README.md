# widget 📖

The Project was developed during NWL Return, a week-long event. The event had two learning trails.
The Origin track was aimed at beginners in programming in which the basic technologies of the web, HTML, CSS and Javascript
were demonstrated. The Impulse track was aimed at more experienced programmers, a complete application was developed with
ReactJs, NodeJs, React Native PostgreSQL. The project present in this repository was the result of the impulse track, which was to develop a
feedback widget where the user can leave a comment along with a screenshot of the screen to report a Bug, a suggestion or other opinion.

## Table of contents 📑
- [Overview](#overview)
  - [Front end](#front-end)
  - [Back end](#back-end)
  - [Mobile](#mobile)

## Overview ⤵️

### front end  🖥️

Fronte end was developed with three stages, the first stage the user clicks on the icon in the
corner of the screen, the second stage the user selects the type of feedback, leaves a comment about
the feedback and finally chooses whether or not to take a screenshot and then click on send feedback, in 
the third stage a success screen is displayed in case of successful submission and the data is saved in the database.

#### Screens 📸

<div style='width: 100%; display:flex'>
 <img src='https://user-images.githubusercontent.com/66382974/167695078-d95756c3-9df6-4154-a7ee-55a38daf9a44.png' />
 <img src='https://user-images.githubusercontent.com/66382974/167695085-a979c49a-894d-4422-bb45-148cc5c4529b.png' />
 <img src='https://user-images.githubusercontent.com/66382974/167695112-274a620f-3740-4761-822d-725e373e390c.png' />
 <img src='https://user-images.githubusercontent.com/66382974/167694197-0fdbb25b-588f-4a29-ac6f-c017aae5c8fa.png' />
 <img src='https://user-images.githubusercontent.com/66382974/167694652-7b82fda5-a4fa-430f-8901-067a95337c57.png' />
</div>
  
#### Built with 🏛️

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Axios](https://github.com/axios/axios) - Axios For Http requests
- [Tailwind](https://tailwindcss.com/) - Tailwindcss for styles
- [phosphor react](https://phosphoricons.com/) - phosphor react for icons
- [html2canvas](https://html2canvas.hertzen.com/) - html2canvas for take screenshot
- [headless Ui](https://headlessui.dev/) - headless Ui for fully accessible UI components

### back end ⚙️

The Back end was made with some SOLID principles such as dependency inversion, the back end presents only one route to create feedbacks. The nodemailer was used in the development environment to send an email containing the information coming from the front end to a test recipient. the prism was the ORM used to persist the data in the database, which in this case was used PostgreSQL.Finally, jest was used to test a single function.

#### Routes 🛤️

There is only one route in the backend. The /feedbacks route only accepts the post method and with the following body in json: type must be one of the feedback types which are BUG, IDEA and OTHER; comment must be a string containing the user's text; screenshot this field is optional, but if you want to fill it, you must use a png image in base64.

#### Technologies 💻

- [NodeJs](https://nodejs.org/en/)
- [Prisma](https://www.prisma.io/)
- [Jest](https://jestjs.io/docs/getting-started) 
- [PostgreSQL](https://www.postgresql.org/)
- [express](https://expressjs.com/) 
- [nodemailer](https://nodemailer.com/about/)
- [Cors](https://www.npmjs.com/package/cors)

### Mobile 📱

The mobile part of the project was developed with React Native with Expo.
It was used libraries from the web part, because React Native uses react js to build the interfaces on mobile.

#### build 🏛️

The technologies used were through the expo to give animations and manipulate the interface through gestures.

### what I learned 🧑‍💻

The web part I already knew, but it was my first steps in the mobile world, and I realized that thanks to React native it was very simple to program for mobile devices and uses a lot of knowledge acquired with react. I used tests with jest for the first time on the back end. I absorbed a little of the SOLID concepts and why
we must use them.

## links 🔗

- Web : [https://widget-mocha-rho.vercel.app/](https://widget-mocha-rho.vercel.app/)

## author 🙋‍♂️ 😄

- Linkedin : [William](https://www.linkedin.com/in/william-k-lisboa/)

## acknowledgments 🤝

I want to thank [Rocketseat](https://www.rocketseat.com.br/) 💓 for providing an excellent programming event with an incredible didactics, and making it available for all levels and everything without charging anything.


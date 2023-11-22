# The Hero's Tale 

[View live project here on GitHub](https://solracnauj92.github.io/Hero-s-Tale/)

I'm thrilled to introduce "Hero's Tale," a Choose Your Own Adventure website created using Javascript, forming a significant part of Portfolio Project 2.

![Main image](assets/images/main.png)

## Intro & Inspiration

Growing up, my love for games led me to learn coding with dreams of joining the game industry. Excitingly, this passion project came along – "The Hero's Tale," a choose-your-own-adventure game. Inspired by the adventure books I devoured growing up, it's a nod to childhood joy and a journey into the gaming world! 

With my background in gaming, strategy, and storytelling, I'm crafting this interactive fantasy on a website. 
You get to call the shots—there are three different endings, and it's all up to you. 
I want everyone of all ages to have fun with their own unique journey through this game.

<br>  

# [Content](#content)
  - [Intro & Inspiration](#intro-inspiration)
  - [User Experience - UX](#user-experience---ux)
     - [Aim](#aims)
     - [Target](#target)
     - [User Personas](#personas)
     - [User goals](#goals)
     - [First Time Visitor](#first-time-visitor)
     - [Returning Visitor](#returning-visitor)
     - [Frequent Visitor](#frequent-visitor)
 - [Creation Process](#creation-process)
    - [Developing Story](#developing-story)
    - [World Building](#world-building)
    - [Story Structure for Javascript](#story-structure)
 - [Wireframe](#wireframe)
    - [Features](#features)
    - [Responsiveness](#responsiveness)
    - [Future Features](#future-features)
- [Design & Media](#design)
    - [Colour Palette](#colour-palette)
    - [Typography](#typography)
    - [Images](#images)
    - [Audio](#audio)
 - [Testings](#audits)
      - [HTML Validation](#html-validation)
      - [CSS Validation](#css-validation)
      - [Javascript Validation](#javascript-validation)
      - [Feedback, Bugs & Fixes](#feedback-bugs-fixes)
 - [Deployment](#deployment)
      - [How to Deploy](#how-to-deploy)
      - [Cloning and Forking](#cloning-forking)
  - [Technologies Used](#technologies-used)
  - [Credits](#credits)
      - [Content References](#content-references)
      - [Acknowledgement](#acknowledgement)

-----

# User Experience - UX

## Aim 

- **Interactive Storytelling:** Engage with an immersive fantasy narrative where your decisions steer the course of the tale.
- **Multiple Endings:** Explore different storylines and experience varied conclusions based on your choices.
- **JavaScript-Based:** Developed primarily using JavaScript, ensuring a dynamic and responsive user experience.
- **User-Friendly Interface:** Simple and intuitive design for easy navigation and enjoyment for users of all ages.

## Target

- **Provide Entertainment:** Offering an engaging and enjoyable experience through interactive storytelling.
- **Stimulate Imagination:** Encouraging users to visualise and engage with a rich fantasy world.
- **Empower Decision-Making:** Allowing users to shape their own adventure, emphasising the significance of choices.
- **Deliver Personalised Experiences:** Creating unique narratives tailored to each user's decisions and preferences.

## User Persona 

 ### Tech Enthusiast Sarah:

Background: Sarah is a tech enthusiast and coding novice eager to explore creative coding projects. She's interested in simple and engaging projects to improve her coding skills.
<br>
Goals: Learn coding basics, have fun with interactive projects, and gain hands-on experience.

### Busy Parent Alex:

Background: Alex is a busy parent with limited time for recreational activities. Looking for games that offer a quick, enjoyable escape, Alex values simplicity and engaging content.
<br>
Goals: Find a game that provides a brief, entertaining experience during short breaks or downtime.

### Gaming Veteran Jordan:

Background: Jordan is a seasoned gamer with a love for complex narratives and decision-based games. Seeking a new and immersive experience, Jordan appreciates games that challenge strategic thinking.
<br>
Goals: Explore a unique, narrative-driven game that offers multiple story paths and challenges decision-making skills.

## **Goal**  
  
Visitors to the website may come there for reasons other than finishing the quest, such as to take in the fascinating and engaging story that puts them in control of the outcome. To  provide players a chance to escape reality and experience various scenarios. The game intends to serve as a sort of escapism plus visitors can test and develop their decision-making abilities by making choices and then seeing the results of those actions.

 
### **First Time Visitor**

The first-time visitor's goal is to finish the quest. Regardless of how the story ends, they will still need to make the proper decisions to get there. The visitor is free to repeat the game as much as they like,  It provides a new experience each time they are played.


### **Returning Visitor**

A return visitor's goal is to take a different route to the finish. to uncover what might have followed if they had selected alternatives to their initial responses. Once again, They are free to repeat the game as much as they like.

  
### **Frequent Visitor**  

As Frequent visitors, they would frequently check to see whether the narrative had been updated, or one could simply wish to re-experience the game again on their own or with their friends or families.   

--- 

# Creation Process  
  
## Developing a story


As I was researching, I understood what was required to build a story. Plus, I had played and read a number of books with a similar theme. It was clear I needed a straightforward yet well-organised game with obvious goals, obstacles, and outcomes to increase interaction and engagement.
The story would take several different turns, with each turn resulting in a different outcome.

I ended by choosing the Dragons and dungeons theme as they are the classic elements of fantasy and adventure stories, making them a natural fit for a “Choose Your Own Adventure” game. Players can explore fantastical environments and encounter mythical creatures, adding excitement and intrigue to the game. Plus, Dungeons are often filled with danger and mystery, providing opportunities for players to make decisions that affect their outcome. This can add tension and suspense to the game, keeping players engaged and invested in the story.

  

## World building

Wrote out the text for each part of the story, including descriptions of the scene, characters, and actions. I made sure to include the decisions that the player will make and the consequences that follow. 

![World building](assets/images/worldbuilding.png)
  

### Story structure for Javascript

The Hero's Tale is organised into distinct scenes, each representing a chapter or significant point in the narrative. The structure follows a simple format for ease of understanding and modification.

- Scenes
Each scene is defined as an object with the following properties:

- Title: Describes the title of the scene.
- Story: Contains the narrative content, including dynamic elements if necessary (e.g., player's name).
- Image: Refers to an image associated with the scene, enhancing the visual experience.
- Alt: Provides alternative text for accessibility purposes.
- Choices: Represents an array of choices available to the player. Each choice consists of a label and a destination, indicating the next scene.

#### Example 
![Example](assets/images/jsstory.png)

This game structure credit goes to [Kevin Briggs' tutorial: https://www.youtube.com/watch?v=kayFBMl06q8&t=3582s

# Wireframes  

![Wireframe](assets/images/wireframe.png)
A wireframe was executed  to plan and organise the content and functionality of a website, making it easier to design and build the site. Keeping in mind the user experience and ensuring that the website is easy to navigate and use. Plus determine the user interface and navigation for the game, including how the player will make decisions and how they will be taken to the next part of the story.
### Front Main Page Wireframe mockup across all devices
![Wireframe Main](assets/images/wireframemain.jpg)

### Story Page Wireframe mockup across all devices
![Wireframe Story](assets/images/wireframestory.jpg)

# Features

### Background Music  
![audiobox](assets/images/audiobox.png)
<br>
Adding background music with user-controlled playback to offer  a customisable and immersive experience. 
<br> It accommodates diverse player preferences, enhances atmosphere, and promotes accessibility.  Providing this feature contributes to a more enjoyable and inclusive gaming experience.

### Input Name
![imputname](assets/images/inputname.png)
<br>
Personalised Gaming Experience and customisation! Input preferred name. 
<br> Characters will be addressed by the name the user chooses, making the gaming adventure unique. 

 ### Start Button
![startbutton](assets/images/startbutton.png)
<br>
The start button gives players a clear initiation point, setting the pace and allowing them to begin when ready.

### Choices Boxes
![choicesboxes](assets/images/choiceboxes.png)
<br>
The choices box serves as a guide, providing crucial information about gameplay, the game's objective, and the decisions users will encounter. 
<br> It enhances user understanding and engagement.

### Visual Story
![visuals](assets/images/visuals.png)
<br>
Visuals in a game are crucial for immersion and storytelling. Matching visuals to the game's scene creates a cohesive and immersive experience, drawing players into the world and enhancing their emotional connection to the game's narrative and environment. 


## Responsiveness 

![Main image](assets/images/amiresponsive.png)
  
This website is optimised for different sizes and devices, so that players can access the game from any device with ease. This has been tested on - [AmIResponsive](https://ui.dev/amiresponsive) as well on Chrome Dev tools for different deviees including tablets.

### Media Queries 

Media query implementation in the CSS

![CSS](assets/images/css.png)


### Testings 
 - Lighthouse Report for both desktop and mobile on Chrome
 <br> <br>

![Desktop Performance](assets/images/desktopperformance.png)
![Mobile Performance](assets/images/mobileperformance.png)

 - Lighthouse Report for both desktop and mobile on Opera
 <br> <br>

 ![Desktop Performance Opera](assets/images/mobileperformanceopera.png)
 ![Mobile Performance Opera](assets/images/desktopperformanceopera.png)

 - Lighthouse Report for both desktop and mobile on Edge
 <br> <br>
 ![Desktop Performance Edge](assets/images/mobileperformanceedge.png)
 ![Mobile Performance Edge](assets/images/desktopperformanceedge.png)


---  

## Future Features
 - Possible new story branching or continuing the story 

 - Allowing players to save their progress and pick up from where they left. This would make it easier for them to continue their adventure and not repeat it. 

 - Update overall look and designs and add interactive elements to make the experience more immersive

 - Keep track of the choices players make throughout the game, allowing them to see the consequences of their actions and make more informed decisions.

 - Add social sharing functionality, allowing players to share their progress and choices with friends, creating a sense of community around the game.

 - Implement analytics to track player behaviour and gather data, which can be used to make improvements to the game and create a better experience for players.

 ----

# Design & Media

## Color Palette  

Here is the colour palette, however the main colour purple was chosen as it is often associated with royalty, luxury, and mystery. It is also often associated with magic, mysticism, and the unknown, which can help to create a sense of mystery and awe around the dragon, making it feel more magical and otherworldly.  
  
![colour theme swatches](assets/images/palette.png)  
  
  
## Typography 
  
[Google Fonts](https://fonts.google.com/) The following text font was chosen for the entire website. Using this font in  an interactive game enhances the overall style, making the game more approachable, and with personality.   
  
![google Fonts Poor Story](assets/images/font.jpg)

        
## Images
  
All Images and graphics were created via Canva. I have taken the time to design every scene cover to ensure that the website gives an interactive and narrative feel to it. [Canva](https://www.canva.com/)

![screenshot of navbar](assets/images/three.png) 

## Audio

Added audio as an interactive element to enhance the player's experience.

[Royalty Free Music by Benjamin Tissot](https://www.bensound.com/royalty-free-music/track/birth-of-a-hero/) 
                            
# Deployment

## How to deploy  

GitHub was used to deploy the website. These were the steps taken to acheive this:  

1. Login to GitHub account
2. Navigate to the project repository
3. Click the Settings button near the top of the page
4. In the left-hand menu, find and click on the Pages button
5. In the Source section, choose 'main' from the drop-down, select branch menu
6. Select 'root' from the drop-down folder menu
7. Click 'Save' and after a few moments the project will have been made live and a link is visible at the top of the page

## Cloning and Forking

### Cloning a Repository

1. Go to your forked repository on GitHub.
2. Click on the "Code" button and copy the repository URL.
3. Open a terminal or command prompt.
4. Use git clone followed by the repository URL to clone the repository locally: git clone <repository_URL>
5. You'll have a local copy of the repository on your machine.

### Forking a Repository

1. Visit the GitHub repository you want to fork.
2. Click on the "Fork" button in the upper right corner of the repository page.
3. This creates a copy of the repository in your GitHub account.

Source or for more infomraiton: [GitHub](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)  

---  
    
# Testings  
   
## **HTML Validation using W3C Validation**  
<details open>
<summary>HTML validation</summary>  

![screenshot of html](assets/images/htmlvalidator.png)
</details>  

<br>  

## **CSS Validation using W3C Validation** 

<details open>
<summary>CSS validation</summary>  

![screenshot of CSS validation](assets/images/cssvalidator.png)
</details>   

<br>  

## Javascript Validation using jshint  
<details open>
<summary>Javascript validation</summary>  

![screenshot of js](assets/images/jsvalidation.png)
</details>    
   
## Feedback, Bugs & Fixes  
In response to valuable feedback from the Code Institute Assessment Team, I have diligently reviewed and implemented necessary improvements to the specified section. This thorough examination allowed me to address identified issues and enhance the overall quality of the code. By adhering to the team's guidance, I have successfully refined and fixed elements that required attention, ensuring a more robust and effective implementation. 

### Audio player box 
The audio player used to automatically start playing upon entering the page, but I've since removed the autoplay feature from the code. This adjustment gives users the freedom to decide whether they want to play the music or not. I now recognise the importance of giving users the choice to initiate media playback, making it a better practice for a more user-friendly experience.

### Name input 
I've encountered issues entering forms without warning, and errors were not being handled properly in certain cases. I've addressed these concerns by adding a label for the story and implementing the following changes.

![nameinput](assets/images/nameinput.png)

I have also fix code in Script.js for the generation of radio inputs and labels by adding '=' <label for="radio${i}">${story[story.currentScene].choices[i].choice}</label>. Previously the error message would be displayed:

![labelfor](assets/images/labelfor.png)

### Adding 'alt' attribute to images in both HTML & JS
In my previous version, I forgot to add the alt attribute to images which is crucial for web accessbility.  It provides a text alternative for screen readers, aiding users with visual impairments. Additionally, it enhances SEO by helping search engines understand image content. The "alt" attribute also serves as a fallback, displaying descriptive text if images fail to load. In essence, it ensures the website is more inclusive and user-friendly.

### Corrected message display for choices
In the earlier version, the website didn't show an error message when users proceeded without making choices, enabling them to advance to the next page without selecting an option. I have now addressed this in JavaScript by incorporating an alert prompting users to select an option before proceeding.

![choices](assets/images/choices.png)



  
# Technologies Used    

- HTML
    - HTML is used to structure and use Bootstrap components by adding specific classes.
- CSS
    - CSS is used to style and personalise Bootstrap components used for the website
- Google Fonts
        - [Poor Story, by Yoon Design](https://fonts.google.com/specimen/Poor+Story)
- [Figma](https://www.figma.com)
    - The wireframe and the world building was pre-planned and designed via Figma. 
- [Canva](https://www.canva.com/)
    - Canva was used for: 
      - Granting copyright free graphics
      - Designing and testing visuals 
- [Coolors](https://coolors.co/)
    - Generated the brand colour palatte
- [QuillBot](https://quillbot.com/)
    - QuillBot was used scan writings and alert any errors in grammar, spelling, punctuation as well as rephrase any research used for the website
- [ChatGPT](https://openai.com/blog/chatgpt/)
    - This was used inform a summary of a topic
- GitHub 
    - Stores, manages, and track changes to the project code
- Chrome DevTools
    - Chrome DevTools helped to debug, inspect, test the website's responsive design and check performance analysis tools
- [Am I responsive](https://ui.dev/amiresponsive)
    - Mock up and check responsiveness across different devices 

  
# Credits  
  
## Content References
- All content written for the website is by myself, is purely fictional, and for educational purposes only.
- [Code Institute](https://codeinstitute.net/ie/) 
- [W3Schools](https://www.w3schools.com/) 
- [StackOverflow](https://stackoverflow.com/)
- [@KevinBriggs](https://www.youtube.com/@kevinbriggs8354)
- [WebDevSimplified](https://www.youtube.com/@WebDevSimplified/)
- [BrittanyCodes](https://www.youtube.com/@brittany-codes6772)
- [Fontawesome](https://fontawesome.com/)

## Acknowledgement 
- I would like to acknowledge my Code Institute mentor, Can Sücüllü, for his guidance and encouragement on this project.
- My wife for her huge support throughout the project and her colleague Richey.
- The Code Institute Assessment Team for identifying and providing in depth feedback to resubmit this project and improve it. 

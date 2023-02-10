var story;

function getStory(name) {

    return {
        currentScene: "menu",
        menu: {
            title: "The Hero's Tale",
            story: `Please ${name} select an option.`,
            image: "mountaincave.png",
            choices: [{
                    choice: "Start the game!",
                    destination: 'introduction'
                },
                {
                    choice: "Description",
                    destination: 'description'
                },
                {
                    choice: "How to play",
                    destination: 'howtoplay'
                }

            ]
        },
        howtoplay: {
            title: "How to Play",
            story: `Choose Your Own Adventure game typically involves making decisions and following a branching path through the story. Here are the steps to play: <br><br><br> Read the introduction: This sets the scene and introduces the protagonist, setting, and goal. <br><br> Make a decision: The game presents you with a choice, usually in the form of two or more options.<br>Turn to the designated page: The game will tell you which page to turn to based on the decision you made. <br><br> Read the outcome: The page you turn to will describe the outcome of your decision and present you with another choice. <br><br> Repeat steps 2-4: Keep making decisions and following the branching path until you reach the end of the story. <br><br> Check the ending: The ending will depend on the choices you made and the path you followed. Some endings may be good, some may be bad, and some may be a combination of both.`,
            image: "howto.png",
            choices: [{
                choice: "Go home menu",
                destination: 'menu'

            }]
        },
        description: {
            title: "Discover the Story",
            story: `The Hero's Tale is an adventure game in which the player takes on the role of a hero on a quest to save the world from a great evil. <br> As the hero travels through a vast and varied world filled with magic, mystery, and legendary creatures, the game features an immersive storyline, challenging puzzles, and dangerous and intrepid battles. <br> In order to emerge as the ultimate champion and restore peace to the kingdom, the player must gather allies, acquire powerful weapons and spells, and uncover the truth behind the evil threat to the land.`,
            image: "description.png",
            choices: [{
                choice: "Go home menu",
                destination: 'menu'
            }]
        },
        introduction: {
            title: "Chapter 1 the misterious cave",
            story: `The Hero's Tale is an adventure game in which the player takes on a challenge to find the legendary treasure guarded by an evil dragon, Spyron! In order to hold the highest order of royalty rank and prove to the people. <br> ${name} travels through the mountains and reaches the famous dungeon, known to be filled with mysterious creatures and challenging traps. If one is not careful, it’s game over.<br> If the ultimate champion finds the room, how is ${name} going to defeat the dragon? Is there a spell or a powerful weapon one must gather before? `,
            image: "cave.png",
            choices: [{
                choice: "Let’s find out!",
                destination: 'chapter1'
            }, ]
        },
        chapter1: {
            title: "Chapter 1: Zogar the Merciless",
            story: `${name} You find yourself in a dark and dreary dungeon. Your quest begins, ${name}.<br> Remember you are a brave adventurer and it’s your only chance to prove to your people that you can be their leader.<br> Your search begins for the legendary treasure of the evil dragon, Zogar. <br> Now, you come across two paths, will you:`,
            image: "caveinside.png",
            choices: [{
                    choice: "Take the left path through the damp and musty tunnel.",
                    destination: 'leftpath'
                },
                {
                    choice: "Take the right path through the torch-lit hallway.",
                    destination: 'rightpath'
                }
            ]
        },
        

    }
}
document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('#start-button')
    var content = document.querySelector('#content')
    button.addEventListener('click', function () {
        var name = document.querySelector('#name-input')
        story = getStory(name.value)
        renderScene()
    })
})

function renderScene() {
    var text = "Next"
    var image = "";
    if (story[story.currentScene].image) {
        image = "<img></img>"
    }
    if (story[story.currentScene].buttonText) {
        text = story[story.currentScene].buttonText
    }
    content.innerHTML = `
    <h1>${story[story.currentScene].title}</h1>
    <p>${story[story.currentScene].story}</p>
    ${image}
    ${getInputs()}
    <button id = "submit-button" >${text}</button>
    `
    if (story[story.currentScene].image) {
        document.querySelector("img").src = `assets/images/${story[story.currentScene].image}`
    }
    var button = document.querySelector("#submit-button");
    button.addEventListener('click', function () {
        getInputValue()
    })

}

function getInputValue() {
    var inputs = document.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            story.currentScene = inputs[i].getAttribute('data-destination')
            renderScene();
            return;
        }
    }
    story.currentScene = story[story.currentScene].defaultDestination
    renderScene()
}

function getInputs() {
    var input = ""
    if (!story[story.currentScene].choices) {
        return ""
    }
    for (var i = 0; i < story[story.currentScene].choices.length; i++) {
        input += `
      <div>
        <input data-destination = ${story[story.currentScene].choices[i].destination} id = "radio${i}" type = "radio" name = "choices" />
        <label for "radio${i}">${story[story.currentScene].choices[i].choice}</label>
      </div>`
    }
    return input;
}
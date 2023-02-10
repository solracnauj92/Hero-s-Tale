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
        leftpath: {
            title: 'The trap room',
            story: `You find yourself in a room filled with traps. You must use your skills to avoid them and find the key to unlock the door to the next room.`,
            image: "trap.png",
            choices: [{
                    choice: "Search between the big traps surrounding you.",
                    destination: 'searchtrap'
                },
                {
                    choice: "Try to skip some of them to reach the ones behind",
                    destination: 'skiptrap'
                },
                {
                    choice: "Tried to use some stones to activate some traps",
                    destination: 'usestones'
                },
                {
                    choice: "Go back to the main menu",
                    destination: 'menu'
                }
            ]
        },
        searchtrap: {
            title: 'A good decision?',
            story: `You find a key and opened the door, there you find a room filled with gold and jewels. You have found the treasure of Zogar!`,
            image: "dragonsleeping.png",
            choices: [{
                    choice: "Fill your pockets with the gold and run away before Zogar appear",
                    destination: 'fill'
                },
                {
                    choice: "Examinate carefully the new area",
                    destination: 'explore1'
                },

                {
                    choice: "Go back to the main menu",
                    destination: 'menu'
                }
            ]
        },
        fill: {
            title: 'Grasp all, Lose all',
            story: `While you was picking a big treasure from the top of a gold montain you notice how a big shadow cover all the room,<br> before you move the dragon smash you on the floor and cook ${name} with his flames`,
            image: "stealinggold.png",
            choices: [{
                choice: "You don't have more options...",
                destination: 'stealinggameover'
            }]
        },
        explore1: {
            title: 'What is hidden under the gold?',
            story: `while ${name} was exploring the room noticed that close to the big chest was Zogar resting, ${name} decided to take advantage of the situation, is the pefect time for:`,
            image: "dragonsleeping.png",
            choices: [{
                    choice: "Kill the dragon, cutting his throat while he is sleeping",
                    destination: 'killdragon'
                },

                {
                    choice: "Escape before the dragon wake up, someone else can be a hero, I will not risk",
                    destination: 'escape1'
                }
            ]
        },
        killdragon: {
            title: 'This is my opportunity',
            story: `The skin of the dragon was to slippery and the sword slipped from your hands ending right in front of the angry dragon,<br> Zogar fill the room with his flames, ${name} hide behing a big pile of rocks, then Zogar approached you and when he was going to bite you the chain holded him back causing rock to cramble fallin over him.`,
            image: "murderdragon.png",
            choices: [{
                choice: "You don't believe it, you defeat the dragon!",
                destination: 'normalending'
            }]
        },
        escape1: {
            title: 'You save your live',
            story: `${name} went back home, his family was very happy to see ${name} back, days later someone else defeat the dragon and all the town celebrate his victory, ${name} will be jealous and sad forever`,
            image: "badend.png",
            choices: [{
                choice: "You don't have more options...",
                destination: 'endgame'
            }]
        },
        skiptrap: {
            title: 'That was not a good idea..',
            story: `You trigger a trap while you was trying to avoid one, a hole appeared under you and you fall into a pit filled with snakes.`,
            image: "traparound.png",
            choices: [{
                choice: "You don't have more options...",
                destination: 'gameover1'
            }]
        },
        usestones: {
            title: 'The trap room',
            story: `${name} manage to desactivate some traps and the key appeared under them, but soon as you reach the key you notice that holding the key was a thin rod that activate the traps around you`,
            image: "trap.png",
            choices: [{
                    choice: "Search between the big traps surrounding you.",
                    destination: 'traparoundgameover.png'
                },

            ]
        },
        rightpath: {
            title: 'Angry Goblins',
            story: `Mid way of the tunnel, you find an area filled with foul smell and rotten food.<br> You are aware of the surroundings, and are prepared for anything until you hear something, goblins!`,
            image: "goblins.png",
            choices: [{
                    choice: "You run back to the main entrance.",
                    destination: 'runback'
                },
                {
                    choice: "You approach and attack the goblins.",
                    destination: 'attackgoblins'
                },
                {
                    choice: "You scare them off with your fire torch alive.",
                    destination: 'firetorch'
                }
            ]
        },
        runback: {
            title: 'Rockslide',
            story: `You run back but trigger the tunnel to collapse.`,
            image: "rockslide.png",
            choices: [{
                choice: `${name} is not able to move`,
                destination: 'rockslide'
            }]
        },
        attackgoblins: {
            title: 'The Three Goblins',
            story: `${name} take out the sword and try to attack from behind but the blade break after been stuck on one of the goblins shoulder, ${name} now understand why the sword was very cheap.`,
            image: "gameovergoblins.png",
            choices: [{
                choice: `The goblins started playing with ${name} body, after that they left looking for a pot.`,
                destination: 'menu'
            }]
        },
        firetorch: {
            title: 'A long tunnel',
            story: `${name} continue to the end of the tunnel and find a room. An empty suspicious looking  room filled with square block tiles, one must pass it to go to the next doorway.`,
            image: "tunnelto6doors.png",
            choices: [{
                    choice: "Walk confidently across to reach the doorway.",
                    destination: 'walkacross'
                },
                {
                    choice: "Try to use stones to test any traps beforehand.",
                    destination: 'stones'
                },
                {
                    choice: "Try to return back to main entrance.",
                    destination: 'returnbackmain'
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
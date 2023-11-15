/*jshint esversion: 6 */
// This game structure is inspired by the Choose Your Own Adventure books.
// Adapted from [Kevin Briggs' tutorial: https://www.youtube.com/watch?v=kayFBMl06q8&t=3582s].

// Define a variable to store the game's story.
var story;

// Function to initialize and retrieve the game's story.
function getStory(name) {

// Create and return an object representing the game's story.
    return {
        // Initialize the current scene to "menu".
        currentScene: "menu",
        // Define the main menu scene.
        menu: {
            title: "The Hero's Tale",
            story: `Please ${name} select an option.`,
            image: "mountaincave.png",
            alt: "image of a mountain cave",
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
        // Define the "How to Play" scene.
        howtoplay: {
            title: "How to Play",
            story: `Choose Your Own Adventure game typically involves making decisions and following a branching path through the story. Here are the steps to play: <br><br><br> Read the introduction: This sets the scene and introduces the protagonist, setting, and goal. <br><br> Make a decision: The game presents you with a choice, usually in the form of two or more options.<br>Turn to the designated page: The game will tell you which page to turn to based on the decision you made. <br><br> Read the outcome: The page you turn to will describe the outcome of your decision and present you with another choice. <br><br> Repeat steps 2-4: Keep making decisions and following the branching path until you reach the end of the story. <br><br> Check the ending: The ending will depend on the choices you made and the path you followed. Some endings may be good, some may be bad, and some may be a combination of both.`,
            image: "howto.png",
            alt: "image of main character reading a guide",
            choices: [{
                choice: "Go home menu",
                destination: 'menu'

            }]
        },
        // Define the "Description" scene.
        description: {
            title: "Discover the Story",
            story: `The Hero's Tale is an adventure game in which the player takes on the role of a hero on a quest to save the world from a great evil. <br> As the hero travels through a vast and varied world filled with magic, mystery, and legendary creatures, the game features an immersive storyline, challenging puzzles, and dangerous and intrepid battles. <br> In order to emerge as the ultimate champion and restore peace to the kingdom, the player must gather allies, acquire powerful weapons and spells, and uncover the truth behind the evil threat to the land.`,
            image: "description.png",
            alt: "funny image of main character flying in a dragon",
            choices: [{
                choice: "Go home menu",
                destination: 'menu'
            }]
        },
        // ... (Define other scenes and choices here)
        introduction: {
            title: "Chapter 1 the misterious cave",
            story: `The Hero's Tale is an adventure game in which the player takes on a challenge to find the legendary treasure guarded by an evil dragon, Zogar! In order to hold the highest order of royalty rank and prove to the people. <br> ${name} travels through the mountains and reaches the famous dungeon, known to be filled with mysterious creatures and challenging traps. If one is not careful, it’s game over.<br> If the ultimate champion finds the room, how is ${name} going to defeat the dragon? Is there a spell or a powerful weapon one must gather before? `,
            image: "cave.png",
            alt: "another image of a cave",
            choices: [{
                choice: "Let’s find out!",
                destination: 'chapter1'
            }, ]
        },
        chapter1: {
            title: "Chapter 1: Zogar the Merciless",
            story: `${name} You find yourself in a dark and dreary dungeon. Your quest begins, ${name}.<br> Remember you are a brave adventurer and it’s your only chance to prove to your people that you can be their leader.<br> Your search begins for the legendary treasure of the evil dragon, Zogar. <br> Now, you come across two paths, will you:`,
            image: "caveinside.png",
            alt: "image of a cave inside",
            choices: [{
                    choice: "Take the left path through the damp and musty tunnel.",
                    destination: 'leftpath'
                },
                {
                    choice: "Take the right path through the torch-lit tunnel.",
                    destination: 'rightpath'
                }
            ]
        },
        leftpath: {
            title: 'The trap room',
            story: `You find yourself in a room filled with traps. You must use your skills to avoid them and find the key to unlock the door to the next room.`,
            image: "trap.png",
            alt: "image of a trap",
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
                
            ]
        },
        searchtrap: {
            title: 'A good decision?',
            story: `You find a key and opened the door, there you find a room filled with gold and jewels. You have found the treasure of Zogar!`,
            image: "dragonsleeping.png",
            alt: "image of a sleeping dragon",
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
            story: `While you was picking a big treasure from the top of a gold montain you notice how a big shadow cover all the room,<br> before you move, the dragon smash you on the floor and cook ${name} with his flames`,
            image: "stealinggold.png",
            alt: "image of main character stealing",
            choices: [{
                choice: "You don't have more options...",
                destination: 'stealinggameover'
            }]
        },
        explore1: {
            title: 'What is hidden under the gold?',
            story: `while ${name} was exploring the room noticed that close to the big chest was Zogar resting, ${name} decided to take advantage of the situation, it's the pefect time for:`,
            image: "dragonsleeping.png",
            alt: "image of a sleeping dragon",
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
            story: `The skin of the dragon was easy to target, you take out the sword from your hands and end in front of the angry dragon,<br> Zogar fills the room with his flames, ${name} hid behind a big pile of rocks, but when Zogar atries to get you, the chain holded him back causing the rock to break and  fall over him.`,
            image: "murderdragon.png",
            alt: "image of a dragon attacked",
            choices: [{
                choice: "You don't believe it, you defeat the dragon!",
                destination: 'normalending'
            }]
        },
        escape1: {
            title: 'You save your live',
            story: `${name}  went back home, your family was very happy to see you back. But in days later someone else defeat the dragon and all the town celebrate his victory. ${name} became jealous and sad forever`,
            image: "badend.png",
            alt: "image shows one of the endings, the bad one",
            choices: [{
                choice: "You don't have more options...",
                destination: 'endgame'
            }]
        },
        skiptrap: {
            title: 'That was not a good idea..',
            story: `You trigger a trap while you was trying to avoid one, a hole appeared under you and you fall into a pit filled with snakes.`,
            image: "traparound.png",
            alt: "image of numerous traps",
            choices: [{
                choice: "You don't have more options...",
                destination: 'gameover1'
            }]
        },
        usestones: {
            title: 'The trap room',
            story: `${name} manage to desactivate some traps and the key appeared under them, but soon as you reach the key you notice that holding the key was a thin rod that activate the traps around you`,
            image: "trap.png",
            alt: "image of a trap",
            choices: [{
                    choice: "You cannot move",
                    destination: 'gameovertrap'
                },

            ]
        },
        rightpath: {
            title: 'Angry Goblins',
            story: `Mid way of the tunnel, you find an area filled with foul smell and rotten food.<br> You are aware of the surroundings, and are prepared for anything until you hear something, goblins!`,
            image: "goblins.png",
            alt: "image of goblins",
            choices: [{
                    choice: "You run back to the main entrance.",
                    destination: 'runback'
                },
                {
                    choice: "You approach and attack the goblins.",
                    destination: 'attackgoblins'
                },
                {
                    choice: "You scare them off with your fire torch.",
                    destination: 'firetorch'
                }
            ]
        },
        runback: {
            title: 'Rockslide',
            story: `You run back but trigger the tunnel to collapse.`,
            image: "rockslide.png",
            alt: "image shows a rockslide",
            choices: [{
                choice: `${name} is not able to move`,
                destination: 'rockslide'
            }]
        },
        attackgoblins: {
            title: 'The Three Goblins',
            story: `${name} took out the sword and try to attack from behind but the blade breaks after being stuck on one of the goblins' shoulders, ${name} now you understand why the sword was very cheap.`,
            image: "gameovergoblins.png",
            alt: "image of main character defeated by goblins",
            choices: [{
                choice: `The goblins started playing with ${name} body, after that they left looking for a pot.`,
                destination: 'menu'
            }]
        },
        firetorch: {
            title: 'A long tunnel',
            story: `${name} continue to the end of the tunnel and find a room. An empty suspicious looking room filled with square block tiles, one must pass it to go to the next doorway.`,
            image: "tunnelto6doors.png",
            alt: "image of a tunnel",
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
        stones: {
            title: 'The 6 Doors',
            image: "the6doors.png",
            alt: "image of the 6 doors",
            story: `No traps appear and ${name} continue to the next doorway and find six doors engraved with  mysterious looking ancient text.<br> You try to understand what it means but can’t. `,
            choices: [{
                    choice: "Malum aurum. 'plena aurea et captionem'",
                    destination: 'badgold'
                },
                {
                    choice: "Repono. 'ubi ut supellectilem'",
                    destination: 'repono'
                },
                {
                    choice: "Clausus locus. 'carcer'",
                    destination: 'carcer'
                },
                {
                    choice: "Latrina. praealtum foramen ubi populus puppis",
                    destination: 'latrina'
                },
                {
                    choice: "Domus draconis. 'qui pugnat draco, maledictus erit'",
                    destination: 'draconis'
                },
                {
                    choice: "Hic vivere monstra. 'locus plenus monstrorum",
                    destination: 'monstra'
                }
            ]
        },
        badgold: {
            title: 'Malum aurum',
            story: `When ${name} open the door, you  find a room full of gold, the shine of the precious metal is very strong because there is a light in the middle of the room projecting the reflexion on the room, <br> You lift a few bags full of gold and you activate a trap. `,
            image: "goldlock.png",
            alt: "image of a room with gold",
            choices: [{
                choice: `The door is close forever, you cannot come out of the room`,
                destination: 'menu'
            }]
        },
        repono: {
            title: 'Repono',
            story: `${name} opened open the door and find a room storage with some empty bags, boxes and few shelves.`,
            image: "emptyroom.png",
            alt: "image of a empty room",
            choices: [{
                choice: `Go back to the main room`,
                destination: 'stones'
            }]
        },
        carcer: {
            title: 'Carcer',
            story: `You open the door and find a room storage with some empty bags ,boxes and few shelves. `,
            image: "roomlocked.png",
            alt: "image of a room locked",
            choices: [{
                choice: `${name} try to open the door, the door is locked, You tried everything but its still locked, you go back and choose a different one`,
                destination: 'stones'
            }]
        },
        latrina: {
            title: 'Latrina',
            story: `${name} notice that the room is very dark but still went inside to check . After a few steps you fell into a deep hole. The people who used to live here used this room as a latrine.`,
            image: "latrine.png",
            alt: "image of a room with a hole",
            choices: [{
                choice: `${name} die from the fall`,
                destination: 'gameoverhole'
            }]
        },
        draconis: {
            title: 'Domus Draconis',
            story: `You did it! You reach the room with the treasure!.`,
            image: "dragonsleeping.png",
            alt: "image of a sleeping dragon",
            choices: [{
                    choice: `Explore around trying to find an alternative exit, to ensure your safety`,
                    destination: 'explore2'
                },
                {
                    choice: `Take enough money to fill your pockets and return back your way`,
                    destination: 'fill'
                },
                {
                    choice: `Explore around trying to find the dragon, your duty is to save the town from the evil dragon`,
                    destination: 'explore2'
                },
            ]
        },
        explore2: {
            title: 'What is hidden under the gold?',
            story: `while ${name} explore the room, notice that close to the big chest is Zogar resting., <br> ${name} decided to take advantage of the situation, its the perfect time for:`,
            image: "dragonsleeping.png",
            alt: "image of a sleeping dragon",
            choices: [{
                    choice: "Kill the dragon, cutting his throat while he is sleeping",
                    destination: 'killdragon'
                },
                {
                    choice: "Free the dragon, destroying the chain that is holding the dragon",
                    destination: 'freedragon'
                },
                {
                    choice: "Fill your pockets with the gold and run away before Zogar wake up!",
                    destination: 'fill'
                },
                {
                    choice: "Escape before the dragon wake up, someone else can be a hero, I will not risk",
                    destination: 'escape1'
                }
            ]
        },
        freedragon: {
            title: 'A new friend',
            story: `while ${name} was breaking the chain of the dragon, he woke up!!!, ${name} continue trying to release the dragon although, <br> the dragon is close enough to eat ${name} in one bite, Yet, he stared at the hero, After over 10 minutes ${name} manage to break the chain and the dragon is finally set free`,
            image: "releasedragon.png",
            alt: "image of a dragon free",
            buttonText: "Congratulations!",
            choices: [{
                    choice: "You did it Hero! You release the dragon from his prison, let’s hope he will not attack your town!",
                    destination: 'betterending'
                }

            ]
        },
        monstra: {
            title: 'Hic vivere monstra',
            story: `You try to open the door  but a huge claw grabs you and forces  you into the room and then kills you.`,
            image: "graphand.png",
            alt: "image of a monster in a room",
            choices: [{
                choice: `your story end here`,
                destination: 'menu'
            }]
        },
        walkacross: {
            title: 'A long tunnel',
            story: `A hole appeared under ${name} feet, the hole was too deep... `,
            image: "gameoverhole.png",
            alt: "image of the gameover due falling in a hole",
            choices: [{
                choice: `${name} broke their legs, few days later ${name} passed away.`,
                destination: 'gameoverhole'
            }]
        },
        returnbackmain: {
            title: 'Rockslide',
            story: `While ${name} crosses the entrance of the cave a bunch of rocks fell on the top of the hero`,
            image: "rockslide.png",
            alt: "image of rockslide",
            choices: [{
                choice: `after been stucked 3 days ${name} died by bleeding`,
                destination: 'menu'
            }]
        },
        gameover: {
            title: 'Do not loose your faith!',
            story: `Try again, a real hero never loose his hope`,
            image: "gameover.png",
            alt: "Simple image of a generic game over",
            choices: [{
                    choice: "Go back to the main menu",
                    destination: 'menu'
                }

            ]
        },
        gameover1: {
            title: 'Do not loose your faith!',
            story: `Try again, a real hero never loose his hope`,
            image: "gameover1.png",
            alt: "Image of an alternative gameover",
            choices: [{
                    choice: "Go back to the main menu",
                    destination: 'menu'
                }

            ]
        },
        rockslide: {
            title: 'Do not loose your faith!',
            story: `Try again, a real hero never loose his hope`,
            image: "rockslide.png",
            alt: "image of a rockslide",
            choices: [{
                    choice: "Go back to the main menu",
                    destination: 'menu'
                }

            ]
        },
        gameover3: {
            title: 'Do not loose your faith!',
            story: `Try again, a real hero never loose his hope`,
            image: "gameover.png",
            alt: "image showing a generic game over",
            choices: [{
                    choice: "Go back to the main menu",
                    destination: 'menu'
                }

            ]
        },
        stealinggameover: {
            title: 'Do not loose your faith!',
            story: `Try again, a real hero never loose his hope`,
            image: "stealinggold.png",
            alt: "image of main character stealing",
            choices: [{
                    choice: "Go back to the main menu",
                    destination: 'menu'
                }

            ]
        },
        gameovertrap: {
            title: 'Do not loose your faith!',
            story: `Try again, a real hero never loose his hope`,
            image: "traparoundgameover.png",
            alt: "image of game over with inspirational message",
            choices: [{
                    choice: "Go back to the main menu",
                    destination: 'menu'
                }

            ]
        },
        gameoverhole: {
            title: 'Do not loose your faith!',
            story: `Try again, a real hero never loose his hope`,
            image: "gameoverhole.png",
            alt: "image of game over due falling in a hole",
            choices: [{
                    choice: "Go back to the main menu",
                    destination: 'menu'
                }

            ]
        },
        normalending: {
            title: 'We have a new hero!',
            story: `The hero went back to his town explaining that the dragon will not kill nobody else, <br> and with all the gold he collected they will improve the town, everybody celebrate the good news.`,
            image: "first.png",
            alt: "image of main character victorious after killing the dragon",
            choices: [{
                    choice: "Go back to the main menu",
                    destination: 'menu'
                }

            ]
        },
        betterending: {
            title: 'We have a new hero!',
            story: `The hero went back to his town explaining that the dragon will not kill no one. <br> With all the gold collected they will improve the town,and so everybody celebrated the good news, even the dragon was using his fire to make some fireworks in the sky! <br> at the end we discovered that the dragon was not evil, he protected himself of the people who came to attack him to obtain the treasure of the real evil,Crakor who used the dragon to protect his treasure! The dragon will now be loyal to ${name} and to the town forever. Together they will go to face Crakor in the next Chapter, Chapter two: Crakor the Wendigo`,
            image: "betterend.png",
            alt: "image of the best ending main character people in the town and drangon are happy",
            choices: [{
                    choice: "Go back to the main menu",
                    destination: 'menu'
                }

            ]
        },

    };
}
// Add an event listener to execute code when the HTML content is loaded.
document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('#start-button');
    var content = document.querySelector('#content');
    var nameInput = document.querySelector('#name-input');// Get a reference to the name input field

    // Event listener for the button click.
    button.addEventListener('click', function () {
        // Get the player's name from the input field and trim whitespace from the input.
        var playerName = nameInput.value.trim(); 
        // Check if the name is not empty
        if (playerName !== '') { 
        // Initialize the game's story.
            story = getStory(name.value);
            renderScene();
        } else {
            // Display an error message or alert the user to enter a name.
            alert('Please enter your name before starting the game.');
        }   
    });
});

// Function to render the current scene.
function renderScene() {
    // Initialize button text and image variables.
    var text = "Next";
    var image = "";
    // Check if the current scene has an associated image.
    if (story[story.currentScene].image) {
    image = "<img></img>";
    }

    // Check if the current scene has custom button text.
    if (story[story.currentScene].buttonText) {
        text = story[story.currentScene].buttonText;
    }

    // Update the HTML content with the scene's information.
    content.innerHTML = `
    <h1>${story[story.currentScene].title}</h1>
    <p>${story[story.currentScene].story}</p>
    ${image}
    ${getInputs()}
    <button id = "submit-button" >${text}</button>
    `;

    // If the current scene has an image, set its source.
    if (story[story.currentScene].image) {
        document.querySelector("img").src = `assets/images/${story[story.currentScene].image}`;
    }

    // Add an event listener to the submit button.
    var button = document.querySelector("#submit-button");
    button.addEventListener('click', function () {
        getInputValue();
    });

}

// Function to handle user input and update the current scene.
function getInputValue() {
    // Get all radio input elements.
    var inputs = document.querySelectorAll('input[type="radio"]');

    // Check which radio button is selected.
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            story.currentScene = inputs[i].getAttribute('data-destination');
            renderScene();
            return;
        }
    }
    // Update the current scene based on the selected destination.
    story.currentScene = story[story.currentScene].defaultDestination;
    renderScene();
}

// Function to generate HTML radio inputs for choices.
function getInputs() {
    var input = "";
    // Check if the current scene has choices.
    if (!story[story.currentScene].choices) {
        return "";
    }
    // Create radio inputs and labels for each choice.
    for (var i = 0; i < story[story.currentScene].choices.length; i++) {
        input += `
      <div>
        <input data-destination = ${story[story.currentScene].choices[i].destination} id = "radio${i}" type = "radio" name = "choices" />
        <label for "radio${i}">${story[story.currentScene].choices[i].choice}</label>
      </div>`;
    }
    return input;
}
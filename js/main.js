//establish DOM references
// explicitly defining for my own sanity
let movementDisplay = document.getElementById('movement')
let game = document.getElementById('game')
let statusDisplay = document.getElementById('status')

// getting context for drawing on canvas
let ctx = game.getContext('2d')
game.setAttribute('height', getComputedStyle(game)['height'])
game.setAttribute('width', getComputedStyle(game)['width'])

function Crawler(x, y, width, height, color) {
    this.x = x
    this.y = y
    this.color = color
    this.width = width
    this.height = height
    this.alive = true
    this.render = function() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}  

let hero = new Crawler(50, 200, 50, 50, 'hotpink')
let ogre = new Crawler(400, 150, 60, 100, '#bada55')
let movement = 10

let gameLoop = () => {
    //clear canvas every loop
    ctx.clearRect(0, 0, game.width, game.height)
    //display gamestate on the DOM
    movementDisplay.innerText = `X: ${hero.x}\nY: ${hero.y}`
    // if ogre is alive
    if (ogre.alive) {
        //render the ogre
        ogre.render()
        //detect collision
        detectHit()
    }
    //render the hero
    hero.render()
}

let detectHit = () => {
    //TODO: write collision detection
    console.log('detecting hit')
}

let movementHandler = (e) => {
    // move my hero based on the key pressed.
    // if w is pressed
    if (e.key === "ArrowUp"){ // move up
        hero.y -= movement
    } else if (e.key === 'ArrowLeft') { //move left
        hero.x -= movement
    } else if (e.key === 'ArrowDown') {//move down
        hero.y += movement
    } else if (e.key === 'ArrowRight') { // move right
        hero.x += movement
    } else {
        console.log(`${e.key} won't make you move`)
    }

    /*
    switch(e.key) {
        case 'ArrowUp':
            hero.y -= movement //moveup
            break
        case 'ArrowLeft': 
            hero.x -= movement //move left
            break
        case 'ArrowDown':
            hero.y += movement // move down
            break
        cast 'ArrowRight':
            hero.x += movement // move right
            break
        default:
            console.log(`${e.key} won't make you move`)
    }*/
}
//set event listener for keydown
document.addEventListener('keydown', movementHandler)
//initializes the game
let gameInterval = setInterval(gameLoop, 100)

//helper function so my computer doesnt explode
document.querySelector('#btm-left').addEventListener('click', () => {
    clearInterval(gameInterval)
})


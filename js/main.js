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
//Draw a filled box
// let drawBox = (x, y, size, color) => {
//     ctx.fillStyle = color
//     ctx.fillRect(x, y, size, size)
// }

game.addEventListener('click', (e) => {
    // drawBox(e.offsetX, e.offsetY, 100, 'hotpink')
    //clear whole board
    ctx.clearRect(0, 0, game.width, game.height)
    hero.render()
    // change ogre position
    ogre.x = e.offsetX
    ogre.y = e.offsetY
    //draw ya boi
    ogre.render()
}, { option: true }) 



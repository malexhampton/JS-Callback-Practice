const inventory = newInventory()
move(inventory).to(0, 0)

const element = newImage('assets/green-character/static.gif')
let direction = null;
let x = 100;
let y = 250;
move(element) .withArrowKeys(100, 250, handleDirectionChange)

move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)


setInterval(function(){ 
    if(direction === 'west'){
        x = x - 1
    }
    if(direction === 'north'){
        y = y + 1
    }
    if(direction === 'east'){
        x = x + 1
    }
    if(direction === 'south'){
        y = y - 1
    }
   
}, 1)

document.addEventListener('keydown', function(e){
    if(e.repeat) return;

    if(e.key === 'ArrowLeft'){
        direction = 'west'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
    callback(direction)
})

document.addEventListener('keyup', function(e){
    direction = null
    callback(direction)
})

function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback){
            let direction = null;
            let x = left;
            let y = bottom;
       
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }        
}

function handleDirectionChange(){
    if(direction === null){
       element.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        element.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        element.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        element.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        element.src = 'assets/green-character/south.gif'
    }
}



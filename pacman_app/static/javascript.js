var world=[
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,2,2,2,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,2,2,1,1,1,1,2,1],
    [1,2,2,2,2,2,1,2,2,2,7,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,2,1,1,1,1,1,1,2,2,1,1,2,1,1,2,2,1,1,2,1,1,2,1,1,2,2,2,2,2,2,1,1,1,2,1],
    [1,2,2,2,2,2,1,2,2,2,2,2,2,1,2,2,2,1,0,0,0,0,1,2,1,7,1,2,1,2,2,1,1,2,2,1,1,1,2,1],
    [1,2,1,1,1,2,1,2,2,1,1,2,2,1,2,2,2,1,0,0,0,0,1,2,1,2,1,2,1,2,1,1,2,2,2,1,7,1,2,1],
    [1,2,2,2,2,2,1,2,1,1,2,2,2,1,2,2,2,1,0,0,0,0,1,2,1,2,2,2,1,2,1,7,2,1,2,1,2,1,2,1],
    [1,1,1,1,1,2,1,2,1,7,2,1,2,2,1,1,2,1,1,1,1,1,1,2,1,1,2,2,1,2,1,1,1,1,1,1,2,1,1,1],
    [1,2,2,2,2,2,1,2,2,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,2,2,2,2,2,2,2,2,2,1,1,1,1,1,2,2,1,1,1,1,1,2,2,1,1,1,1,2,2,1,1,1,1,2,1],
    [1,2,2,2,2,2,2,2,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]

function displayWorld() {
    var output = "";
    for(var i = 0; i < world.length; i++) {
        output += "<div class='row'>"
        for(var j = 0; j < world[i].length; j++) {
            var value = world[i][j];
            if(value == 1) {
                value="\n\t<div class='block'></div>"
            }
            else if(value == 2 ) {
                value="\n\t<div class='coin'></div>"
            }
            else if(value == 3) {
                value = "\n\t<div class='pacman_left'></div>"
            }
            else if(value == 4) {
                value = "\n\t<div class='pacman_up'></div>"
            }
            else if(value == 5) {
                value = "\n\t<div class='pacman_right'></div>"
            }
            else if(value == 6) {
                value = "\n\t<div class='pacman_down'></div>"
            }
            else if(value == 7) {
                value = "\n\t<div class='cherry'></div>"
            }
            else {
                value = "\n\t<div class='empty'></div>"
            }
            output += value;
            console.log(output)
        }
        output += "\n</div>\n"
    }
    document.getElementById("world").innerHTML = output;
}

var score = 0
document.getElementById("scoreBox").innerHTML = `<p>${score}</p>`

function showScore() {
    score += 1;
    document.getElementById("scoreBox").innerHTML = `<p>${score}</p>`
}
console.log(world[1]);
function movePac(e) {
    if(e.repeat) {
        return;
    }
    if(e.keyCode == 37) {
        // find pacman in displayworld(), move to the left
        for(var i = 0; i < world.length; i++) {
            for(var j = 0; j < world[i].length; j++) {
                if(world[i][j] == 3) {
                    if(world[i][j-1] != 1) {
                        if(world[i][j-1] == 2) {
                            showScore();
                        }
                        else if(world[i][j-1] == 7){
                            showScore();
                        }
                        world[i][j] = 0;
                        world[i][j-1] = 3;
                        return displayWorld();
                    }
                }
                else if(world[i][j] == 4) {
                    if(world[i][j-1] != 1) {
                        if(world[i][j-1] == 2) {
                            showScore();
                        }
                        else if(world[i][j-1] == 7){
                            showScore();
                        }
                        world[i][j] = 0;
                        world[i][j-1] = 3;
                        return displayWorld();
                    }
                }
                else if(world[i][j] == 5) {
                    if(world[i][j-1] != 1) {
                        if(world[i][j-1] == 2) {
                            showScore();
                        }
                        else if(world[i][j-1] == 7){
                            showScore();
                        }
                        world[i][j] = 0;
                        world[i][j-1] = 3;
                        return displayWorld();
                    }
                }
                else if(world[i][j] == 6) {
                    if(world[i][j-1] != 1) {
                        if(world[i][j-1] == 2) {
                            showScore();
                        }
                        else if(world[i][j-1] == 7){
                            showScore();
                        }
                        world[i][j] = 0;
                        world[i][j-1] = 3;
                        return displayWorld();
                    }
                }
            }
        }
    }
    if(e.keyCode == 38) {
        // find pacman in displayworld(), move up
        for(var i = 0; i < world.length; i++) {
            for(var j = 0; j < world[i].length; j++) {
                if(world[i][j] == 3) {
                    if(world[i-1][j] != 1) {
                        if(world[i-1][j] == 2) {
                            showScore();
                        }
                        else if(world[i-1][j] == 7) {
                            showScore();
                        }
                        world[i][j] = 0;
                        world[i-1][j] = 4;
                        return displayWorld();
                    }
                }
                else if(world[i][j] == 4) {
                    if(world[i-1][j] != 1) {
                        if(world[i-1][j] == 2) {
                            showScore();
                        }
                        else if(world[i-1][j] == 7) {
                            showScore();
                        }
                        world[i][j] = 0;
                        world[i-1][j] = 4;
                        return displayWorld();
                    }
                }
                else if(world[i][j] == 5) {
                    if(world[i-1][j] != 1) {
                        if(world[i-1][j] == 2) {
                            showScore();
                        }
                        else if(world[i-1][j] == 7) {
                            showScore();
                        }
                        world[i][j] = 0;
                        world[i-1][j] = 4;
                        return displayWorld();
                    }
                }
                else if(world[i][j] == 6) {
                    if(world[i-1][j] != 1) {
                        if(world[i-1][j] == 2) {
                            showScore();
                        }
                        else if(world[i-1][j] == 7) {
                            showScore();
                        }
                        world[i][j] = 0;
                        world[i-1][j] = 4;
                        return displayWorld();
                    }
                }
            }
        }
    }
    if(e.keyCode == 39) {
        // find pacman in displayworld(), move to the right
        for(var i = 0; i < world.length; i++) {
            for(var j = 0; j < world[i].length; j++) {
                if(world[i][j] == 3) {
                    if(world[i][j+1] != 1) {
                        if(world[i][j+1] == 2) {
                            showScore();
                        }
                        else if(world[i][j+1] == 7) {
                            showScore();
                        }
                        world[i][j] = 0;
                        world[i][j+1] = 5;
                        return displayWorld();
                    }
                }
                else if(world[i][j] == 4) {
                    if(world[i][j+1] != 1) {
                        if(world[i][j+1] == 2) {
                            showScore();
                        }
                        else if(world[i][j+1] == 7) {
                            showScore();
                        }
                        world[i][j] = 0;
                        world[i][j+1] = 5;
                        return displayWorld();
                    }
                }
                else if(world[i][j] == 5) {
                    if(world[i][j+1] != 1) {
                        if(world[i][j+1] == 2) {
                            showScore();
                        }
                        else if(world[i][j+1] == 7) {
                            showScore();
                        }
                        world[i][j] = 0;
                        world[i][j+1] = 5;
                        return displayWorld();
                    }
                }
                else if(world[i][j] == 6) {
                    if(world[i][j+1] != 1) {
                        if(world[i][j+1] == 2) {
                            showScore();
                        }
                        else if(world[i][j+1] == 7) {
                            showScore();
                        }
                        world[i][j] = 0;
                        world[i][j+1] = 5;
                        return displayWorld();
                    }
                }
            }
        }
    }
    if(e.keyCode == 40) {
        // find pacman in displayworld(), move down
        for(var i = 0; i < world.length; i++) {
            for(var j = 0; j < world[i].length; j++) {
                if(world[i][j] == 3) {
                    if(world[i+1][j] != 1) {
                        if(world[i+1][j] == 2) {
                            showScore();
                        }
                        else if(world[i+1][j] == 7) {
                            showScore();
                        }
                        world[i][j] = 0;
                        world[i+1][j] = 6;
                        return displayWorld();
                    }
                }
                else if(world[i][j] == 4) {
                    if(world[i+1][j] != 1) {
                        if(world[i+1][j] == 2) {
                            showScore();
                        }
                        else if(world[i+1][j] == 7) {
                            showScore();
                        }
                        world[i][j] = 0;
                        world[i+1][j] = 6;
                        return displayWorld();
                    }
                }
                else if(world[i][j] == 5) {
                    if(world[i+1][j] != 1) {
                        if(world[i+1][j] == 2) {
                            showScore();
                        }
                        else if(world[i+1][j] == 7) {
                            showScore();
                        }
                        world[i][j] = 0;
                        world[i+1][j] = 6;
                        return displayWorld();
                    }
                }
                else if(world[i][j] == 6) {
                    if(world[i+1][j] != 1) {
                        if(world[i+1][j] == 2) {
                            showScore();
                        }
                        else if(world[i+1][j] == 7) {
                            showScore();
                        }
                        world[i][j] = 0;
                        world[i+1][j] = 6;
                        return displayWorld();
                    }
                }
            }
        }
    }
}
displayWorld();
document.addEventListener("keydown", movePac);
// add ghosts
// add 2 images of pacman; one facing right and one facing left --- DONE!!!
// add cherry --- DONE!!!
// add ghost-powercube relationship
// add side-to-side teleportation
// add more pacman-like movement system
// add music
// add highscore system
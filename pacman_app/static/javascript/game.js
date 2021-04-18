var world=[
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,7,1,1,1,2,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,2,2,1,1,1,1,7,1],
    [1,2,2,2,2,2,1,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,2,1,1,1,1,1,1,2,2,2,2,2,1,1,2,2,1,1,2,2,1,1,1,1,2,2,1,1,2,2,1,1,1,2,1],
    [1,2,2,2,2,2,1,2,2,2,2,2,2,1,1,1,2,1,8,9,9,8,1,2,2,1,2,2,1,2,1,2,2,2,2,1,1,1,2,1],
    [1,7,1,1,1,2,1,2,2,1,1,2,2,1,2,2,2,1,8,13,10,8,1,2,1,2,1,2,1,2,1,2,2,1,2,1,2,1,2,1],
    [1,2,2,2,2,2,1,2,1,0,0,1,2,1,2,2,2,1,8,11,12,8,1,2,1,2,2,2,1,2,1,2,2,1,2,1,2,1,2,1],
    [1,1,1,1,1,2,1,2,1,0,0,1,2,1,2,2,2,1,1,1,1,1,1,2,2,1,2,2,1,2,1,1,1,1,1,1,2,1,1,1],
    [1,2,2,2,2,2,1,2,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,7,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,5,2,1,1,1,1,2,2,1,1,1,1,2,2,1,1,1,1,7,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
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
            else if(value == 8) {
                value = "\n\t<div class='ghost_house'></div>"
            }
            else if(value == 9) {
                value = "\n\t<div class='ghost_house_entrance'></div>"
            }
            else if(value == 10) {
                value = "\n\t<div class='blinky'></div>"
            }
            else if(value == 11) {
                value = "\n\t<div class='pinky'></div>"
            }
            else if(value == 12) {
                value = "\n\t<div class='inky'></div>"
            }
            else if(value == 13) {
                value = "\n\t<div class='clyde'></div>"
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
document.getElementById("scoreBox").innerHTML = `<p>Score:</p><p>${score}</p>`

function showScore() {
    score += 1;
    document.getElementById("scoreBox").innerHTML = `<p>Score:</p><p>${score}</p>`
    // alert(```{% if request.session['highscore'] < score %}<br>
    // {% request.session['highscore'] = " + score + " %}<br>
    // {% endif %}```)
}
function movePac(e) {
    // if(e.repeat) {
    //     return;
    // }
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
                        if(world[i+1][j] != 9) { 
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
                else if(world[i][j] == 4) {
                    if(world[i+1][j] != 1) {
                        if(world[i+1][j] != 9) { 
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
                else if(world[i][j] == 5) {
                    if(world[i+1][j] != 1) {
                        if(world[i+1][j] != 9) { 
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
                else if(world[i][j] == 6) {
                    if(world[i+1][j] != 1) {
                        if(world[i+1][j] != 9) { 
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
}
// function moveBlinkyScatter() {
//     var target = "world[1][32]"
//     for(i = 0; i > world.length; i++) {
//         for(j = 0; j > world[i].length; j++) {
//             if(world[i][j] == 10) {
//                 var place = "world[" + String(i) + "][" + String(j) + "]";
//             }
//         }
//     }
//     if(Number(target[6]) < Number(place[6])) {
//         var move_to = "world[" + String(Number(place[6])-1) + "][" + place[9] + "]";
//         if(world[move_to[6]][move_to[9]] == 1) {
//             move_to = "world[" + place[6] + "][" + String(Number(place[9])+1) + "]";
//         }
//     }
//     var temp = world[Number(move_to[6])][Number(move_to[9])];
//     world[Number(move_to[6])][Number(move_to[9])] = 10;
//     world[Number(place[6])][Number(place[9])] = 0;
//     return displayWorld();
// }
displayWorld();
// Window.setInterval(moveBlinkyScatter(), 500)
document.addEventListener("keydown", movePac);

// add ghosts
// add 2 images of pacman; one facing right and one facing left --- DONE!!!
// add cherry --- DONE!!!
// add ghost-powercube relationship
// add side-to-side teleportation
// add more pacman-like movement system
// add music
// add highscore system
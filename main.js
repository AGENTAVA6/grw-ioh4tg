function setup(){
    canvas = createCanvas(640,480)
    canvas.position(350,250)
    video = createCapture(VIDEO)
    video.hide()

}

function draw(){
    image(video,0,0,640,480)
    
    fill(255, 0, 0)
    stroke(0,0,0)
    circle(45,50,80)
    
    fill(255, 100, 0)
    stroke(0,0,0)
    circle(125,50,80)

    fill(255, 0, 0)
    stroke(0,0,0)
    circle(205,50,80)


    fill(255, 100, 0)
    stroke(0,0,0)
    circle(285,50,80)


    fill(255, 0, 0)
    stroke(0,0,0)
    circle(365,50,80)


    fill(255, 100, 0)
    stroke(0,0,0)
    circle(445,50,80)


    fill(255, 0, 0)
    stroke(0,0,0)
    circle(525,50,80)

    //lollll

    fill(255, 0, 0)
    stroke(0,0,0)
    circle(605,130,80)
    
    fill(255, 100, 0)
    stroke(0,0,0)
    circle(605,210,80)

    fill(255, 0, 0)
    stroke(0,0,0)
    circle(605,290,80)

    fill(255, 100, 0)
    stroke(0,0,0)
    circle(605,50,80)

    fill(255, 100, 0)
    stroke(0,0,0)
    circle(605,370,80)

    fill(255, 0, 0)
    stroke(0,0,0)
    circle(605,450,80)

    fill(255, 100, 0)
    stroke(0,0,0)
    circle(605,530,80)


//lol
fill(255, 100, 0)
stroke(0,0,0)
circle(45,130,80)

fill(255, 0, 0)
stroke(0,0,0)
circle(45,210,80)

fill(255, 100, 0)
stroke(0,0,0)
circle(45,290,80)
    
fill(255, 0, 0)
stroke(0,0,0)
circle(45,370,80)

fill(255, 100, 0)
stroke(0,0,0)
circle(45,450,80)

fill(255, 0, 0)
stroke(0,0,0)
circle(45,530,80)

}
function tkaeSnapshot(){
    save('photo.png')
}
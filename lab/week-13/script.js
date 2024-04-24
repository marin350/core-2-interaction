function setup() {
    createCanvas(windowWidth, windowHeight);
    background(174, 198, 209);

  }
  
  function draw() {
    //table
    fill(199, 186, 145)
    noStroke();
    rect(0, 500, windowWidth, windowHeight/2);

    //table shadow
    fill(168, 156, 118)
    noStroke();
    rect(0, 500, windowWidth, windowHeight/4);

    //sun
    fill(242, 192, 44)
    circle(50, 50, 400);

    fill(242, 216, 44)
    circle(50, 50, 330);


    //stems
    noFill();
    strokeWeight(3);
    stroke(57, 112, 72)
    line(650, 50, 700, 600);
    line(850, 50, 800, 600);
    line(750, 150, 650, 500);
    line(620, 150, 680, 500);
    line(700, 90, 680, 500);
    line(800, 110, 810, 500);
    line(900, 130, 810, 500);

    //flower petals

    //flower6
    noStroke()
    fill(13, 2, 171)
    ellipse(900, 170, 30, 60);
    ellipse(900, 90, 30, 60);
    ellipse(860, 140, 60, 30);
    ellipse(940, 140, 60, 30)

    //flower1
    fill(104, 60, 214)
    noStroke()
    ellipse(650, 110, 30, 60);
    ellipse(650, 40, 30, 60);
    ellipse(610, 80, 60, 30);
    ellipse(690, 80, 60, 30);

    //flower2
    fill(13, 2, 171)
    ellipse(750, 190, 30, 60);
    ellipse(750, 120, 30, 60);
    ellipse(710, 160, 60, 30);
    ellipse(790, 160, 60, 30);

    //flower3
    fill(104, 60, 214)
    ellipse(850, 110, 30, 60);
    ellipse(850, 40, 30, 60);
    ellipse(810, 80, 60, 30);
    ellipse(890, 80, 60, 30);

    //flower4
    fill(168, 130, 186)
    ellipse(800, 140, 30, 60);
    ellipse(800, 60, 30, 60);
    ellipse(760, 100, 60, 30);
    ellipse(840, 100, 60, 30);

    //flower5
    fill(168, 130, 186)
    ellipse(620, 190, 30, 60);
    ellipse(620, 120, 30, 60);
    ellipse(580, 160, 60, 30);
    ellipse(660, 160, 60, 30);

    //flower6
    fill(13, 2, 171)
    ellipse(700, 120, 30, 60);
    ellipse(700, 50, 30, 60);
    ellipse(660, 90, 60, 30);
    ellipse(740, 90, 60, 30);

    //flowers(circles)
    fill(255, 233, 89)
    circle(750, 150, 30);
    circle(650, 70, 30);
    circle(850, 70, 30);
    circle(620, 150, 30);
    circle(700, 80, 30);
    circle(800, 100, 30);
    circle(900, 130, 30);

    //vase
    fill(222, 87, 24)
    noStroke();
    rect(600, 250, 300, 400, 100, 100, 100);
    rect(575, 250, 350, 100, 50, 50 , 50);

    //vaseshine
    fill(250, 144, 95)
    rect(600, 270, 300, 50, 50, 50, 50);
    rect(620, 350, 50, 200, 50, 50, 50);

  }
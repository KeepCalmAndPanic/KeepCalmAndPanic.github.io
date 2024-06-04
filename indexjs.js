gameRun();

// playing/stopping music when speaker icon clicked
const speaker = document.getElementById("speakerIcon");
var music = document.getElementById("music");
var isPlaying = false;

function togglePlay() {
  isPlaying ? music.pause() : music.play();
};

music.onplaying = function() {
  isPlaying = true;
};
music.onpause = function() {
  isPlaying = false;
};

function speakerChange() {
    if (document.getElementById("speakerIcon").src == "./assets/speakerOn.png") {
        document.getElementById("speakerIcon").src = "./assets/speakerOff.png";
    } else {
        document.getElementById("speakerIcon").src = "./assets/speakerOn.png";
    }
}

function timer1m(){
    var over = document.getElementById("gameover");
    var timeup = document.getElementById("timeup");
    var replay = document.getElementById("replay");
    var tomenu = document.getElementById("tomenu");
    var oneMin = document.getElementById("oneminute");
    var threeMin = document.getElementById("threeminute");
    var bing = document.getElementById("bing");
    var scoreEnd = document.getElementById("scoreEnd");
    var overSound = document.getElementById("snake?!");
    bing.play();
    var sec = 60;
    if (oneMin.style.display === "none" || threeMin.style.display === "none") {
        oneMin.style.display = "block", threeMin.style.display = "block";
      } else {
        oneMin.style.display = "none", threeMin.style.display = "none";
      }
    var timer = setInterval(function(){
        document.getElementById('timerDisplay1').innerHTML=sec+' seconds';
        sec--;
        if (sec < 0) {
            overSound.play();
            clearInterval(timer);
            if (over.style.display === "block" || timeup.style.display === "block" || replay.style.display === "block" || tomenu.style.display === "block" || scoreEnd.style.display === "block") {
                over.style.display = "none", timeup.style.display = "none", replay.style.display = "none", tomenu.style.display = "none", scoreEnd.style.display = "none";
            } else {
                over.style.display = "block", timeup.style.display = "block", replay.style.display = "block", tomenu.style.display = "block", scoreEnd.style.display = "block";
            }
        }
    }, 1000);
}

function timer3m(){
    var over = document.getElementById("gameover");
    var timeup = document.getElementById("timeup");
    var replay = document.getElementById("replay");
    var tomenu = document.getElementById("tomenu");
    var oneMin = document.getElementById("oneminute");
    var threeMin = document.getElementById("threeminute");
    var bing = document.getElementById("bing");
    var scoreEnd = document.getElementById("scoreEnd");
    var overSound = document.getElementById("snake?!");
    bing.play();
    var sec = 180;
    if (oneMin.style.display === "none" || threeMin.style.display === "none") {
        oneMin.style.display = "block", threeMin.style.display = "block";
      } else {
        oneMin.style.display = "none", threeMin.style.display = "none";
      }
    var timer = setInterval(function(){
        document.getElementById('timerDisplay1').innerHTML=sec+' seconds';
        sec--;
        if (sec < 0) {
            overSound.play();
            clearInterval(timer);
            if (over.style.display === "block" || timeup.style.display === "block" || replay.style.display === "block" || tomenu.style.display === "block" || scoreEnd.style.display === "block") {
                over.style.display = "none", timeup.style.display = "none", replay.style.display = "none", tomenu.style.display = "none", scoreEnd.style.display = "none";
            } else {
                over.style.display = "block", timeup.style.display = "block", replay.style.display = "block", tomenu.style.display = "block", scoreEnd.style.display = "block";
            }
        }
    }, 1000);
}

function timeSelect() {
    var oneMin = document.getElementById("oneminute");
    var threeMin = document.getElementById("threeminute");
    if (oneMin.style.display === "block" || threeMin.style.display === "block") {
      oneMin.style.display = "none", threeMin.style.display = "none";
    } else {
      oneMin.style.display = "block", threeMin.style.display = "block";
    }
  }

function playbutton() {
    var title = document.getElementById("title");
    var play = document.getElementById("play");
    var info = document.getElementById("info");
    var bg = document.getElementById("menuBackground");
    var bing = document.getElementById("bing");
    bing.play();
    if (title.style.display === "none" || play.style.display === "none"|| info.style.display === "none"|| bg.style.display === "none") {
        title.style.display = "block", play.style.display = "block", info.style.display = "block", bg.style.display = "block";
    } else {
        title.style.display = "none", play.style.display = "none", info.style.display = "none", bg.style.display = "none";
    }
  } 

function infobutton() {
    var back = document.getElementById("back");
    var txt = document.getElementById("infotxt");
    var bg = document.getElementById("infoBackground");
    var paper = document.getElementById("paper");
    var charAni = document.getElementById("charAni");
    paper.play();
    if (bg.style.display === "block" || back.style.display === "block" || txt.style.display === "block" || charAni.style.display === "block" || digAni.style.display === "block") {
      bg.style.display = "none", back.style.display = "none", txt.style.display = "none", charAni.style.display = "none", digAni.style.display = "none";
    } else {
      bg.style.display = "block", back.style.display = "block", txt.style.display = "block", charAni.style.display = "block", digAni.style.display = "block";
    }
  }

function hideend() {
    var over = document.getElementById("gameover");
    var timeup = document.getElementById("timeup");
    var replay = document.getElementById("replay");
    var tomenu = document.getElementById("tomenu");
    var bing = document.getElementById("bing");
    var scoreEnd = document.getElementById("scoreEnd")
    bing.play();
    if (over.style.display === "none" || timeup.style.display === "none" || replay.style.display === "none" || tomenu.style.display === "none" || scoreEnd.style.display === "none") {
        over.style.display = "block", timeup.style.display = "block", replay.style.display = "block", tomenu.style.display = "block", scoreEnd.style.display = "block";
    } else {
        over.style.display = "none", timeup.style.display = "none", replay.style.display = "none", tomenu.style.display = "none", scoreEnd.style.display = "none";
    }
}

function gameRun() {
    // Character Sprite sheet image
    const characterSpriteSheet = new Image();
    characterSpriteSheet.src = "./assets/spritesheet.png";
    characterSpriteSheet.onload = load;

    // Background image
    const backgroundImage = new Image();
    backgroundImage.src = "./assets/hanoBeachPokemon.jpg";
    backgroundImage.onload = load;

    // set this to the number of elements you want to load before initalising
    const awaitLoadCount = 3;
    let loadCount = 0;

    // time tracking
    let lastTimeStamp = 0;
    let tick = 0;

    // canvas and context, not const as we don't set the value until document ready
    let canvas;
    let ctx;

    // game objects
    let character;
    let wormsize = 75;
    let worms = new Array();

    let score = 0;
    let scoreBuffer = true,
    delay = 500;

    function updateScore(){
        document.getElementById('scoreDisplay').innerHTML=score+' worms';
    }

    function updateEndScore(){
        document.getElementById('scoreEnd').innerHTML=score+' worms collected!';
    }

    let digTime = 0;

    const playbtn = document.getElementById('play');
    playbtn.addEventListener('click', gameRun);

    const replaybtn = document.getElementById('replay');
    replaybtn.addEventListener('click', gameRun);
    updateScore();
    updateEndScore();

    // run when the website has finished loading
    $('document').ready(function () {
        console.log("ready");
        load();
    });

    // call this function after each loadable element has finished loading.
    // Once all elements are loaded, loadCount threshold will be met to init.
    function load() {
        loadCount++;
        console.log("load " + loadCount);
        if (loadCount >= awaitLoadCount) {
            init();
        }
    }

    // initialise canvas and game elements
    function init() {
        console.log("init");
        canvas = document.getElementById('gamecanvas');
        ctx = canvas.getContext('2d');

        character = Character(
            characterSpriteSheet,
            [540, 540],

            [ // main character set
                [ // walk up track
                    [4320, 0], [2700, 540], [4320, 0], [2160, 540]
                ],
                [ // walk down track 
                    [3780, 0], [3240, 540], [3780, 0], [3240, 0]
                ],
                [ // walk left track
                    [3780, 540], [0, 540], [3780, 540], [540, 540]
                ],
                [ // walk right track 
                    [4320, 540], [1080, 540], [4320, 540], [1620, 540] 
                ],
                [ // dig track 
                    [0, 0], [2160, 0], [4860, 0]
                ],
            ],
            0.2 // Sprite scaling factor
        );
        character.init();
        startWormSpawn();

        // Event listeners
        document.addEventListener("keydown", doKeyDown);
        document.addEventListener("keyup", doKeyUp);

        window.requestAnimationFrame(run);
    }

    // Game loop function
    function run(timeStamp) {
        tick = (timeStamp - lastTimeStamp);
        lastTimeStamp = timeStamp;

        update(tick);
        draw();

        window.requestAnimationFrame(run);
    }

    function checkCharCollision() {
        var thud = document.getElementById("thud")
        // right wall collision
        if (character.position[0] >= 900) {
            thud.play();
            character.position[0] = 900;
        }
        // left wall collision
        else if (character.position[0] <= -40) {
            thud.play();
            character.position[0] = -40;
        }

        // bottom wall collision
        if (character.position[1] >= 640) {
            thud.play();
            character.position[1] = 640;
        }
        // top wall collision
        else if (character.position[1] <= -20) {
            thud.play();
            character.position[1] = -20;
        }
    }

    function getX(x) {
        var rect = canvas.getBoundingClientRect();
        return x - rect.left;
    }

    function getY(y) {
        var rect = canvas.getBoundingClientRect();
        return y - rect.top;
    }

    function getRandomInRange(min, max) {
        return Math.random() * (Math.abs(min) + max) + min;
    }

    let wormNo = 0;
    function startWormSpawn() {
        setInterval(() => {
            console.log(wormNo);
            worms.push(
                new Worm(
                    null,
                    getX(getRandomInRange(0, canvas.width)),
                    getY(getRandomInRange(0, canvas.height)),
                    getRandomInRange(-50, 50),
                    getRandomInRange(-50, 50),
                    wormsize,
                    wormsize
                    )
                )
                wormNo++;
        }, 3000)
    }

    function update() {
        character.update(tick);

        checkCollisions();
        for (var i = 0; i < worms.length; i++) {
            (worms[i]).update(tick);
        }

        worms = worms.filter(Worm => !Worm.killWorm);
    }

    function checkCollisions() {
        for (var i = 0; i < worms.length; i++) {
            // for each square, check the wall overlaps
            checkWallCollisions(worms[i]);
            // for each square, check for overlaps with other squares
            checkWormCharCollisions(worms[i], i);
        }
    }

    function checkWallCollisions(object) {
        // check right and left wall overlap
        if (object.getRight() >= canvas.clientWidth) {
            object.vx = -object.vx;
            object.x = canvas.clientWidth - object.width - 1;
        }
        else if (object.x <= 0) {
            object.vx = -object.vx;
            object.x = 1;
        }

        // check bottom and top wall overlap
        if (object.getBottom() >= canvas.clientHeight) {
            object.vy = -object.vy;
            object.y = canvas.clientHeight - object.height - 1;;
        }
        else if (object.y <= 0) {
            object.vy = -object.vy;
            object.y = 1;
        }
    }

    var yahoo = document.getElementById('yahoo')
    function checkWormCharCollisions(object, _) {
        // check if the worms are colliding with the character
        let isCol = rectIntersect(
            object.x,
            object.y,
            object.width,
            object.height,
            character.position[0],
            character.position[1],
            character.spriteCanvasSize[0],
            character.spriteCanvasSize[1]
        );
        object.isColliding = isCol;
        if (isCol) {
            worms.isColliding = isCol;
            if (scoreBuffer) {
                scoreBuffer = false;
                if (character.lastAction == "dig") {
                    object.killWorm = true;
                    score++;
                    console.log("score: ", score);
                    updateScore();
                    yahoo.play();
                    updateEndScore();
                }
                setTimeout(function () {
                    scoreBuffer = true;
                }, delay)
            }
        }
    }

    function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
        // Check x and y for overlap
        if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2) {
            return false;
        }
        return true;
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(backgroundImage, 0, 0, 960, 720);

        for (var i = 0; i < worms.length; i++) {
            worms[i].draw(ctx);
        }

        character.draw(ctx);

        ctx.beginPath();
        ctx.rect(5, 5, 340, 40)
        ctx.lineWidth=10;
        ctx.stroke();
        ctx.fillStyle='rgb(255,255,255)';
        ctx.fill();
    }

    function doKeyDown(e) {
        e.preventDefault();
        if (character != undefined) { character.doKeyInput(e.key, true); }
    }

    function doKeyUp(e) {
        e.preventDefault();
        if (character != undefined) { character.doKeyInput(e.key, false); }
    }

    // Create and return a new Character object.
    // Param: spritesheet = Image object
    // Param: spriteSize = Array of 2 numbers [width, height]
    // Param: spriteFrames = 3D array[Tracks[Frames[Frame X, Y]]]
    // Param: spriteScale = Number to scale sprite size -> canvas size
    function Character(spritesheet, spriteSize, spriteFrames, spriteScale) {
        return {
            spriteSheet: spritesheet,       // image containing the sprites
            spriteFrameSize: spriteSize,    // dimensions of the sprites in the spritesheet
            spriteFrames: spriteFrames,     // 3d array. X = animation track, Y = animation frame, Z = X & Y of frame
            spriteScale: spriteScale,       // amount to scale sprites by (numbers except 1 will be linearly interpolated)
            spriteCanvasSize: spriteSize,   // Calculated size after scale. temp value set, overwritten in init

            animationTrack: 0,              // current animation frame set to use
            animationFrame: 0,              // current frame in animation to draw
            frameTime: 125,                 // milliseconds to wait between animation frame updates
            timeSinceLastFrame: 0,          // track time since the last frame update was performed
            lastAction: "",                 // Last user input action performed

            position: [420, 360],           // position of the character (X, Y)
            direction: [0, 0],              // X and Y axis movement amount
            velocity: 0.2,                  // rate of position change for each axis

            // Initialise variables that cannot be calculated during
            // object creation.
            init() {
                console.log("init");
                // Apply scale multiplier to sprite frame dimensions
                this.spriteCanvasSize = [
                    this.spriteFrameSize[0] * this.spriteScale,
                    this.spriteFrameSize[1] * this.spriteScale
                ];
            },

            // Handle actions for the character to perform.
            // param: action = string of action name.
            action(action) {
                var digSnd = document.getElementById("digSnd");
                console.log(`action: ${action}. Animation Frame ${this.animationFrame}`);
                // ignore duplicate actions.
                if (action === this.lastAction) return;

                // handle each action type as cases.
                switch (action) {
                    case "moveLeft":
                        this.animationTrack = 2;
                        this.animationFrame = 0;
                        this.direction[0] = -this.velocity;
                        break;
                    case "moveRight":
                        this.animationTrack = 3;
                        this.animationFrame = 0;
                        this.direction[0] = this.velocity;
                        break;
                    case "moveUp":
                        this.animationTrack = 0;
                        this.animationFrame = 0;
                        this.direction[1] = -this.velocity;
                        break;
                    case "moveDown":
                        this.animationTrack = 1;
                        this.animationFrame = 0;
                        this.direction[1] = this.velocity;
                        break;
                    case "dig":
                        this.animationTrack = 4;
                        this.animationFrame = 0;
                        digSnd.play();
                        break;
                    case "noMoveHorizontal":
                        this.direction[0] = 0;
                        this.animationFrame = 0;
                        break;
                    case "noMoveVertical":
                        this.direction[1] = 0;
                        this.animationFrame = 0;
                        break;
                    default:
                        this.direction = [0, 0];
                        break;
                }

                // keep track of last action to avoid reinitialising the current action.
                this.lastAction = action;
            },

            update(tick) {
                // increase time keeper by last update delta
                this.timeSinceLastFrame += tick;
                // check if time since last frame meets threshold for new frame
                if (this.timeSinceLastFrame >= this.frameTime) {
                    // reset frame time keeper
                    this.timeSinceLastFrame = 0;

                    // update frame to next frame on the track. 
                    // Modulo wraps the frames from last frame to first.
                    if ((this.direction[0] !== 0 || this.direction[1] !== 0) && this.lastAction !== "dig") {
                        this.animationFrame = (this.animationFrame + 1) % this.spriteFrames[this.animationTrack].length;
                    }
                    if (this.lastAction === "dig" && this.digTime < 3) {
                        this.animationFrame = (this.animationFrame + 1) % this.spriteFrames[this.animationTrack].length;
                        this.digTime++;
                    } else {
                        this.digTime = 0;
                        this.lastAction = "";
                    }
                }

                // Calculate how much movement to perform based on how long
                // it has been since the last position update.
                this.position[0] += this.direction[0] * tick;
                this.position[1] += this.direction[1] * tick;

                checkCharCollision();
            },

            // Draw character elements using the passed context (canvas).
            // Param: context = canvas 2D context.
            draw(context) {
                context.drawImage(
                    this.spriteSheet,
                    this.spriteFrames[this.animationTrack][this.animationFrame][0],
                    this.spriteFrames[this.animationTrack][this.animationFrame][1],
                    this.spriteFrameSize[0],
                    this.spriteFrameSize[1],
                    this.position[0],
                    this.position[1],
                    this.spriteCanvasSize[0],
                    this.spriteCanvasSize[1]
                );
            },

            // Handle input from keyboard for the character.
            // Param: e = event key string.
            // Param: isKeyDown = boolean, true = key pressed, false = key released
            doKeyInput(e, isKeydown = true) {
                switch (e) {
                    case "w":
                        if (isKeydown) this.action("moveUp");
                        else this.action("noMoveVertical");
                        break;
                    case "a":
                        if (isKeydown) this.action("moveLeft");
                        else this.action("noMoveHorizontal");
                        break;
                    case "s":
                        if (isKeydown) this.action("moveDown");
                        else this.action("noMoveVertical");
                        break;
                    case "d":
                        if (isKeydown) this.action("moveRight");
                        else this.action("noMoveHorizontal");
                        break;
                    case " ":
                        if (isKeydown) this.action("dig");
                        break;
                    default:
                        if (!isKeydown) this.action("stop");
                        break;
                }
            }
        };
    }

    class GameObject
    {
    constructor (context, x, y, vx, vy, width, height){
        this.context = context;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.width = width;
        this.height = height;

        this.isColliding = false;

        this.draw = this.draw.bind(this);
        this.update = this.update.bind(this);
        this.getRight = this.getRight.bind(this);
        this.getBottom = this.getBottom.bind(this);
        this.setVelocity = this.setVelocity.bind(this);
        this.offsetVelocity = this.offsetVelocity.bind(this);
    }
    getRight(){
        return (this.x + this.width);
    }

    getBottom(){
        return (this.y + this.height);
    }

    draw(context){};
    update(tick){};
}

class Worm extends GameObject
{
    constructor (context, x, y, vx, vy, width, height){
        super(context, x, y, vx, vy);

        // Set default width and height
        this.width = width;
        this.height = height;

        this.circleMaxSize = 30;
        this.circleMinSize = 10;
        this.circleSize = this.circleMinSize;
        this.circleX = this.width / 2;
        this.circleY = this.height / 1.5;

        this.growTime = 5000;
        this.timePassed = 0;
        this.grow = true;

        this.lifeCycle = 0;
        this.lifeCycleEnd = 10000;

        this.killWorm = false;

        this.draw = this.draw.bind(this);
        this.update = this.update.bind(this);
        this.setVelocity = this.setVelocity.bind(this);
        this.offsetVelocity = this.offsetVelocity.bind(this);
    }

    draw(ctx){
        super.draw(ctx);
        ctx.fillStyle = 'rgba(00, 00, 00, 00)';
        ctx.fillRect(this.x, this.y, this.width, this.height);

        let gradient = ctx.createRadialGradient(
            this.x + this.circleX, this.y + this.circleY, this.circleMinSize,
            this.x + this.circleX, this.y + this.circleY, this.circleSize
        );
        gradient.addColorStop(0, '#FEE38A');
        gradient.addColorStop(1, '#A7803D');

        ctx.fillStyle = gradient
        ctx.beginPath();
        ctx.arc(this.x + this.circleX, this.y + this.circleY, this.circleSize, 1 * Math.PI, 0);
        ctx.closePath();
        ctx.fill();
    }

    update(tick){
        super.update(tick);
        // Move with set velocity
        this.x += this.vx * tick / 200;
        this.y += this.vy * tick / 200;
        //console.log(this.x + ", " + this.y);

        this.timePassed += tick;

        if (this.grow) {
            this.circleSize = this.circleMinSize + (this.circleMaxSize - this.circleMinSize) * (this.timePassed / this.growTime);
            if (this.timePassed >= this.growTime) {
                this.grow = false;
                this.timePassed = 0;
            }
        } else {
            this.circleSize = this.circleMaxSize - (this.circleMaxSize - this.circleMinSize) * (this.timePassed / this.growTime);
            if (this.timePassed >= this.growTime) {
                this.grow = true;
                this.timePassed = 0;
            }
        }

        this.lifeCycle += tick;

        if (this.lifeCycle >= this.lifeCycleEnd) {
            this.killWorm = true;
        }
    }

    setVelocity(vx, vy){
        this.vx = vx;
        this.vy = vy;
    }

    offsetVelocity(vx, vy){
        this.vx += vx;
        this.vy += vy;
    }
}
};
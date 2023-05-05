const canvas = document.getElementById("myCanvas");
const context = canvas.getContext('2d');

const resize = () => {
  canvas.width = window.innerHeight;
  canvas.height = window.innerHeight;
}

resize()
window.addEventListener('resize', resize)

const lvlInputs = document.getElementById("volLvl");

lvlInputs.addEventListener("change", () => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    const MainCircle = new Сircle(150, window.innerHeight / 2, innerHeight / 2, 1, lvlInputs.value);
    MainCircle.mainDraw()
}, false)

class Сircle {
    constructor(
        radius,
        posX,
        posY,
        level,
        maxLevel
    ){
        this.r = radius;
        this.x = posX;
        this.y = posY;
        this.lvl = level;
        this.maxLvl = maxLevel;
        this.canvas = document.getElementById("myCanvas");
        this.hildCr = [];
    }
    

    childDraw(){
        console.log(`constructor: r = ${this.r} || x = ${this.x} || y = ${this.y}`)
        console.log('childDraw() === yes')
        
        let x, y;

        for (let i = 1; i < 5; i++){
            switch (i){
                case 1: x = this.x;          y = this.y + this.r; break;
                case 2: x = this.x;          y = this.y - this.r; break;
                case 3: x = this.x + this.r; y = this.y;          break;
                case 4: x = this.x - this.r; y = this.y;          break;
            }

            console.log(`mainDraw() || for ${i} || x = ${x} || y = ${y} === yes`)

            const circle = new Сircle(this.r / 2, x, y, this.lvl + 1, this.maxLvl);
            circle.mainDraw()

        } 
    }

    mainDraw(){
        console.log('mainDraw() === yes')
        const ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.stroke();

        if (!(this.lvl > this.maxLvl)){this.childDraw()}
    }

    
}

const MainCircle = new Сircle(150, window.innerHeight / 2, innerHeight / 2, 1, 7);
MainCircle.mainDraw()
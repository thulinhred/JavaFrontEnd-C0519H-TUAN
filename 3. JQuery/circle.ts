class Circle {
    radius: number
    color: string;
    
    constructor(radius:number,color: string) {
        this.radius = radius;
        this.color = color;
    }
    
    getRadius() {
        console.log "radius: " + this.radius;
    }
}

...
let  John = new Human('John');
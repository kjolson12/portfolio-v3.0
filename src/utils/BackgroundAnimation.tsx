import { P5Canvas, type P5CanvasInstance, type Sketch, type SketchProps } from "@p5-wrapper/react";
import p5 from "p5";

const backgroundColor = '#0D001A';

const sketch: Sketch = p5 => {
    let particles: Particle[] = [];
    let fontSize = 12;
    let numOfParticles = 15;

    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
    
        p5.textFont('monospace');
        p5.textSize(fontSize);
    
        p5.colorMode(p5.RGB, 255, 255, 255, 100);
    
        p5.background(backgroundColor);
    }

    p5.draw = () => {
        // background color hex to rgb
        p5.fill(13, 0, 26, 5);
        p5.rect(0, 0, p5.width, p5.height);
    
        if (particles.length < (p5.width / p5.height) * numOfParticles) {
            let p = new Particle(p5);
            particles.push(p);
        }

        particles.forEach(p => {
            p.draw();
            p.update();
        });
    }

    p5.windowResized = () => {
        p5.resizeCanvas(innerWidth, innerHeight);
    }

    class Particle {
        p5: P5CanvasInstance<SketchProps>;
        pos: p5.Vector;
        speed: number;
        depth: number;

        constructor(p5: P5CanvasInstance<SketchProps>) {
            this.p5 = p5;
            this.pos = p5.createVector(0, 0);
            this.speed = 1;
            this.depth = 0;
            this.reset();
        }
    
        reset() {
            this.pos.set(Math.floor(this.p5.random(this.p5.width) / fontSize) * fontSize, -36);
            this.speed = this.p5.random(0.1, 0.4);
        }
    
        update() {
            if(this.pos.y > this.p5.height) {
                this.reset();
            }
    	    this.pos.y += this.speed * fontSize;
        }
    
        draw() {
            let point = this.p5.round(this.p5.random(0x3041, 0x3094));
            let char = String.fromCodePoint(point);
            this.p5.fill(0, 75, 0, this.p5.map(this.speed, 0.1, 0.4, 40, 100));
            this.p5.text(char, this.pos.x, this.p5.floor(this.pos.y / fontSize) * fontSize);
        }
    }
};

export default function BackgroundAnimation() {
    return <P5Canvas sketch={sketch} />;
}
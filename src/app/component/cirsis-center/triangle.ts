export class Triangle {
  rand;
  constructor(){
    this.rand = Math.random();
  }
  draw() {
    console.log(`I am triangle!${this.rand}`)
  }

  stable() {
    console.log('triangle stable');
  }

}

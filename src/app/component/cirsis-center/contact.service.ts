import {Triangle} from "./triangle";
import {Injectable} from "@angular/core";

@Injectable()
export class ContactService {

  constructor(protected triangle: Triangle) {

  }
  sayHello() {
    this.triangle.draw();
    console.log('hello, contact service,use factory!')
  }
}

export class Suggestion {
  id;
  name;

  toString() {
    return `(${this.id})${this.name}`;
  }
}

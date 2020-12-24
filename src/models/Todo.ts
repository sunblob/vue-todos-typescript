export class Todo {
  _id: string;
  title: string;
  description: string;

  constructor(title: string, description: string) {
    this._id = `${Date.now()}${Math.round(Math.random() * 10)}${Math.round(
      Math.random() * 10
    )}`;
    this.title = title;
    this.description = description;
  }
}

export default class Category {
    // id
    // name
    constructor({id, name}) {
      this.id = id;
      this.name = name;
    }
  
    static fromJson(slug) {
      const arr = slug.split(" ");
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
  
      return new Category({
        id: slug,
        name: arr.join(" "),
      });
    }
  }
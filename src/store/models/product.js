export default class Product {
  // id	1
  // title	"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
  // price	109.95
  // description	"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
  // category	"men's clothing"
  // image	"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  // rating	Object { rate: 3.9, count: 120 }
  constructor({id, title, price, description, category, image, rating}) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description || "No information available"
    this.category = category;
    this.image = image;
    this.rating = rating;
  }

  static fromJson(json) {
    return new Product({
      id: json.id,
      title: json.title,
      price: json.price,
      description: json.description,
      category: json.category,
      image: json.image,
      rating: json.rating,
    });
  }
}
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(newIsCheckedOut) {
    this._isCheckedOut = newIsCheckedOut;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    let ratingSum = this.ratings.reduce((accumulator, rating) => accumulator + rating, 0);
    return ratingSum / this.ratings.length;
  }

  addRating(value) {
    this.ratings.push(value);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

// Add a book to the library
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut); // True

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating()); // 4.66666667

// Add a movie to the library
const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut); // False

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating()); // 2.3333335
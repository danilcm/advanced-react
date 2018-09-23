class StateApi {
  constructor(raw) {
    this.raw = raw;
    this.state = {
      authors: this.getAuthors(),
      articles: this.getArticles()
    };
  }

  mapIntoObj(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  getAuthors() {
    return this.mapIntoObj(this.raw.authors);
  }

  getArticles() {
    return this.mapIntoObj(this.raw.articles);
  }

  getState = () => {
    return this.state;
  }

  getAuthor = (id) => this.getState().authors[id]
}

export default StateApi;
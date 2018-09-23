class StateApi {
  constructor(raw) {
    this.raw = raw;
    this.state = {
      authors: this.getAuthors(),
      articles: this.getArticles(),
      term: ''
    };

    this.subscriptions = new Map();
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

  setState = (change) => {
    this.state = {
      ...this.state,
      ...change
    };
    this.emit();
  }
  

  setTerm = (term) => this.setState({term})

  sub = (fn) => {
    this.subscriptions.set(fn, fn);
  }

  unsub = (fn) => {
    this.subscriptions.delete(fn);
  }

  emit() {
    this.subscriptions.forEach(value => value(this.getState()));
  }
}

export default StateApi;
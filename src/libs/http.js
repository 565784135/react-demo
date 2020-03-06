const http = {
  stringify(data={}){
    let esc = encodeURIComponent;
    let query = Object.keys(data).map(k => esc(k) + '=' + esc(data[k])).join('&');
    return query;
  },
  checkStatus(res){
    if(res.ok) return res;

    const error = new Error('err');
    error.data = res;
    // console.dir(res)
    throw error;
  },
  async _request(url, config={}) {
    try {
      let res = await fetch(url, config);
      let result = await this.checkStatus(res).json();
      return result;
    } catch(error) {
      // console.dir(error)
      if(error.toString() !== 'Error: err'){
        throw error;
      }
    }
  },
  async get(url, data = {}) {
    let query = this.stringify(data);
    let result = await this._request(url + '?' + query);
    return result;
  },
  async post(url, data = {}) {
    let query = this.stringify(data)
    let result = await this._request(url,{
      method: 'POST',
      headers:{'Content-Type': 'application/x-www-form-urlencoded'},
      body: query
    })
    return result;
  }
}

export default http;


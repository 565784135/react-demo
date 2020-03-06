const http = {
  stringify(data={}){
    let esc = encodeURIComponent;
    let query = Object.keys(data).map(k => esc(k) + '=' + esc(data[k])).join('&');
    return query;
  },
  checkStatus(res){
    const error = new Error('err');
    error.data = res;
    Toast.fail('请求错误');
    // console.dir(res)
    throw error;
  },
  async _request(url, config={}) {
    try {
      this.showLoading()
      let res = await fetch(url, config);
      let result = await this.checkStatus(res).json();
      return result;
    } catch(error) {
      // console.dir(error)
      if(error.toString() !== 'Error: err'){
        Toast.fail('网络错误');
        throw error;
      }
    }
  },
  async get(url, data = {}) {
    let query = this.stringify(data);
    return await this._request(url + '?' + query);
  },
  async post(url, data = {}) {
    let query = this.stringify(data)
    return  await this._request(url,{
      method: 'POST',
      headers:{'Content-Type': 'application/x-www-form-urlencoded'},
      body: query
    })
  }
}

export default http;


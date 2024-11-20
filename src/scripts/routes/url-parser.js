const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    let path = splitedUrl.resource ? `/${splitedUrl.resource}` : '/';
    if (splitedUrl.resource === 'detail') {
      path = '/detail/:id';
    }
    return {
      path,
      id: splitedUrl.id,
    };
  },
};

export default UrlParser;

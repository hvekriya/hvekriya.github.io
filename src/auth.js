/* globals localStorage */

export default {
  login(pass, cb) {
    cb = arguments[arguments.length - 1];
    if (localStorage.token) {
      if (cb) cb(true);
      this.onChange(true);
      return;
    }
    pretendRequest(pass, res => {
      if (res.authenticated) {
        localStorage.token = res.token;
        if (cb) cb(true);
        this.onChange(true);
      } else {
        if (cb) cb(false);
        this.onChange(false);
      }
    });
  },

  getToken() {
    return localStorage.token;
  },

  logout(cb) {
    delete localStorage.token;
    if (cb) cb();
    this.onChange(false);
  },

  loggedIn() {
    return !!localStorage.token;
  },

  onChange() {}
};

function pretendRequest(pass, cb) {
  setTimeout(() => {
    if (pass === process.env.VUE_APP_PASSWORD) {
      cb({
        authenticated: true,
        token: Math.random()
          .toString(36)
          .substring(7)
      });
    } else {
      cb({ authenticated: false });
    }
  }, 0);
}
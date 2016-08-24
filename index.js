'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function cookie() {
  return (() => {
    var _ref = _asyncToGenerator(function* (context, next) {
      const cookieHeader = context.headers.cookie;
      if (cookieHeader) {
        const cookies = cookieHeader.split(';');
        context.cookie = {};
        cookies.forEach(function (item) {
          const crumbs = item.split('=');
          if (crumbs.length > 1) context.cookie[crumbs[0].trim()] = crumbs[1].trim();
        });
      }
      yield next();
    });

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })();
}

exports.default = cookie;
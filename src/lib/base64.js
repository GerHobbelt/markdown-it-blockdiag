let b64chars
    = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
let b64tab = function (bin) {
  let t = {};
  for (let i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
  return t;
}(b64chars);

let sub_toBase64 = function (m) {
  let n = (m.charCodeAt(0) << 16)
          | (m.charCodeAt(1) <<  8)
          | (m.charCodeAt(2));
  return b64chars.charAt(n >>> 18)
         + b64chars.charAt((n >>> 12) & 63)
         + b64chars.charAt((n >>>  6) & 63)
         + b64chars.charAt(n         & 63);
};

let toBase64 = function (bin) {
  if (bin.match(/[^\x00-\xFF]/)) throw 'unsupported character found';
  let padlen = 0;
  while (bin.length % 3) {
    bin += '\0';
    padlen++;
  }
  let b64 = bin.replace(/[\x00-\xFF]{3}/g, sub_toBase64);
  if (!padlen) return b64;
  b64 = b64.substr(0, b64.length - padlen);
  while (padlen--) b64 += '=';
  return b64;
};

// var btoa = exports.btoa || toBase64;
let btoa = toBase64;

let sub_fromBase64 = function (m) {
  let n = (b64tab[m.charAt(0)] << 18)
            |   (b64tab[m.charAt(1)] << 12)
            |   (b64tab[m.charAt(2)] <<  6)
            |   (b64tab[m.charAt(3)]);
  return String.fromCharCode(n >> 16)
        +  String.fromCharCode((n >>  8) & 0xff)
        +  String.fromCharCode(n        & 0xff);
};

let fromBase64 = function (b64) {
  b64 = b64.replace(/[^A-Za-z0-9\+\/]/g, '');
  let padlen = 0;
  while (b64.length % 4) {
    b64 += 'A';
    padlen++;
  }
  let bin = b64.replace(/[A-Za-z0-9\+\/]{4}/g, sub_fromBase64);
  if (padlen >= 2) { bin = bin.substring(0, bin.length - [ 0, 0, 2, 1 ][padlen]); }
  return bin;
};

// var atob = global.atob || fromBase64;
let atob = fromBase64;

let re_char_nonascii = /[^\x00-\x7F]/g;

let sub_char_nonascii = function (m) {
  let n = m.charCodeAt(0);
  return n < 0x800 ? String.fromCharCode(0xc0 | (n >>>  6))
                     + String.fromCharCode(0x80 | (n & 0x3f))
    :              String.fromCharCode(0xe0 | ((n >>> 12) & 0x0f))
                     + String.fromCharCode(0x80 | ((n >>>  6) & 0x3f))
                     + String.fromCharCode(0x80 |  (n         & 0x3f))
  ;
};

let utob = function (uni) {
  return uni.replace(re_char_nonascii, sub_char_nonascii);
};

let re_bytes_nonascii
    = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;

let sub_bytes_nonascii = function (m) {
  let c0 = m.charCodeAt(0);
  let c1 = m.charCodeAt(1);
  if (c0 < 0xe0) {
    return String.fromCharCode(((c0 & 0x1f) << 6) | (c1 & 0x3f));
  }
  let c2 = m.charCodeAt(2);
  return String.fromCharCode(
    ((c0 & 0x0f) << 12) | ((c1 & 0x3f) <<  6) | (c2 & 0x3f)
  );

};

let btou = function (bin) {
  return bin.replace(re_bytes_nonascii, sub_bytes_nonascii);
};

module.exports = exports = {
  fromBase64:fromBase64,
  toBase64:toBase64,
  atob:atob,
  btoa:btoa,
  utob:utob,
  btou:btou,
  encode:function (u) { return btoa(utob(u)); },
  encodeURI:function (u) {
    return btoa(utob(u)).replace(/[+\/]/g, function (m0) {
      return m0 === '+' ? '-' : '_';
    }).replace(/[=]+$/, '');
  },
  decode:function (a) {
    return btou(atob(a.replace(/[-_]/g, function (m0) {
      return m0 === '-' ? '+' : '/';
    })));
  }
};

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.keyCode = factory());
}(this, (function () { 'use strict';

  /**
   * keyCode Map 
   * */
  const keyCodeList = {

    back: 8,
    return: 13,
    control: 17,
    pause: 19, //Pause Break
    capital: 20, //Caps Lock
    space: 32,
    'page-up': 33,
    'page-down': 34,
    end: 35,
    home: 36,
    // left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    delete: 46,

    // A-Z 
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,

    lwin: 91, //左徽标键
    rwin: 92, //右徽标键
    apps: 93, //鼠标右键快捷键

    // 小键盘
    numpad0: 96,
    numpad1: 97,
    numpad2: 98,
    numpad3: 99,
    numpad4: 100,
    numpad5: 101,
    numpad6: 102,
    numpad7: 103,
    numpad8: 104,
    numpad9: 105,
    decimal: 110, // .
    multiply: 106,
    addition: 107,
    subtract: 109,
    divide: 111,
    // f1-f12
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,

    numlock: 144, //Num Lock
    scroll: 145 //Scroll Lock
  };

  var keyCode = {};
  /**
   * options:
   *  Upper: default false
   *  usrCode: change default keyCode
   */
  keyCode.install = function install(Vue, options) {
    let upper = options.Upper || null;
    let usrCode = options.usrCode || null;
    for(let [k,v] of Object.entries(usrCode)){
      if(typeof v==='string'){
        usrCode[k]=keyCodeList[v];
      }
    }
    let keyCodes = Object.assign(keyCodeList, usrCode);
    try {
      for (let [key, code] of Object.entries(keyCodes)) {
        if (upper) key = key.toUpperCase();
        Vue.config.keyCodes[key] = code;
      }
    } catch (e) {
      console.error(`vue-keyCode had a Error! it may not work as expected\n ${e}`);
    }
  };

  return keyCode;

})));

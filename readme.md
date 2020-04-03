# Vue-keyCode

## Intro
  
  用于Vue绑定事件中键盘自定义按键修饰符别名  
 >keyCode 的事件用法[已经被废弃了](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode)并可能不会被最新的浏览器支持

## Install
```
> npm install vue-keycode
```

## Useage
``` javascript
import keyCode from "vue-keycode"
import Vue from "vue"
Vue.use(keyCode[,options])
```
### [Example]('./test/index.html'):
``` html
<input @keyup.to-up="text=$event.keye+e.keyCode"/>
<p>{{text}}</p>  //expected: ArrowUp 38

Vue.use(keyCode,{
  usrCode:{
    // default 38 -> up
    "to-up":38
  }
})
```

## Options
|properties|default|intro|
|----------|-------|-----|
|upper|false|use capital letter as keyCode|
|usrCode|- |change default keyCode map|

## keyCode map
``` json
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
```

## Note
* 目前主流浏览器还是支持keyCode事件的，但以后不一定会支持
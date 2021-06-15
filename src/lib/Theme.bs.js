// Generated by ReScript, PLEASE EDIT WITH CARE

import * as CssJs from "bs-css-emotion/src/CssJs.bs.js";

var blueGradient = CssJs.linearGradient(CssJs.deg(180.0), {
      hd: [
        CssJs.pct(0.0),
        CssJs.hex("477BFF")
      ],
      tl: {
        hd: [
          CssJs.pct(100.0),
          CssJs.hex("306AFF")
        ],
        tl: /* [] */0
      }
    });

var Colors = {
  blue: "477BFF",
  white: "fff",
  gray1: "A6AABE",
  gray2: "AEB3C9",
  black: "14103D",
  lightBlue1: "E2EAFF",
  blueGradient: blueGradient
};

var small = CssJs.px(6);

var medium = CssJs.px(12);

var large = CssJs.px(16);

var Radius = {
  small: small,
  medium: medium,
  large: large
};

function make(value) {
  return CssJs.rem(value * 0.6);
}

var Spacing = {
  make: make
};

var fontFamily = {
  NAME: "custom",
  VAL: "'DM Sans', sans-serif"
};

export {
  Colors ,
  Radius ,
  Spacing ,
  fontFamily ,
  
}
/* blueGradient Not a pure module */

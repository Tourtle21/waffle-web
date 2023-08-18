(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./styles/Navbar.js

const Navbar = (external_styled_components_default()).div`
display: flex;
align-items:center;
justify-content:space-between;
background-color:rgb(255, 255, 255);
width:100vw;
height:70px;
z-index:1000;
box-shadow: 0px -5px 10px;
padding: 0px 40px;
box-sizing: border-box;
`;
/* harmony default export */ const styles_Navbar = (Navbar);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Nav.js






const Nav = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "nav",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_Navbar, {
      className: "navBar",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          id: "logo",
          children: "WaffleTech"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "links",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/design",
          children: /*#__PURE__*/jsx_runtime_.jsx("li", {
            href: "/design",
            className: "navlink",
            children: "Design & Development"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/marketing",
          children: /*#__PURE__*/jsx_runtime_.jsx("li", {
            href: "/marketing",
            className: "navlink",
            children: "Digital Marketing"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/seo",
          children: /*#__PURE__*/jsx_runtime_.jsx("li", {
            href: "/seo",
            className: "navlink",
            children: "SEO"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/branding",
          children: /*#__PURE__*/jsx_runtime_.jsx("li", {
            href: "/branding",
            className: "navlink",
            children: "Branding"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/contact",
          children: /*#__PURE__*/jsx_runtime_.jsx("li", {
            href: "/contact",
            className: "navlink",
            children: "Contact Us"
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "hamburger-container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "hamburger",
          children: ["V", /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            id: "hidden-list",
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/contact",
              children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                href: "/contact",
                className: "navlink",
                children: "Design & Development"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/contact",
              children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                href: "/contact",
                className: "navlink",
                children: "Digital Marketing"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/contact",
              children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                href: "/contact",
                className: "navlink",
                children: "SEO"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/contact",
              children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                href: "/contact",
                className: "navlink",
                children: "Contact Us"
              })
            })]
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const components_Nav = (Nav);
;// CONCATENATED MODULE: ./components/Footer.js



const Footer = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    children: "\xA9 2021 WaffleTech"
  });
};

/* harmony default export */ const components_Footer = (Footer);
;// CONCATENATED MODULE: ./components/Layout.js





const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "app",
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Nav, {}), children, /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
  });
};

/* harmony default export */ const components_Layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(components_Layout, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 2531:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9914:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(3456)));
module.exports = __webpack_exports__;

})();
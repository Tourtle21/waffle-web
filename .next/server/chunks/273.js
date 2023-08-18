"use strict";
exports.id = 273;
exports.ids = [273];
exports.modules = {

/***/ 9273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ContactForm)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@formspree/react"
var react_ = __webpack_require__(7075);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./styles/Form.js

const Form = (external_styled_components_default()).form`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:space-around;
    height:500px;
    width:90vw;
    color:black;
    position: relative;
    border-radius: 20px;
    right: -15vw;
    top: -100px;
  background-color: #f3f3f3;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 750px) {
    height:600px;
    border-radius: 0px;
    right: 0vw;
    width:100vw;
    padding:30px;
    box-sizing:border-box;
  }
  & > div{ & textarea{
    font-family: 'Roboto', sans-serif;
    padding:15px;
    height:70%;
    width: 35%;
  }
  & > h1 {
      margin: 0;
  }
}
`;
/* harmony default export */ const styles_Form = (Form);
// EXTERNAL MODULE: ./styles/Header.js
var Header = __webpack_require__(6444);
;// CONCATENATED MODULE: ./styles/Input.js

const Input = (external_styled_components_default()).input`
  color: black;
  font-size: .7em;
  margin: 10px;
  padding: 0.25em 1em;
  border: black;
  height: 30px;
  background-color: #F7f7f7;
  width: 70%;
  border-radius: 4px;
  border: 1px solid lightgrey;
  outline-color:grey;
  font-family: 'Roboto', sans-serif;
`;
/* harmony default export */ const styles_Input = (Input);
// EXTERNAL MODULE: ./styles/Button.js
var Button = __webpack_require__(2916);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/ContactForm.js









const ContactForm = props => {
  const [state, handleSubmit] = (0,react_.useForm)("xzbyewko");

  if (state.succeeded) {
    props.submit();
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_Form, {
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {
      children: "Let's Get Started"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "inputs",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "infoInputs",
        children: [/*#__PURE__*/jsx_runtime_.jsx(styles_Input, {
          id: "name",
          type: "name",
          name: "name",
          placeholder: "Name",
          required: true
        }), /*#__PURE__*/jsx_runtime_.jsx(styles_Input, {
          id: "phone number",
          type: "phone number",
          name: "phone number",
          placeholder: "Phone",
          required: true
        }), /*#__PURE__*/jsx_runtime_.jsx(styles_Input, {
          id: "email",
          type: "email",
          name: "email",
          placeholder: "Email",
          required: true
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.ValidationError, {
          prefix: "Email",
          field: "email",
          errors: state.errors
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
        rows: "10",
        cols: "30",
        id: "message",
        name: "message",
        placeholder: "Description"
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.ValidationError, {
        prefix: "Message",
        field: "message",
        errors: state.errors
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
      className: state.submitting ? "submitting" : "",
      type: "submit",
      disabled: state.submitting,
      children: state.submitting ? "Submitting" : "Submit"
    })]
  });
};

/* harmony default export */ const components_ContactForm = (ContactForm);

/***/ }),

/***/ 2916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Button = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
display: flex;
align-items:center;
justify-content: center;
color: white;
font-family: 'Roboto', sans-serif;
width: 35%;
height:35px;
outline:none;
background: rgb(129, 203, 162);
border: 2px solid rgb(129, 203, 162);
border-radius:10px;
cursor: pointer;
font-size: 15px;
margin: 15px;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ 6444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Header = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1)`
font-size:3em;
margin-bottom:40px;
font-family: 'Roboto', sans-serif;
& > h2 {
    font-size:.5em;
    margin-bottom:-40px;
}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ })

};
;
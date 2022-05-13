"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Summary_vue"],{

/***/ "./resources/js/components/Summary.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Summary.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Summary_vue_vue_type_template_id_df38e3ea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Summary.vue?vue&type=template&id=df38e3ea */ "./resources/js/components/Summary.vue?vue&type=template&id=df38e3ea");
/* harmony import */ var _Summary_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Summary.vue?vue&type=script&lang=js */ "./resources/js/components/Summary.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_danyo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "../../../node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_danyo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Summary_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Summary_vue_vue_type_template_id_df38e3ea__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Summary.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Summary.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Summary.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Summary_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Summary_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Summary.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Summary.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Summary.vue?vue&type=template&id=df38e3ea":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Summary.vue?vue&type=template&id=df38e3ea ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Summary_vue_vue_type_template_id_df38e3ea__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Summary_vue_vue_type_template_id_df38e3ea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Summary.vue?vue&type=template&id=df38e3ea */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Summary.vue?vue&type=template&id=df38e3ea");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Summary.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Summary.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    cartLineTotal: function cartLineTotal(item) {
      var amount = item.price * item.quantity;
      return amount.toLocaleString('eu', {
        style: 'currency',
        currency: 'EUR'
      });
    }
  },
  computed: {
    order: function order() {
      return this.$store.state.order;
    },
    orderQuantity: function orderQuantity() {
      return this.$store.state.order.products.reduce(function (acc, item) {
        return acc + item.quantity;
      }, 0);
    },
    orderTotal: function orderTotal() {
      var amount = this.$store.state.order.products.reduce(function (acc, item) {
        return acc + item.price * item.quantity;
      }, 0);
      return amount.toLocaleString('eu', {
        style: 'currency',
        currency: 'EUR'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Summary.vue?vue&type=template&id=df38e3ea":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Summary.vue?vue&type=template&id=df38e3ea ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "w-full"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"lg:w-2/3 w-full mx-auto mt-8 overflow-auto\"><!--            &lt;h2--><!--                class=&quot;text-sm title-font text-gray-500 tracking-widest&quot;--><!--                v-text=&quot;&#39;Transaction ID: &#39; + order.transaction_id&quot;&gt;--><!--            &lt;/h2&gt;--><h5 class=\"text-gray-900 text-3xl title-font font-medium mb-4\">Thank you for your purchase</h5><table class=\"table-auto w-full text-left whitespace-no-wrap\"><!--                &lt;thead&gt;--><!--                &lt;tr&gt;--><!--                    &lt;th class=&quot;px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl&quot;&gt;Item&lt;/th&gt;--><!--                    &lt;th class=&quot;px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200&quot;&gt;Quantity&lt;/th&gt;--><!--                    &lt;th class=&quot;px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200&quot;&gt;Price&lt;/th&gt;--><!--                &lt;/tr&gt;--><!--                &lt;/thead&gt;--><!--                &lt;tbody&gt;--><!--                &lt;tr v-for=&quot;item in order.products&quot; :key=&quot;item.id&quot;&gt;--><!--                    &lt;td class=&quot;p-4&quot; v-text=&quot;item.name&quot;&gt;&lt;/td&gt;--><!--                    &lt;td class=&quot;p-4&quot; v-text=&quot;item.quantity&quot;&gt;&lt;/td&gt;--><!--                    &lt;td class=&quot;p-4&quot; v-text=&quot;cartLineTotal(item)&quot;&gt;&lt;/td&gt;--><!--                &lt;/tr&gt;--><!--                &lt;tr&gt;--><!--                    &lt;td class=&quot;p-4 font-bold&quot;&gt;Total Amount&lt;/td&gt;--><!--                    &lt;td class=&quot;p-4 font-bold&quot; v-text=&quot;orderQuantity&quot;&gt;&lt;/td&gt;--><!--                    &lt;td class=&quot;p-4 font-bold&quot; v-text=&quot;orderTotal&quot;&gt;&lt;/td&gt;--><!--                &lt;/tr&gt;--><!--                &lt;/tbody&gt;--></table></div>", 1);

var _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _hoisted_3);
}

/***/ })

}]);
/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/contentscript.ts ***!
  \******************************/
const getPriceText = () => {
    var _a;
    const tag = document.querySelector('div.ds-summary-row h4 span');
    return (_a = tag === null || tag === void 0 ? void 0 : tag.innerText) !== null && _a !== void 0 ? _a : 'No data';
};
const getRentText = () => {
    var _a;
    const tag = document.querySelector('div#ds-rental-home-values div.ds-expandable-card-section-default-padding div div span');
    return (_a = tag === null || tag === void 0 ? void 0 : tag.innerText) !== null && _a !== void 0 ? _a : 'No data';
};
chrome.runtime.onMessage.addListener((msg, sender, callback) => {
    callback(`Price: ${getPriceText()}\nRent: ${getRentText()}`);
});

/******/ })()
;
//# sourceMappingURL=contentscript.js.map
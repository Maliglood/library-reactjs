"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
var BooksView = (function (_super) {
    __extends(BooksView, _super);
    function BooksView() {
        _super.apply(this, arguments);
    }
    BooksView.prototype.render = function () {
        return React.createElement("div", {className: "page-header"}, React.createElement("div", null, " ", this.props.testHtml, " "), React.createElement("div", {id: "books-list"}));
    };
    return BooksView;
}(React.Component));
exports.BooksView = BooksView;
//# sourceMappingURL=booksView.js.map
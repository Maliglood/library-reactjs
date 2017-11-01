"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../../typings/react/react.d.ts" />
var React = require("react");
var TodoItem = (function (_super) {
    __extends(TodoItem, _super);
    function TodoItem() {
        var _this = _super.call(this) || this;
        _this.removeItem = _this.removeItem.bind(_this);
        return _this;
    }
    TodoItem.prototype.removeItem = function () {
        this.props.onRemove(this.props.item);
    };
    TodoItem.prototype.render = function () {
        return (React.createElement("li", null,
            React.createElement("span", null,
                " ",
                this.props.item.description,
                " "),
            React.createElement("button", { onClick: this.removeItem }, "delete")));
    };
    return TodoItem;
}(React.Component));
exports.TodoItem = TodoItem;
//# sourceMappingURL=todoItem.js.map
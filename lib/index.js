"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (middleware) {
    var hasBeenTriggered = false;

    return function (store) {
        return function (next) {
            return function (action) {
                next(action);

                if (!hasBeenTriggered) {
                    hasBeenTriggered = true;
                    middleware(store.dispatch);
                }
            };
        };
    };
};
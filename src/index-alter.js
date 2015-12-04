(function(name, definition) {

    if (typeof define === 'function' && define.amd) { // AMD
        define(name,[],definition);
    } else if (typeof module !== 'undefined' && module.exports) { // Node.js
        module.exports = definition();
    } else { // Browser
        var theModule = definition(),
            global = this;
            old = global[name];

        theModule.noConflict = function() {
            global[name] = old;
            return theModule;
        };

        global[name] = theModule;
    }
})('JsPackageSample', function() {
    'use strict';

    var userAgent;

    return {
        setUserAgent: function(userAgent) {
            this.userAgent = userAgent || navigator.userAgent;
        },

        getUserAgent: function() {
            return this.userAgent;
        }
    };
});

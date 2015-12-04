(function (window, undefined) {
    'use strict';

    var JsPackageSample = function () {

        var userAgent;

        if (!(this instanceof JsPackageSample)) {
            return new JsPackageSample();
        }

        this.setUserAgent = function(userAgent) {
            this.userAgent = userAgent || navigator.userAgent;
        };

        this.getUserAgent = function () {
            return this.userAgent;
        };

        return this;
    };

    // check js environment
    if (typeof exports  !== 'undefined') {
        // nodejs env
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = JsPackageSample;
        }
        exports.JsPackageSample = JsPackageSample;
    } else {
        // requirejs env (optional)
        if (typeof define  === 'function' && define.amd) {
            define(function () {
                return JsPackageSample;
            });
        } else {
            // browser env
            window.JsPackageSample = JsPackageSample;
        }
    }
})(typeof window === 'object' ? window : this);

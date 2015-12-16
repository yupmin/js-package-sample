/**
 * Copyright (c) 2015
 * js-package-sample - Javascript Package Sample
 * Built on 2015-12-16
 * 
 * @version 0.0.5
 * @link https://github.com/yupmin/js-package-sample.git
 * @license MIT
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals (root is window)
        root.JsPackageSample = factory(root.jQuery);
    }
}(this, function (jQuery) {
    'use strict';

    var userAgent;

    return {
        getUserAgent: function() {
            return userAgent;
        },

        setUserAgent: function(ua) {
            userAgent = ua;
        }
    };
}));

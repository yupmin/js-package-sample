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

    var userAgent,
        repeater;

    return {
        getUserAgent: function() {
            return userAgent;
        },

        setUserAgent: function(ua) {
            userAgent = ua;
        },

        timerGetUserAgent: function(cb) {
            setTimeout(function(self) {
                try {
                    cb(null, self.getUserAgent());
                } catch (err) {
                    cb(err);
                }
            }, 1000, this);
        },

        getRepeaterId: function() {
            return repeater;
        },

        repeaterGetUserAgent: function(cb) {
            repeater = setInterval(function(self) {
                try {
                    cb(null, self.getUserAgent());
                } catch (err) {
                    cb(err);
                }
            }, 1000, this);
        },
    };
}));

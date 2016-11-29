/**
 * global event bus for communication between web app modules
 */
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : 
    global.gEvent = factory();
})(this, function() {
    /**
     * map of all events
     */
    var _events = {};

    var _uid = 0; //unique token id, increment from 0

    var _getUid = function() {
        return ++_uid;
    };

    var _nil = function(arg) {
        return arg === undefined || arg === null;
    };

    var _isFunc = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Function]';
    };

    // add event
    var on = function(type, callback) {
        if (_nil(type) || _nil(callback)) {
            console.log('subscribe event failed: ' + type + ',' + callback);
            return;
        }

        if (!_isFunc(callback)) {
            console.log('subscribe failed: callback is not a function');
            return;
        }

        var uid = _getUid();

        _events[uid] = {
            type: type,
            callback: callback
        };

        return uid;
    };

    // remove event by event type
    var off = function(type) {
        if (_nil(type)) {
            return;
        }

        for (var uid in _events) {
            if (_events[uid].type === type) {
                delete _events[uid];
            }
        }
    };

    /**
     * remove event by uid
     */
    var offOne = function(uid) {
        if (_nil(uid)) {
            return;
        }

        delete _events[uid];
    };

    // trigger
    var emit = function(type, params) {
        if (_nil(type)) {
            console.log('publish failed, invalid type');
            return;
        }

        for (var key in _events) {
            var subject = _events[key];
            if (subject.type === type) {
                var func = subject['callback'];
                func && func(params);
            }
        }
    };

    // clear
    var clear = function() {
        for (var key in _events) {
            delete _events[key];
        }
    };

    return {
        on: on,
        off: off,
        offOne: offOne,
        emit: emit,
        clear: clear
    };
});

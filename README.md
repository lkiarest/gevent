A simple eventbus for webapp.

usage:

CMD:
```
// module A
var ge = require('gevent');
ge.on('dataChange', item => drawData(item));

// module B
var ge = require('gevent');
doAsyncRequest().then(res => ge.emit('dataChange', res));
```

Js Lib:
```
<script src='./gevent/index.js'></script>
<script>
    // listen
    gEvent.on('dataChange', item => drawData(item));
    // fire
    doAsyncRequest().then(res => gEvent.emit('dataChange', res));
</script>
```

apis:

- __on(eventName, callback)__
  subscribe event

- __off(eventName)__
  unsubscribe event

- __emit(eventName, params)__
  trigger event with transition data

- __clear()__
  clear all events subscribed
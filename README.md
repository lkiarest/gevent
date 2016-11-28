A simple eventbus for webapp.

usage:

```
// module A
var ge = require('gevent');
ge.on('dataChange', item => drawData(item));

// module B
var ge = require('gevent');
doAsyncRequest().then(res => ge.emit('dataChange', res));
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
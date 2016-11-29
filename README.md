A simple eventbus for webapp.

usage:

CMD:
```
// module A
var ge = require('gevent');
var uid1 = ge.on('dataChange', item => drawData(item));
var uid2 = ge.on('dataChange', item => drawData2(item));

// remove all by event type
ge.off('dataChange');
// or remove one by event id if you have duplicate event name registered
ge.offOne(uid1);

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
  unsubscribe all event by event name

- __offOne(eventId)__
  unsubscribe one event by event id

- __emit(eventName, params)__
  trigger event with transition data

- __clear()__
  clear all events subscribed
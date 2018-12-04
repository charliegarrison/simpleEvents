var attachPoint;

if(typeof global !== "undefined") {
  attachPoint = global;
}
else{
  attachPoint = window;
}

attachPoint.ee = {
  events: {},
  on: function(eventName,cb,context) {
    if(ee.events[eventName]) {
      ee.events[eventName].push({
        cb: cb,
        context: context
      });
    }
    else {
      ee.events[eventName] = [{
        cb: cb,
        context: context
      }];
    }

    return function () {
      var ind = ee.events[eventName].indexOf(cb);
      ee.events[eventName].splice(ind,1);
    };
  },
  emit: function(evName,data) {
    var ev = ee.events[evName];

    if(ev) {
      ev.forEach(function(listener) {
        if(listener.context) {
          listener.cb.call(listener.context, data);
        }
        else {
          listener.cb(data);
        }
      });
    }
  }
};

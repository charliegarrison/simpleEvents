var ee = {
  events: {},
  on: function(eventName,cb) {
    if(ee.events[eventName]) {
      ee.events[eventName].push(cb);
    }
    else {
      ee.events[eventName] = [cb];
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
        listener(data);
      });
    }
  }
};

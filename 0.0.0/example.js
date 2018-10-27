var evName = "testEvent";
var u1=ee.on(evName,function(data){console.log(`Listener 1 here, got ${data}`);});
var u2=ee.on(evName,function(data){console.log(`Listener 2 here, got ${data}`);});
var u3=ee.on(evName,function(data){
  console.log(`Listener 3 here, I only wanted to run once. And I got ${data}`);
  u3();
});
ee.emit(evName,"1st message");
ee.emit(evName,{name: "json data works fine too"});
u1();//unsubscribe listener 1
ee.emit(evName,"3rd message");

//задача 1
function cachingDecoratorNew(func) {
  let cache = [];

    function wrapper(...args) {
      const hash = args.join(','); 
      let objectInCache = cache.find((item) => item.hash === hash); 
      
      if (objectInCache) { 
        console.log("Из кэша: " + objectInCache.result); 
        return "Из кэша: " + objectInCache.result; 
      }

      let result = func.call(this, ...args); 
      cache.push({ hash, result });
        if (cache.length > 5) { 
         cache.shift() 
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;   
      }   
  return wrapper;
}
  
//задача 2
  function debounceDecoratorNew(func) {
    let timerID = null;
    let repeatCall = false;
  
    function wrapper(...rest) {
      clearTimeout(timerID);
      timerID = setTimeout(() => {
        repeatCall = false;
        return func.call(...rest);
      });
      if (!repeatCall) {
        repeatCall = true;
        func.call(...rest);
      }
    }
    return wrapper;
  }

 //задача 3 
function debounceDecorator2(func, ms) {
    let timerId;
    function wrapperSend(...args){
        clearTimeout(timerId);
        if(wrapperSend.count === undefined){
            wrapperSend.count = 1;
            setTimeout(() => {
                return func.call()
            },0) 
            }
        else {
            wrapperSend.count ++;
            timerId = setTimeout(() => {
                return func.call()
            },ms)
        }
    }
    return wrapperSend;
}
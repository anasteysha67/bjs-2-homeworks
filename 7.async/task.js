
class AlarmClock {
    constructor() {
       this.alarmCollection = [];
       this.timerId = null;
    }
    
    addClock(time, callback, id) {
       if (id === undefined) {
          throw new Error("Параметр ID не передан");
       } else if (this.alarmCollection.some(element => element.id === id)) {
          console.error("ID существует");
          return;
       }
       this.alarmCollection.push({id, time, callback})
    }
      
    removeClock(id) {
       if (this.alarmCollection.some(element => element.id === id)) {
          this.alarmCollection.splice(this.alarmCollection.findIndex(element => element.id === id), 1)
          return true
       } else return false
    }
    
    getCurrentFormattedTime() {
        const timeHoursMinutesNow = (new Date().toTimeString()).slice(0,5);
         return  timeHoursMinutesNow;
     }
    
    start() {
       let examination = checkClock.bind(this);  
       function checkClock(AlarmClock) {
          if (AlarmClock.time === this.getCurrentFormattedTime()) AlarmClock.func();
       }
       if (!this.timerId) this.timerID = setInterval(() => this.alarmCollection.forEach(element => examination(element)), 500);
    }
    
    stop() {
       if (this.tierId === null) {
          return;
       }
       clearInterval(this.timerID);
       this.timerID = null;
    }
    
    printAlarms() {
       console.log("Будильник заведен:" + this.alarmCollection.length);
       this.alarmCollection.forEach((clok) => console.log(clok.time, clok.id));
    }
    
    clearAlarms() {
       this.stop();
       this.alarmCollection = [];
    }
 }
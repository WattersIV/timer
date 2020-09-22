const timers = process.argv.slice(2) 
timers.sort((a, b) => a - b)  
onlyInts()
for (const time of timers) { 
  setTimeout(() => { 
    process.stdout.write('\x07');
    //console.log('ding');
  }, waitTime(time))        
}

function waitTime (time) {
  if (timers.indexOf(time) === 0) {
    return time * 1000
  } else {
    const multiplier = time - timers[timers.indexOf(time) - 1]
    return multiplier * 1000       
  }
} 

function onlyInts () {
  for (const time of timers)  
    if (time < 0 || isNaN(time)) {
      timers.splice(timers.indexOf(time), 1)
    }  
  return timers
}

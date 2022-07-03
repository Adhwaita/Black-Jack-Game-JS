 //Create the function that logs out all the sum ofthe laps in the race.
 
 let lap1 = 35
 let lap2 = 32
 let lap3 = 38
  totalLaps = lap1+lap2+lap3
 console.log(totalLaps)

 //Method:1
   function laps() {
      console.log(totalLaps)

 }

 //Method:2
function lapTime() {
     console.log(lap1 + lap2 +lap3)
  }
  lapTime()

//Create a function that increments the laps completed with one
//Run it three times.

 let lapCompleted = 0

 function lapsCompleted() {
     lapCompleted = lapCompleted + 1
 }

 lapsCompleted()
 lapsCompleted()
 lapsCompleted()

 console.log(lapCompleted)
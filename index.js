//const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//calculate the total number of battery batches.
// function totalBatteries(batteries) {
//     const batteryBatches = batteries.length;
//   }



const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function(total, batches){
  return batches + total
  }
)

// const batteriesInBatch
// const batteries
// const batteryBatches
// const totalBatteries
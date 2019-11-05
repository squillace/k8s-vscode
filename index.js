'use strict';

function startReticulating() {
  let operationId = Math.random();
  console.log(`[${new Date()}] [OID:${operationId}] Reticulating splines...`);
  setTimeout(() => onReticulated(operationId), Math.random() * 10000);
  setTimeout(() => startReticulating(), Math.random() * 10000);
}

function onReticulated(operationId) {
  const message = Math.random() < 0.5 ?
    "Reticulation complete!  Please collect your splines." :
    "Reticulation failed!  This can only be due to a glitch in the matrix!";
  console.log(`[${new Date()}] [OID:${operationId}] ${message}`);
}

startReticulating();
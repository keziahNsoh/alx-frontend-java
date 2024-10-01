export default function taskBlock(trueOrFalse) {
  let task = false;  // Change var to let
  let task2 = true;  // Change var to let

  if (trueOrFalse) {
    task = true;      // No need to redeclare; just assign
    task2 = false;    // No need to redeclare; just assign
  }

  return [task, task2];
}


export default function taskBlock(trueOrFalse) {
  const task = false;  // Change var to let
  const task2 = true;  // Change var to let

  if (trueOrFalse) {
    const task3 = true;      // No need to redeclare; just assign
    const task4 = false;    // No need to redeclare; just assign
  }

  return [task, task2];
}


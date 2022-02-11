/**
 * Sorts the array by priority and name
 * @param arr Array of Tasks
 * @returns sorted Array
 */
export const sortByPriorityName = (arr: any) => {
  arr.sort(
    (a: any, b: any) =>
      a.isCompleted - b.isCompleted ||
      b.priority - a.priority ||
      a.taskName.localeCompare(b.taskName)
  );

  return arr;
};

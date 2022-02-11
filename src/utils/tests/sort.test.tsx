import { sortByPriorityName } from "..";

const fakeTasks = [
  { id: 1, taskName: "A Test task 1", priority: true, isCompleted: true },
  { id: 2, taskName: "B Test task 2", priority: true, isCompleted: true },
  { id: 3, taskName: "C Test task 3", priority: false, isCompleted: false },
  { id: 4, taskName: "D Test task 3", priority: true, isCompleted: false },
  { id: 5, taskName: "E Test task 4", priority: false, isCompleted: true },
];

test("sortByPriorityName", () => {
  const expectedFirstTask = {
    id: 4,
    taskName: "D Test task 3",
    priority: true,
    isCompleted: false,
  };
  const expectedLastTask = {
    id: 5,
    taskName: "E Test task 4",
    priority: false,
    isCompleted: true,
  };
  const sorted = sortByPriorityName(fakeTasks);
  expect(sorted[0]).toEqual(expectedFirstTask);
  expect(sorted[4]).toEqual(expectedLastTask);
});

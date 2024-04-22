import { v4 as uuid } from "uuid";

const itemsFromBackend = [
  { id: uuid(), task: "First task", task_num: "T57", due_date: "2021-01-01", status: "low" , assignee: "Haseem ul Haq"},
  { id: uuid(), task: "Second task",  task_num: "T57", due_date: "2021-01-01", status: "low" , assignee: "Haseem ul Haq"},
  { id: uuid(), task: "Third task", task_num: "T57", due_date: "2021-01-01", status: "low" , assignee: "Haseem ul Haq" },
  { id: uuid(), task: "Fourth task" , task_num: "T57", due_date: "2021-01-01", status: "low" , assignee: "Haseem ul Haq"},
  { id: uuid(), task: "Fifth task" , task_num: "T57", due_date: "2021-01-01", status: "low" , assignee: "Haseem ul Haq"},
];

export const status = {
  [uuid()]: {
    name: "Planned",
    color: "#19A3E4",
    items: itemsFromBackend,
  },
  [uuid()]: {
    name: "In Progress",
    color: "#FFA500",
    items: [],
  },
  [uuid()]: {
    name: "Completed",
    color: "#00FF00",
    items: [],
  },
  [uuid()]: {
    name: "Blocked",
    color: "red",
    items: [],
  },
};

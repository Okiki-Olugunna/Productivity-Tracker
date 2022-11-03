import React from "react";
import Task from "./Task";

// const tasks = [
//   {
//     id: 1,
//     text: "DeFi Integration",
//     day: "Monday 6th November",
//     reminder: true,
//   },
//   {
//     id: 2,
//     text: "Meeting with Client",
//     day: "Friday 11th November",
//     reminder: true,
//   },
//   {
//     id: 2,
//     text: "Trip to Bora Bora",
//     day: "Thursday 15th December",
//     reminder: false,
//   },
// ];

export const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

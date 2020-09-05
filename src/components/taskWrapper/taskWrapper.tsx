import React from "react";
import "./taskWrapper.scss";

import TaskCard from "../taskCard/taskCard";
import TextTag from "../textTag/textTag";
import IconTag from "../iconTag/iconTag";

const taskCards = [
  {
    id: "checkbox-1",
    task: "Better quality favicon",
    labelColor: "#FF6161",
    labelText: "Design",
    textTags: [],
    iconTags: []
  },
  {
    id: "checkbox-2",
    task: "Social accounts setup",
    labelColor: "#90C335",
    labelText: "Marketing",
    textTags: [
      {
        text: "12:30"
      }
    ],
    iconTags: [
      {
        icon: "watch_later"
      }
    ]
  },
  {
    id: "checkbox-3",
    task: "Upgrade plan page",
    labelColor: "#985BFF",
    labelText: "Development",
    textTags: [
      {
        text: "14:30"
      }
    ],
    iconTags: [
      {
        icon: "watch_later"
      }
    ]
  },
  {
    id: "checkbox-4",
    task: "Email templates",
    labelColor: "#FF6161",
    labelText: "Design",
    textTags: [
      {
        text: "6"
      }
    ],
    iconTags: [
      {
        icon: "attachment"
      }
    ]
  }
];

export default function TaskWrapper() {
  return (
    <div className="task-wrapper">
      {taskCards.map((taskCard, index) => (
        <TaskCard
          key={index}
          id={taskCard.id}
          task={taskCard.task}
          labelColor={taskCard.labelColor}
          labelText={taskCard.labelText}
        >
          {taskCard.iconTags.map((iconTag, index) => (
            <IconTag key={index} icon={iconTag.icon} />
          ))}
          {taskCard.textTags.map((textTag, index) => (
            <TextTag key={index} text={textTag.text} />
          ))}
        </TaskCard>
      ))}
    </div>
  );
}

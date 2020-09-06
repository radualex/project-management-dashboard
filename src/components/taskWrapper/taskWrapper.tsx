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
    tags: []
  },
  {
    id: "checkbox-2",
    task: "Social accounts setup",
    labelColor: "#90C335",
    labelText: "Marketing",
    tags: [
      {
        text: "12:30",
        icon: "watch_later"
      }
    ]
  },
  {
    id: "checkbox-3",
    task: "Upgrade plan page",
    labelColor: "#985BFF",
    labelText: "Development",
    tags: [
      {
        text: "14:30",
        icon: "watch_later"
      }
    ]
  },
  {
    id: "checkbox-4",
    task: "Email templates",
    labelColor: "#FF6161",
    labelText: "Design",
    tags: [
      {
        text: "6",
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
          key={`task-${index}`}
          id={taskCard.id}
          task={taskCard.task}
          labelColor={taskCard.labelColor}
          labelText={taskCard.labelText}
        >
          {taskCard.tags.map((tag, index) => (
            <React.Fragment key={`taskCardfrag-${index}`}>
              <IconTag key={`i-${index}`} icon={tag.icon} />
              <TextTag key={`t-${index}`} text={tag.text} />
            </React.Fragment>
          ))}
        </TaskCard>
      ))}
    </div>
  );
}

import React from "react";
import "./iconTag.scss";

interface IconTagProps {
  icon: string;
}

export default function IconTag(props: IconTagProps) {
  return <span className="material-icons-outlined iconTag">{props.icon}</span>;
}

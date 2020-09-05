import React from "react";
import "./textTag.scss";

interface TextTagProps {
  text: string;
}
export default function TextTag(props: TextTagProps) {
  return <span className="textTag">{props.text}</span>;
}

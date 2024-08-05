import { MouseEventHandler, ReactElement } from "react";

interface IButtonProps {
  label: string;
  onClick?: () => void;
  type: "button" | "submit";
}

export function Button(props: IButtonProps): ReactElement {
  return (
    <button className="button" onClick={props.onClick} type={props.type}>
      {props.label}
    </button>
  );
}

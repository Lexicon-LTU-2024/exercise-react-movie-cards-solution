import { ChangeEventHandler, ReactElement } from "react";
import { IOption } from "../interfaces";

interface ISelectProps {
  label: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options: IOption[];
  value: string;
}

export function Select(props: ISelectProps): ReactElement {
  return (
    <div className="select">
      <label className="label" htmlFor={props.label}>
        {props.label}
      </label>
      <select
        className="select-element"
        id={props.label}
        onChange={props.onChange}
        value={props.value}
      >
        {props.options.map((o) => (
          <option key={o.id} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

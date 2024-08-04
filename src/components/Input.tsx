import { ChangeEventHandler, ReactElement } from "react";

interface IInputProps {
  label: string;
  type: "text" | "textarea";
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value: string;
}

export function Input(props: IInputProps): ReactElement {
  const classes = props.type === "textarea" ? "input textarea" : "input";

  const renderInput = (): ReactElement => {
    if (props.type === "textarea") {
      return (
        <textarea
          className="input-element"
          id={props.label}
          onChange={props.onChange}
          rows={7}
          value={props.value}
        ></textarea>
      );
    }

    return (
      <input
        className="input-element"
        id={props.label}
        onChange={props.onChange}
        type="text"
        value={props.value}
      />
    );
  };

  return (
    <div className={classes}>
      <label className="label" htmlFor={props.label}>
        {props.label}
      </label>
      {renderInput()}
    </div>
  );
}

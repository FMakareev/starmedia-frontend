import * as React from 'react';
import Text from "./Text/Text";

interface ICheckboxProps {
  [prop: string]: any
}

const Checkbox: React.FC<ICheckboxProps> = (
  {
    label,
    input,
    meta: {
      touched,
      error,
      submitError,
    },
  }
) => {
  return (
    <div>
      <label className={'checkbox_container'}>
        <input {...input} type="checkbox" className={'checkbox_checkbox'}/>
        <div className="checkbox_box">
          <img
            src="/static/images/checkbox-check.svg"
            className={'checkbox_check'}
            alt=""
          />
        </div>
        <div className="checkbox_label">
          {label}
        </div>
      </label>
      {
        touched && (error || submitError) &&
				<Text
					className={'mt-8'}
					type={'alert'}
					font={'root'}
				>
          {error || submitError}
				</Text>
      }
    </div>
  );
};
Checkbox.defaultProps = {
  input: {
    value: false,
    checked: false,
  },
  meta: {
    touched: false,
    error: false,
    submitError: false,
  }
}
export default Checkbox;

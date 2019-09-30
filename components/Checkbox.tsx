import * as React from 'react';

interface ICheckboxProps {
  [prop: string]: any
}

const Checkbox: React.FC<ICheckboxProps> = (
  {
    label,
    input,
  }
) => {
  return (
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

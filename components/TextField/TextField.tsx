import * as React from 'react';
import Text from "../Text/Text";
import classNames from 'classnames';

interface ITextFieldProps {
  [prop: string]: any
}

const TextField: React.FC<ITextFieldProps> = (
  {
    placeholder,
    disabled,
    input,
    type,
    label,
    meta: {
      touched,
      error,
      submitError,
    },
    icon
  }: any
) => {
  return (
    <div className={'text-field_wrapper'}>
      {
        label &&
				<Text className={'text-field_label'} font={'root'} mb={8}>
          {label}
				</Text>
      }
      <div className={'text-field_container'}>
        <input
          disabled={disabled}
          placeholder={placeholder}
          className={classNames('text-field_input', {
            'text-field_input--icon': !!(icon),
          })}
          type={type}
          name=""
          id=""
          {...input}
        />
        {
          icon && <div className={'text-field_icon'}>
            {
              icon
            }
					</div>
        }


      </div>
      {
        touched && error || submitError &&
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

TextField.defaultProps = {
  meta: {
    touched: false,
    error: false,
    submitError: false,
  }
}

export default TextField;

import * as React from 'react';
import SlimSelect from 'slim-select'
import Text from "../Text/Text";

interface ISelectSlimProps {
  label?: string,
  placeholder?: string,
  options?: any[],

  [prop: string]: any
}

const SelectSlim: React.FC<ISelectSlimProps> = (
  {
    label,
    placeholder,
    options,
    style,
    input: {
      value,
      onChange
    }
  }
) => {
  const Ref = React.useRef(null);


  React.useEffect(() => {
    new SlimSelect({
      showSearch: false,
      // @ts-ignore
      select: Ref.current,
      onChange:(event:any)=>{
        onChange(event.value)
      }
    })


  }, []);

  return (<div style={style}>
    <Text font={'root'} mb={8}>
      {label}
    </Text>
    <select id='select' ref={Ref}>
      {
        placeholder &&
				<option data-placeholder={!!(placeholder)}>
          {placeholder}
				</option>
      }
      {
        options && options.map((option: any) => (<option
          value={option.value}
          selected={option.value === value}
        >{option.label}</option>))
      }
    </select>
  </div>)
};

export default SelectSlim;

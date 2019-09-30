import * as React from 'react';
import DefaultSelect from 'react-select';
import Text from "../Text/Text";

interface ISelectProps {
  [prop: string]: any
}

const SelectStyle: any = (style: any)=>({
  container: (styles: any,) => ({
    ...styles,
    display: 'inline-block',
    width: 'auto',
    minWidth: '144px',
    ...style.container,
  }),
  control: (styles: any, {menuIsOpen, isFocused}: any) => {
    return ({
      ...styles,
      border: "none",
      backgroundColor: "#F0F0F0",
      borderRadius: 0,
      height: "56px",
      cursor: 'pointer',
      borderTop: '1px solid transparent',
      borderBottom: '1px solid transparent',
      borderLeft: '1px solid transparent',
      borderRight: '1px solid transparent',
      ':hover': {
        borderColor: '#D6D6D6',
      },
      ...(isFocused ? {
        // borderColor: 'transparent',
        boxShadow: 'none',
      } : {}),
      ...(menuIsOpen ? {
        borderTop: '1px solid #D6D6D6',
        borderLeft: '1px solid #D6D6D6',
        borderRight: '1px solid #D6D6D6',
        borderBottom: '1px solid transparent !important',
      } : {}),
    })
  },
  valueContainer: (styles: any) => ({
    ...styles,
    paddingLeft: '16px',
  }),
  placeholder: (styles: any) => ({
    ...styles,
    color: '#202020',
    opacity: 0.5
  }),
  singleValue: (styles: any) => ({
    ...styles,
    color: '#202020',
  }),
  option: (styles: any, {isSelected}: any) => ({
    ...styles,
    padding: '8px 16px',
    fontFamily: 'PTRootUIWebMedium',
    fontSize: '16px',
    lineHeight: '24px',
    cursor: 'pointer',
    ':hover': {
      color: '#ED1C24',
      backgroundColor: "transparent",
    },
    ...(isSelected ? {
      backgroundColor: "transparent",
      color: '#202020',
      opacity: 0.5,

      ':hover': {
        color: '#202020',
        opacity: 0.5,
      },
    } : {})
  }),
  menuList: (styles: any) => ({
    ...styles,
    padding: '8px 0',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorContainer: (styles: any) => ({
    ...styles,
    color: '#202020',
  }),
  menu: (styles: any) => ({
    ...styles,
    margin: 0,
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    backgroundColor: "#F0F0F0",
    borderBottom: '1px solid #D6D6D6',
    borderLeft: '1px solid #D6D6D6',
    borderRight: '1px solid #D6D6D6',
  }),

});

class Select extends React.Component<any, ISelectProps> {
  state: any = {
    selectedOption: null,
  };

  constructor(props: any) {
    super(props);
    this.state = this.initialState;
  }


  get initialState() {
    const {input:{value}} = this.props;
    return {
      selectedOption: value,
    }
  }


  handleChange = (selectedOption: any) => {
    const {input} = this.props;
    this.setState({selectedOption});

    if (input) {
      input.onChange(selectedOption);
    }
  };

  render() {
    const {selectedOption} = this.state;
    const {label, options, placeholder, styles} = this.props;
    return (
      <div>
        <Text font={'root'} mb={8}>
          {label}
        </Text>
        <DefaultSelect
          placeholder={placeholder}
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          styles={SelectStyle(styles)}
          defaultMenuIsOpen={false}
        />
      </div>
    );
  }
}

export default Select;

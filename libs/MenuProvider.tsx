import * as React from "react";

const MenuContext = React.createContext({
  menuIsActive: false,
  toggleMenu: () => {
  }
});


export const MenuConnect = (WrapperElement: any) => (props: any) => (
  <MenuContext.Consumer>
    {
      (value: any) => <WrapperElement {...value} {...props}/>
    }
  </MenuContext.Consumer>
);

export class MenuProvider extends React.Component<any, any> {
  state = {
    menuIsActive: false,
  }
  toggleMenu = (_isActive?: boolean) => {
    if (typeof _isActive === "boolean") {
      this.setState(() => ({
        menuIsActive: _isActive,
      }));
    } else {
      this.setState(() => ({
        menuIsActive: !this.state.menuIsActive
      }));
    }
  };


  render() {
    return (<MenuContext.Provider
      value={{
        menuIsActive: this.state.menuIsActive,
        toggleMenu: this.toggleMenu,
      }}

      {
        ...this.props
      }
    />)
  }
}

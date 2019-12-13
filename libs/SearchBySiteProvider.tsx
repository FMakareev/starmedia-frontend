import React from 'react';
import {withRouter} from "next/router";

const SearchBySiteContext: any = React.createContext<any>({
  query: '',
});

export const SearchBySiteConnect = (WrapperElement: any) => (props: any) => (<SearchBySiteContext.Consumer>
  {
    (value: any) => <WrapperElement {...value} {...props}/>
  }
</SearchBySiteContext.Consumer>);


class SearchBySiteProvider extends React.Component<any> {

  constructor(props: any) {
    super(props);
    this.state = this.initialState;
  }

  get initialState() {
    return {
      query: this.props.router.query && this.props.router.query.search || '',
    }
  }


  setQuery = (query: string) => {
    this.setState(() => ({query}))
  };
  resetQuery = () => {
    this.setState(() => this.initialState)
  };

  render() {

    return (<SearchBySiteContext.Provider
      value={{
        ...this.state,
        setQuery: this.setQuery,
        resetQuery: this.resetQuery,
      }}
      {...this.props}
    />)
  }
}


export default withRouter(SearchBySiteProvider);

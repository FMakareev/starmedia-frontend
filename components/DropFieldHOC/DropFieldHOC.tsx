import React, {BaseSyntheticEvent} from 'react';

interface IDropFieldHocProps {
  onChange?(files: IFile[]): void;

  accept?: any[];
  multiple?: boolean;

  [prop: string]: any
}

interface IDropFieldHocState {
  [prop: string]: any
}


export interface IFile {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export interface SyntheticEventFileTarget {
  files: IFile[];
}

export const DropFieldHoc = (WrapperComponent: React.FC<any>) => () => {

  return class extends React.Component<IDropFieldHocProps, IDropFieldHocState> {

    constructor(props: IDropFieldHocProps) {
      super(props);

      this.state = this.initialValues;
    }

    get initialValues() {
      const {input} = this.props;
      if (input && input.value) {

        return {
          fileList: Array.isArray(input.value) ? input.value : [input.value],
        }
      }
      return {
        fileList: [],
      }
    }

    addFile = (event: BaseSyntheticEvent<Element, EventTarget, SyntheticEventFileTarget>) => {
      try {
        const {input: {onChange, value}} = this.props;
        const files: IFile[] = event.target.files;
        if(Array.isArray(value)){
          onChange && onChange([...value,...files])
        } else {
          onChange && onChange([...files])
        }

      } catch (error) {
        console.error('[ERROR]:addFile: ', error);
      }
    };

    removeFile = (name: string) => {
      try {
        const {input: {onChange, value}} = this.props;

        if(Array.isArray(value)){
          onChange && onChange(value.filter((item: IFile) => item.name !== name))
        }
      } catch (error) {
        console.error('[ERROR]:removeFile: ', error);
      }
    };

    render() {
      const {input: {value}} = this.props;

      return (<WrapperComponent
        fileList={Array.isArray(value)?value:[]}
        addFile={this.addFile}
        removeFile={this.removeFile}
        {...this.props}
      />)
    }
  }
};
export default DropFieldHoc;




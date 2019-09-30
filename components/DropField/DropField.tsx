import * as React from 'react';
import Text from "../Text/Text";
import TextField from '../TextField/TextField';
import ClearIcon from "../Icons/ClearIcon";
import Button from "../Button/Button";
import {ButtonElementEnum} from "../../types/types";
import Row from "../Row/Row";
import Col from '../Col/Col';

export interface IDropFieldProps {
  help?: string;

  [prop: string]: any
}

export const DropField: React.FC<IDropFieldProps> = ({help, label, addFile, fileList, removeFile, ...rest}) => {
  console.log(rest);

  return (
    <React.Fragment>
      {
        label &&
				<Row mb={8}>
					<Col xs={7}>
						<Text className={'text-field_label'} font={'root'}>
              {label}
						</Text>
					</Col>


          {
            fileList && fileList.length > 0 &&
						<Col xs={5}>
							<Text
								onClick={() => {
                  removeFile(fileList[0].name)
                }}
								font={'object'}
								align={['right']}
								style={{
                  position: 'relative',
                  cursor: 'pointer',
                }}
							>
								Выбрать другой файл
								<input
									onChange={addFile}
									type="file"
									style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    opacity: 0,
                  }}
								/>
							</Text>
						</Col>
          }
				</Row>
      }


      {
        fileList && fileList.length > 0 &&
				<TextField
					disabled={true}
					input={{
            value: fileList && fileList[0].name
          }}
					icon={<Button
            onClick={() => {
              removeFile(fileList[0].name)
            }}
            element={ButtonElementEnum.transparent}
          >
            <ClearIcon fill={'#ED1C24'}/>
          </Button>}
				/>
      }

      {
        fileList && fileList.length === 0 && <div className="drop-field">
					<div className="drop-field_placeholder">
						<img
							src="/static/images/doc.svg"
							alt=""
							className="drop-field_placeholder-icon"
						/>
						<div className="drop-field_placeholder-text">
							Перетащите файл в это окошко
							или нажмите чтобы выбрать файл
						</div>
					</div>
					<input
						onChange={addFile}
						type="file"
					/>
				</div>
      }
      {
        help && <div className="form__group-text">
          {help}
				</div>
      }
    </React.Fragment>
  );
}

export default DropField;

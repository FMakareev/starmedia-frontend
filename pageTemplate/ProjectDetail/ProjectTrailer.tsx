import * as React from 'react';
import {ButtonElementEnum} from "../../types/types";
import PlayIcon from "../../components/Icons/PlayIcon";
import Button from "../../components/Button/Button";
import YouTube from "react-youtube"

interface IProjectTrailerProps {
  [prop: string]: any
}

const ProjectTrailer: React.FC<IProjectTrailerProps> = () => {

  const [watch, setWatch] = React.useState(false);

  const togglePlayer = () => {
    setWatch(!watch);
  }

  return (
    <div className={'project-trailer_wrapper'}>
      {
        watch && <YouTube
					className="project-trailer_video"
          videoId={'JqPsQQh9rqc'}
					opts={{
            playerVars: {
              autoplay: 1
            }
          }}
				/>
      }

      {
        !watch &&
				<div onClick={togglePlayer} className="project-trailer_preview">
					<img
						src={'/static/images/mock/image4.jpg'}
						alt=""
					/>
					<div className="project-trailer_play">
						<Button element={ButtonElementEnum.circle} mods={['inverse', 's']}>
							<PlayIcon/>
						</Button>
					</div>
				</div>
      }


    </div>
  );
};

export default ProjectTrailer;

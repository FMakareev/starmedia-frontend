import * as React from 'react';
import {ButtonElementEnum, Video} from "../../types/types";
import PlayIcon from "../../components/Icons/PlayIcon";
import Button from "../../components/Button/Button";
import YouTube from "react-youtube"
// @ts-ignore
import placeholder from "../../static/images/project-trailer-placeholder.svg";
import {Picture} from "react-responsive-picture";
import { oc } from 'ts-optchain';

interface IProjectTrailerProps extends Video {
  [prop: string]: any
}

function youtubeParser(url: string = ''): string {
  try {
    let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    let match = url.match(regExp);
    // @ts-ignore
    return (match && match[7] && match[7].length === 11) ? match[7] : false;
  } catch (e) {
    console.error(e);
    return '';
  }
}

const ProjectTrailer: React.FC<IProjectTrailerProps> = (
  {
    trailer,
    preview
  }
) => {

  const [watch, setWatch] = React.useState(false);

  const togglePlayer = () => {
    if (trailer) {
      setWatch(!watch);
    }
  };

  return (
    <div className={'project-trailer_wrapper'}>
      {
        watch && <YouTube
					className="project-trailer_video"
					videoId={trailer && youtubeParser(trailer) || ' '}
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

					<Picture
						alt={'project poster'}
            // @ts-ignore
						sources={[
              {
                srcSet: oc(preview).xs.url(placeholder),
              },
            ]}
					/>
          {
            trailer &&
						<div className="project-trailer_play">
							<Button aria-label={'play video'} element={ButtonElementEnum.circle} mods={['inverse', 's']}>
								<PlayIcon/>
							</Button>
						</div>
          }
				</div>
      }


    </div>
  );
};

export default ProjectTrailer;

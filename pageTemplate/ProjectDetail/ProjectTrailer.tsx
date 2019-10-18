import * as React from 'react';
import {ButtonElementEnum, Video} from "../../types/types";
import PlayIcon from "../../components/Icons/PlayIcon";
import Button from "../../components/Button/Button";
import YouTube from "react-youtube"
import ProgressiveImage from "react-progressive-image";
// @ts-ignore
import placeholder from "../../static/images/project-trailer-placeholder.svg";

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
    console.log(e);
    return '';
  }
}

const ProjectTrailer: React.FC<IProjectTrailerProps> = (
  {
    trailerPreview,
    trailer,
  }
) => {

  const [watch, setWatch] = React.useState(false);

  const togglePlayer = () => {
    setWatch(!watch);
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
					<ProgressiveImage
						src={trailerPreview && trailerPreview.url || ''}
						placeholder={placeholder}
					>
            {
              (src: string) => <img
                src={src}
                alt={'project poster'}
              />
            }
					</ProgressiveImage>
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

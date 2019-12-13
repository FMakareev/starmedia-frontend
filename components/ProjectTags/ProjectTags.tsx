import * as React from 'react';
import {Maybe, Tag} from '../../types/types';

interface IProjectTagsProps {
  tags?: Maybe<Array<Tag>>;

  [prop: string]: any
}

const ProjectTags: React.FC<IProjectTagsProps> = ({tags}) => {
  return (
    <ul className={'project-tags_list'}>
      {
        Array.isArray(tags) && tags.map((item: Tag, index: number) => (<li
          key={index}
          className="project-tags_item"
        >
          {item.name && item.name.ru}
        </li>))
      }
    </ul>
  );
};

export default ProjectTags;

import * as React from 'react';
import Text from '../Text/Text';
import Button from '../Button/Button';
import {ButtonElementEnum} from "../../types/types";
import Col from "../Col/Col";
import {Project} from "../../types/projectTypes";
import {News} from "../../types/newsTypes";
import {GetLocalizationString} from "../../libs/GetLocalizationString";
import Typeset from "../Typeset/Typeset";
// @ts-ignore
import {findAll} from "highlight-words-core";
import memo from 'fast-memoize';

interface ISearchResultCardProps extends Project, News {
  [prop: string]: any
}

// @ts-ignore
const highlightedContent = memo((textToHighlight: string, searchWords: string, markClassName = "highlightedContentMark") => {
  const chunks = findAll({
    searchWords: [searchWords],
    textToHighlight
  });

  return chunks
    .map((chunk: any) => {
      const {end, highlight, start} = chunk;
      const text = textToHighlight.substr(start, end - start);
      if (highlight) {
        return `<mark class="${markClassName}" style="background-color: transparent;color:#ED1C24;">${text}</mark>`;
      } else {
        return text;
      }
    })
    .join("");
});

const getURLByType = memo((__typename?: string) => {
  if (__typename === 'News') {
    return '/news/'
  }
  if (__typename === 'Project') {
    return '/project/'
  }
  if (__typename === 'Award') {
    return '/award/'
  }
  return '';
});

const SearchResultCard: React.FC<ISearchResultCardProps> = (
  {
    slug,
    name,
    title,
    content,
    description,
    info,
    searchQuery,
    __typename,
  }
) => {

  const HTMLContent = highlightedContent(GetLocalizationString(description || content || info), searchQuery);
  const href = getURLByType(__typename);

  return (
    <Col pt={20} pb={20} className={'search-result-card_wrapper'}>
      <Button
        mods={['m']}
        mb={10}
        element={ButtonElementEnum.link}
        href={`${href}${slug}`}
        as={'a'}
      >
        {
          GetLocalizationString(name || title)
        }
      </Button>
      <Text font={'root'} size={'m'}>
        <Typeset
          content={HTMLContent}
        />
      </Text>
    </Col>
  );
};

export default SearchResultCard;

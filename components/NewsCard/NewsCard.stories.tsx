import * as React from 'react'
import { storiesOf } from '@storybook/react'
import NewsCard from "./NewsCard";

storiesOf('NewsCard', module).add('with text', () => {
  return <NewsCard />
})

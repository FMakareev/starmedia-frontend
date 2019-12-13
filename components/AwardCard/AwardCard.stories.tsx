import * as React from 'react'
import { storiesOf } from '@storybook/react'
import AwardCard from "./AwardCard";

storiesOf('AwardCard', module).add('with text', () => {
  return <AwardCard />
})

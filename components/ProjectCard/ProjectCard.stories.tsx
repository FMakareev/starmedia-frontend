import * as React from 'react'
import { storiesOf } from '@storybook/react'
import ProjectCard from "./ProjectCard";

storiesOf('ProjectCard', module).add('with text', () => {
  return <ProjectCard />
})

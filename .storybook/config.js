import { configure } from '@storybook/react'

const req = require.context('../components', true, /.stories.tsx$/)
function loadStories() {

	req.keys().forEach(filename => {
		return req(filename)
	})
}

configure(loadStories, module)

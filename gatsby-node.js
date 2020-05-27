exports.onCreatePage = ({ page, actions }) => {
  if (page.path.match(/^\/room/)) {
    page.matchPath = `/room/*`
    actions.createPage(page)
  }
}
exports.CreatePage = ({ page, actions }) => {
	if (page.path.match(/^\/video/)) {
		page.matchPath = `/video/*`
		actions.createPage(page)
	}
}

import PropTypes from 'prop-types'
import { ContentPageTemplate } from '../../templates/content-page'

const ContentPagePreview = ({ entry, widgetFor }) => (
  <ContentPageTemplate
    description={entry.getIn(['data', 'description'])}
    category={entry.getIn(['data', 'category'])}
    title={entry.getIn(['data', 'title'])}
    author={entry.getIn(['data', 'author'])}
  />
)

ContentPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ContentPagePreview

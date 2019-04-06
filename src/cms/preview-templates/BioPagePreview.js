import React from 'react'
import PropTypes from 'prop-types'
import { BioPageTemplate } from '../../templates/bio-page'

const BioPagePreview = ({ entry, widgetFor }) => (
  <BioPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

BioPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BioPagePreview

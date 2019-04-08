import React from 'react'
import PropTypes from 'prop-types'
import { BioPageTemplate } from '../../templates/bio-page'

const BioPagePreview = ({ entry, widgetFor }) => (
  <BioPageTemplate
    name={entry.getIn(['data', 'name'])}
    position={entry.getIn(['data', 'position'])}
    biography={entry.getIn(['data', 'biography'])}
  />
)

BioPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BioPagePreview

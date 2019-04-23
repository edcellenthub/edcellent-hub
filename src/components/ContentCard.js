import React from 'react'
import xIcon from '../../static/img/white_x.svg'

const ContentCard = ({ toggleExpand, boxType, content, chunk }) => (
  <div id="content-pg">
    <div className="tr-container">
      <div className="outer">
        <div className="close-container">
          <div
            className="close-btn"
            onClick={toggleExpand}
          >
            <img src={xIcon} />
          </div>
        </div>
        
        <div className="inner">     
          <div colspan="3" className="category f-arnopro-d spaced text-md-md">
            {boxType === 'non-comparative'
              ? 'TEXT RESPONSE'
              : 'COMPARATIVE TEXT RESPONSE'}
          </div>

          {content
            .filter(
              node =>
                node.type ===
                (boxType === 'non-comparative'
                  ? 'Text Response'
                  : 'Comparative Text Response')
            )[0]
            .school.map(blob => {
              return (
                <>
                  {boxType === 'non-comparative' && (
                    <div colspan="3" className="subtitle text-small">
                      {blob.header}
                    </div>
                  )}

                  <div>
                    {chunk(
                      boxType === 'non-comparative' ? 3 : 2,
                      blob.blurbs
                    ).map(row => {
                      return (
                        <div className="columns">
                          {row.map(item => {
                            return (
                              <div
                                className={
                                  boxType === 'non-comparative'
                                    ? 'column is-one-third'
                                    : 'column is-half'
                                }                      
                              >
                                <div className="f-arnopro-r text-md-md">
                                  {item.title}
                                </div>
                                <br />
                                <span className="f-nunito text-small">
                                  {item.author}
                                </span>
                              </div>
                            )
                          })}
                        </div>
                      )
                    })}
                  </div>
                </>
              )
            })}
        </div>
      </div>
    </div>
  </div>
)

export default ContentCard

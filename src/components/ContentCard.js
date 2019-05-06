import React from 'react'
import xIcon from '../../static/img/white_x.svg'

class ContentCard extends React.Component {

    boxTitle(boxType){
        switch(boxType){
            case 'comparative':
                return 'Comparative Text Response';
            case 'non-comparative':
                return 'Text Response';
            case 'speech':
                return 'Speech Writing Master Class';
            case 'argument':
                return 'Analysing Argument';
            default:
                return
        }
    }

    searchAndItalize(sentence){
        return sentence.replace(/(\d+)?\*(\d+\s)\*(\d+)?/, "$1"+"$2".italics()+"$3")
    }

    filterBoxContent(boxType, content, chunk){
        console.log(content)
        if(boxType === "comparative" || boxType === "non-comparative"){
            return(
                content
                    .filter(
                      node =>
                        node.type ===
                        (boxType === 'non-comparative'
                          ? 'Text Response'
                          : 'Comparative Text Response')
                    )[0].school.map(blob => {
                      return (
                        <>
                          {boxType === 'non-comparative' && (
                            <div colSpan="3" className="subtitle text-small">
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
                                        <div className="f-arnopro-r text-md-md" dangerouslySetInnerHTML={{__html: item.title}}>
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
                    )})
            )
        } else {
            const rowTwo = content.filter(node => node.type === this.boxTitle(boxType))[0]
            return(
                <>
                    <div className="margin-bottom-2 justified">
                        <h3 className="text-md-md f-arnopro-b">Problem:</h3>
                        <p>{rowTwo.problem}</p>
                    </div>
                    <div className="margin-bottom-2 justified">
                        <h3 className="text-md-md f-arnopro-b">Solution:</h3>
                        <p>{rowTwo.solution}</p>
                    </div>
                </>
            )
        }
    }

    render(){
        const { toggleExpand, boxType, content, chunk } = this.props
        return (

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
                      <div colSpan="3" className="category f-arnopro-d spaced text-md-md">
                          { this.boxTitle(boxType).toUpperCase()}
                      </div>
                      { this.filterBoxContent(boxType, content, chunk) }
                    </div>
                  </div>
                </div>
              </div>
            )
    }
}

export default ContentCard

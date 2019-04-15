import React from 'react'

const ContentCard = ({
    toggleExpand,
    boxType,
    content,
    chunk,
}) => (
    <div className="section">
        <div id="content-pg">
            <div className="tr-container">
                <table className="table">
                    <div className="table-container">
                        <tbody>
                            <tr >
                                <td onClick={ e => toggleExpand() } colspan="3" className="category f-arnopro-b spaced text-md"> {boxType === "non-comparative" ? "TEXT RESPONSE" : "COMPARATIVE TEXT RESPONSE" } </td>
                            </tr>
                            {content.filter(node => node.type === "Text Response")[0].school.map( blob => {
                                return(
                                    <>
                                    <tr>
                                        <td colspan="3" className="subtitle text-small">{blob.header}</td>
                                    </tr>
                                    <tr className="row">
                                        {chunk(blob.blurbs).map( row => {
                                            return(
                                                <tr class="row">
                                                     { row.map(item => {
                                                    return(
                                                        <td className='col'>
                                                            <div className="f-arnopro-r text-md-md">{item.title}</div><br/>
                                                            <span className="f-nunito text-small">{item.author}</span>
                                                        </td>
                                                    )
                                                    })}
                                                </tr> 
                                            )
                                        })} 
                                    </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </div>
                </table>
            </div>
        </div>
    </div>
)

export default ContentCard
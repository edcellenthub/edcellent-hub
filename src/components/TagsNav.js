import React from 'react'
import { Link } from 'gatsby'

const TagsNav = class extends React.Component {
    render() {
        const { currentPage } = this.props
        return(
            <div className='tags-bar'>
            <div className="tag-horizontal-line"></div>
            <div id="tags-nav">
               <div className="tags-container">
               
                    <Link
                    className={`tag-link ${currentPage === 'blog' && 'active'}`}
                    to="/blog"
                    >
                    ALL</Link>
                    <Link
                    className={`tag-link ${currentPage === 'teaching tips' && 'active'}`}
                    to="/tags/teaching-tips"
                    >
                    TEACHING TIPS</Link>
                    { /* <Link
                    className={`tag-link ${currentPage === 'vlog' && 'active'}`}
                    to="/vlog"
                    >
                    VLOG</Link>
                    <Link
                    className={`tag-link ${currentPage === 'dramatic text' && 'active'}`}
                    to="/tags/dramatic-text"
                    >
                    DRAMATIC TEXTS</Link> */}
                </div>
                
            </div>
            <div className="tag-horizontal-line"></div>
            </div>
        )
    }
}

export default TagsNav
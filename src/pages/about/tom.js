import React from 'react'
import { Link, navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import Contact from '../../components/Contact';

export default class Tom extends React.Component {
    render() {
        return (
        <Layout>
            <section className="about-section">
                <div id="bio">
                    <div className="photo-container">
                    <img src="/img/Carlyn-Fun.jpg" alt="carlyn-photo"/>
                    </div>
                    <div className="text-container">
                    <div className="f-arnopro-b text-medium">Tom Hoy</div>
                    <div className="f-arnopro-r text-md-md margin-bottom-1">
                        Senior English Language and Literature at Edcellent Education 
                    </div>
                    <p className="text-small justified">
                        Thomas Hoy has a doctorate in comparative literature from La Trobe University. He taught Literature and Academic Skills at La Trobe University and Monash University for several years before accepting a position as a lecturer in the Faculty of Graduate Studies at Mahidol University in Thailand. There he was responsible for teaching and mentoring in all aspects of graduate writing and research in English across a range of disciplines. In 2009, he moved to Thammasat University, Thailand where he taught undergraduate courses and supervised graduate research in the School of English, Thammasat University, Thailand. He has published and presented widely in the fields of literature, sociolinguistics, political language and censorship, and social and educational policy. He has been a consultant to Cambridge University Press on textbook development and to American University Alumni on teacher training. Recently, he returned to Australia where he continues his research and teaching in language and literature.
                    </p>
                    <Link to="/about">
                    <button className="nobox-btn">
                        &nbsp; &#10229;  BACK TO TEAM 
                    </button>
                    </Link>
                    </div>
                </div>
            </section>
            <Contact />
        </Layout>
        )
    }
}
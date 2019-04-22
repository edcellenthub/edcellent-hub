import React from 'react'

export default class TestimonialVideo extends React.Component {
  state = {
    isPlaying: false
  }

  playVideo = () => this.setState({ isPlaying: true })

  stopVideo = () => {
    this.setState({ isPlaying: false })
  }

  componentDidMount() {
    this.video.addEventListener('pause', this.stopVideo)
  }

  render() {
    const { isPlaying } = this.state
    return (
      <div id="testimonial-video">
        <div className="vid-container">
        <video
          ref={vid => (this.video = vid)}
          onClick={this.stopVideo}
          controls={isPlaying}
          src="/vid/Testimonials.mp4"
          autoPlay
          playsInline
          loop
          muted={!isPlaying}
        />
        <div
          className={`video-overlay ${isPlaying && 'hide-overlay'}`}
        >
          <div
            style={{ display: isPlaying ? 'none' : 'block' }}
            className="landing-top-banner-info-box text-center f-arnopro-r"
          >
          <div className="f-arnopro-s testimonial-title">Hear what our students have to say about us</div>          
          <button className="play-video-btn" onClick={this.playVideo}>
            <span>WATCH VIDEO</span>
            <i class="fas fa-caret-right" />
            {/* <img src={require('../img/video.svg')} alt="play" /> */}
          </button>
          </div>
          </div>
        </div>
      </div>
    )
  }
}
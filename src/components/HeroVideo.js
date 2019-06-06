import React from 'react'

export default class HeroVideo extends React.Component {
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
      <header id="landing-hero-video">
        <video
          ref={vid => (this.video = vid)}
          onClick={this.stopVideo}
          controls={isPlaying}
          controlsList="nodownload"
          src="/vid/Ed_Sound.mp4"
          // src="https://s3-ap-southeast-1.amazonaws.com/liren-permission-test/WHY+EDCELLENT+(without+Logo).mp4"
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
            <h1 className="f-arnopro-b landing-gold-title">edcellent</h1>
            <div className="landing-gold-subtitle f-arnopro-r margin-bottom-1">
              | ɛd:s(ə)l(ə)nt |
            </div>
            <div className="margin-bottom-1">
              <p className="nunito-text-small">adjective</p>
              <p>authentic, holistic, global</p>
            </div>
            <div className="margin-bottom-1">
              <p className="nunito-text-small">
              An edcellent education is inspired to empower critical and creative thinking beyond the classroom.              </p>
            </div>
            <button className="play-video-btn" onClick={this.playVideo}>
              <span>WATCH VIDEO</span>
              <i class="fas fa-caret-right" />
              {/* <img src={require('../img/video.svg')} alt="play" /> */}
            </button>
          </div>
        </div>
      </header>
    )
  }
}

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
          src="https://s3-ap-southeast-1.amazonaws.com/liren-permission-test/WHY+EDCELLENT+(without+Logo).mp4"
          autoPlay
          loop
          muted={!isPlaying}
        />
        <div
          className={`viewport-header ${isPlaying && 'hide-overlay'}`}
          onClick={this.playVideo}
        >
          <div
            style={{ display: isPlaying ? 'none' : 'block' }}
            className="landing-top-banner-info-box text-center f-arnopro-r"
          >
            <h1 className="f-arnopro-b landing-gold-title">edcellent</h1>
            <div className="margin-bottom-2">
              <p className="nunito-text-small">adjective</p>
              <p>organic, holistic, global</p>
            </div>
            <div className="margin-bottom-2">
              <p className="nunito-text-small">noun</p>
              <p>authenticity, inspiration, insight</p>
            </div>
            <div className="margin-bottom-2">
              <p className="nunito-text-small">verb</p>
              <p>engage, empower, educate</p>
            </div>
            <button className="btn">
              LEARN MORE &nbsp; &nbsp;
              <i class="fas fa-caret-right" />
            </button>
          </div>
        </div>
      </header>
    )
  }
}

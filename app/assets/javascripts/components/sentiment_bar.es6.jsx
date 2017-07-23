class SentimentBar extends React.Component {

  render() {
    const { score } = this.props

    return (
      <span className="meter-bar">
        <span className="meter-label">-ve</span>
        <span className={ score < -0.8 ? "meter-item meter-minus-5 active" : "meter-item meter-minus-5" } />
        <span className={ score < -0.6 ? "meter-item meter-minus-4 active" : "meter-item meter-minus-4" } />
        <span className={ score < -0.4 ? "meter-item meter-minus-3 active" : "meter-item meter-minus-3" } />
        <span className={ score < -0.2 ? "meter-item meter-minus-2 active" : "meter-item meter-minus-2" } />
        <span className={ score < 0 ? "meter-item meter-minus-1 active" : "meter-item meter-minus-1" } />
        <span className="meter-item meter-neutral active" />
        <span className={ score > 0 ? "meter-item meter-plus-1 active" : "meter-item meter-plus-1" } />
        <span className={ score > 0.2 ? "meter-item meter-plus-2 active" : "meter-item meter-plus-2" } />
        <span className={ score > 0.4 ? "meter-item meter-plus-3 active" : "meter-item meter-plus-3" } />
        <span className={ score > 0.6 ? "meter-item meter-plus-4 active" : "meter-item meter-plus-4" } />
        <span className={ score > 0.8 ? "meter-item meter-plus-5 active" : "meter-item meter-plus-5" } />
        <span className="meter-label">+ve</span>
      </span>
    )
  }
}
class SentimentBar extends React.Component {

  render() {
    const { score } = this.props

    return (
      <span className="meter-bar">
        <span className={ score < -0.8 ? "meter-minus-5 active" : "meter-minus-5" } />
        <span className={ score < -0.6 ? "meter-minus-4 active" : "meter-minus-4" } />
        <span className={ score < -0.4 ? "meter-minus-3 active" : "meter-minus-3" } />
        <span className={ score < -0.2 ? "meter-minus-2 active" : "meter-minus-2" } />
        <span className={ score < 0 ? "meter-minus-1 active" : "meter-minus-1" } />
        <span className="meter-neutral active" />
        <span className={ score > 0 ? "meter-plus-1 active" : "meter-plus-1" } />
        <span className={ score > 0.2 ? "meter-plus-2 active" : "meter-plus-2" } />
        <span className={ score > 0.4 ? "meter-plus-3 active" : "meter-plus-3" } />
        <span className={ score > 0.6 ? "meter-plus-4 active" : "meter-plus-4" } />
        <span className={ score > 0.8 ? "meter-plus-5 active" : "meter-plus-5" } />
      </span>
    )
  }
}
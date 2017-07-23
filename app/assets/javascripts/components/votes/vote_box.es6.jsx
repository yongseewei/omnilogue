class VoteBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {vote_sum: this.props.votable.vote_sum}
  }

  voteChanged(vote_sum) {
    this.setState({vote_sum: vote_sum})
  }

  render() {
    const { votable, modelName } = this.props
    return (
      <div className="flex vote-button-container">
        <div>
          { this.state.vote_sum === 1 ? `${this.state.vote_sum} vote` : `${this.state.vote_sum} votes` }
        </div>
        <div>
          {
            <VoteButton
              modelName={modelName}
              id={votable.id}
              value={true}
              vote_sum={this.state.vote_sum}
              voteChanged = {this.voteChanged.bind(this)} />
          }
        </div>
        <div>
          {
            <VoteButton
              modelName={modelName}
              id={votable.id}
              value={false}
              vote_sum={this.state.vote_sum}
              voteChanged = {this.voteChanged.bind(this)} />
          }
        </div>
      </div>
    )
  }
}
class VoteBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {vote_sum: this.props.votable.vote_sum}
  }

  voteChanged(vote_sum) {
    this.setState({vote_sum: vote_sum})
  }

  render() {
    const { votable, className } = this.props
    return (
      <div>
        <div>
           { <VoteButton className={className} id={votable.id} 
                          value={true} vote_sum={this.state.vote_sum} 
                          voteChanged = {this.voteChanged.bind(this)}/> }
        </div>
        <div>
          {this.state.vote_sum}
        </div>
        <div>
          { <VoteButton className={className} id={votable.id} 
                        value={false} vote_sum={this.state.vote_sum} 
                         voteChanged = {this.voteChanged.bind(this)}/> }
        </div>
      </div>
    )
  }
}
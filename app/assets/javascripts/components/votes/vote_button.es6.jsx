class VoteButton extends React.Component {

  handleSubmit(e) {
    var component = this;
    e.preventDefault();
    $.ajax ({
      url: $('#'+e.target.id).attr('action'),
      type: 'post',
      dataType: 'JSON',
      data:
        $('#'+e.target.id).serialize()

    }).success(function(data){
        component.props.voteChanged(data.vote_sum)
    });
  }

  buttonTitle() {
    if (this.props.value == true) {
      return "Upvote"
    } else {
      return "Downvote"
    }
  }

  render() {
    const { value, modelName, id, vote_sum  } = this.props
    return (
      <form action={"/votes"}  method="post" id={"voteForm"+String(value)+id} onSubmit={this.handleSubmit.bind(this)}>
        <input type="hidden" name='class_name' value={modelName}/>
        <input type="hidden" name='class_id'value={id}/>
        <input type="hidden" name='value' value={value}/>
        <input type="submit" value={`${this.buttonTitle()}`} className="btn pmd-btn-raised btn-sm pmd-ripple-effect btn-primary" />
      </form>
    )
  }
}

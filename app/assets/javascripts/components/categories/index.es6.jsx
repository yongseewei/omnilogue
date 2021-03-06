class CategoriesIndex extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
      currentQuestions: props.questions,
      currentSelection: "All Categories"
    }
    this.handleCatClick = this.handleCatClick.bind(this)
    this.handleSubCatClick = this.handleSubCatClick.bind(this)
  }

	render() {
		const { categories } = this.props
		return (
			<div className="dropdown">
        <button className="btn btn-default btn-block dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          { this.state.currentSelection }
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
        {
          categories.map((category) => {
						return(
							<div key={ `category-${category.id}`}>
								<li
									key={category.id}
									className="clickable"
									value={category.id}
                  data-name={category.name}
									onClick={ this.handleCatClick }>
									<b>{ category.name }</b></li>
								{
									category.subcategories.map((subcat) => {
										return(
											<li
												key={ `subcat-${subcat.id}` }
												className="clickable"
												value={subcat.id}
                        data-name={subcat.name}
												onClick={ this.handleSubCatClick }>
												&nbsp;&nbsp;{subcat.name}</li>
										)
									})
								}
							</div>
						)
					})
        }
        </ul>
      </div>
		)

	}

	handleCatClick(event) {
    event.preventDefault();
    var component = this

    // Submits form
    $.ajax({
      url: '/categories/search',
      type: 'get',
      dataType: 'JSON',
      data: {
        questions: this.state.currentQuestions.map((question) => parseInt(question.id)),
        cat_id: event.target.value
      }
    }).success(function(data){
      component.props.updateQuestions(data);
    });
    component.setState({
      currentSelection: event.target.dataset.name
    })
  }

  handleSubCatClick(event) {
    event.preventDefault();
    var component = this

    // Submits form
    $.ajax({
      url: '/subcategories/search',
      type: 'get',
      dataType: 'JSON',
      data: {
        questions: this.state.currentQuestions.map((question) => parseInt(question.id)),
        subcat_id: event.target.value
      }
    }).success(function(data){
      component.props.updateQuestions(data);
    });
    component.setState({
      currentSelection: event.target.dataset.name
    })
  }
}
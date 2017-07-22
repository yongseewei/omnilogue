export default class QuestionsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: "All questions",
      showSearch: false
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <select name="category-dropdown">
              <option value="value1">Machine Learning</option>
              <option value="value2" selected>Organic Learning</option>
              <option value="value3">Combined Learning</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="search-box">
              <span className="glyphicon glyphicon-search" aria-hidden="true"></span> {this.state.searchText}
            </div>

          </div>
        </div>
      </div>
    )
  }
}
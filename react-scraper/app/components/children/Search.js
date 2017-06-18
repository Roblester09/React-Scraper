const React = require('react');

const Search = React.createClass({

    getInitialState: function(){
        return{
            search_word: "",
            start_year: "1990",
            end_year: "2017"
        }
    },

    handleChange: function(event) {
        let newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    },

    render: function() {
        return(
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title text-center">Search Details</h3>
                        </div>
                        <div className="panel-body">

                            <form>

                                <div className="form-group">
                                    <label>Search Word:</label>
                                    <input type="text"
                                           value={this.state.search_word}
                                           className="form-control"
                                           id="search_word"
                                           onChange={this.handleChange}
                                           required/>
                                </div>

                                <div className="form-group">
                                    <label>Start Year:</label>
                                    <input type="number"
                                           className="form-control"
                                           id="start_year"
                                           value={this.state.start_year}
                                           onChange={this.handleChange}/>
                                </div>

                                <div className="form-group">
                                    <label>End Year:</label>
                                    <input type="number"
                                           className="form-control"
                                           id="end_year"
                                           value={this.state.end_year}
                                           onChange={this.handleChange}/>
                                </div>

                                <button type="submit" className="btn btn-default" id="run-search">
                                    Search
                                </button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

});

module.exports = Search;
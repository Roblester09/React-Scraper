const React = require('react');
const Search = require('./children/Search.js');
const Results = require('./children/Results.js');
const Articles = require('./children/Articles.js');

const Main = React.createClass({

    render: function() {
        return(
            <div>
                <div className="row">
                    <div className="jumbotron text-center">
                        <h1>New York Times</h1>
                        <h2>Search for Articles!</h2>
                    </div>
                </div>

                <div className="row">
                    <Search/>
                </div>

                <div className="row">
                    <Results/>
                </div>

                <div className="row">
                    <Articles/>
                </div>

            </div>
        )
    }

});

module.exports = Main;
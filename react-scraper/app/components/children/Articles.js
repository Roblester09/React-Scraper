const React = require('react');

const Articles = React.createClass({

    render: function() {
        return(
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title text-center">Saved Articles</h3>
                        </div>
                        <div className="panel-body text-center">
                        </div>
                    </div>
                </div>
            </div>
        )
    }

});

module.exports = Articles;
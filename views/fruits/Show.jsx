const React = require('react');

class Show extends React.Component {
    render() {
        // Extracting the fruit object passed as a prop
        const { fruit } = this.props;

        // Return JSX to render the details of the fruit
        return (
            <div>
                <h1>Show Page</h1>
                <h2>{fruit.name}</h2> {/* Displaying the fruit's name */}
                <p>Color: {fruit.color}</p> {/* Displaying the fruit's color */}
                {/* Conditionally rendering if the fruit is ready to eat */}
                <p>{fruit.readyToEat ? 'It is ready to eat.' : 'It is not ready to eat.'}</p>
            </div>
        );
    }
}

module.exports = Show;

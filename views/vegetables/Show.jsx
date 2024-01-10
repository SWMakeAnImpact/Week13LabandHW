// views/vegetables/Show.jsx

const React = require('react');

class Show extends React.Component {
  render() {
    const { vegetable } = this.props;
    return (
      <div>
        <h1>Show Page</h1>
        <h2>{vegetable.name}</h2>
        <p>Color: {vegetable.color}</p>
        <p>{vegetable.readyToEat ? 'It is ready to eat.' : 'It is not ready to eat.'}</p>
      </div>
    );
  }
}

module.exports = Show;

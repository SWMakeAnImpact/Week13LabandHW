// views/vegetables/Index.jsx

const React = require('react');

class Index extends React.Component {
  render() {
    const { vegetables } = this.props;
    return (
      <div>
        <h1>Vegetables List</h1>
        <ul>
          {vegetables.map((vegetable, index) => (
            <li key={index}>
              <a href={`/vegetables/${index}`}>{vegetable.name}</a> - {vegetable.color}
              {vegetable.readyToEat ? ' (Ready to eat)' : ' (Not ready to eat)'}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

module.exports = Index;

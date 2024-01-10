// views/vegetables/New.jsx

const React = require('react');

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Vegetable</h1>
        <form action="/vegetables" method="POST">
          {/* Form inputs go here */}
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="color" placeholder="Color" />
          <input type="checkbox" name="readyToEat" /> Ready to eat
          <input type="submit" value="Create Vegetable" />
        </form>
      </div>
    );
  }
}

module.exports = New;

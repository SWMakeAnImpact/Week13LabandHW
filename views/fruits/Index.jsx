const React = require('react');

class Index extends React.Component {
    render() {
        const { fruits } = this.props;
        return (
            <div>
                <h1>Fruits List</h1>
                <ul>
                    {fruits.map((fruit, index) => (
                        <li key={index}>
                            <a href={`/fruits/${index}`}>{fruit.name}</a> - {fruit.color}
                            {fruit.readyToEat
                                ? ' (Ready to eat)'
                                : ' (Not ready to eat)'}
                            <br />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

module.exports = Index;

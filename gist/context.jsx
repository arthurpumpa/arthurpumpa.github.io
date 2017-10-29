import React from 'react';

class Parent extends React.Component {
    getChildContext() {
        return {
            name: 'Hello from Paren'
        }
    }

    render() {
        <Child />
    }
}
Parent.childContextTypes = {
    color: PropTypes.string
};

class Child extends React.Component {
    render() {
        <div>{this.context.name}</div>
    }
}

Child.contextTypes = {
    name: PropTypes.string
};
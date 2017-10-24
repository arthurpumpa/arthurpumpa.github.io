function ppHoc(WrappedComponent) {
    return class PP extends React.Component {
        render() {
            return <WrappedComponent {...this.props}/>
        }
    }
}

function ppHOC(WrappedComponent) {
    return class PP extends React.Component {
        render() {
            const newProps = {
                user: currentLoggedInUser
            }
            return <WrappedComponent {...this.props} {...newProps}/>
        }
    }
}

function refsHOC(WrappedComponent) {
    return class RefsHOC extends React.Component {
        /*
         *  When the WrappedComponent is rendered the ref callback will be executed,
         *  and then you will have a reference to the WrappedComponent’s instance.
         */
        proc = (wrappedComponentInstance) => {
            wrappedComponentInstance.method()
        };

        render() {
            return <WrappedComponent {...this.props} ref={proc}/>
        }
    }
}

function ppHOC(WrappedComponent) {
    return class PP extends React.Component {
        constructor(props) {
            super(props);
            this.state = {name: ''};
        }

        onNameChange = (event) => {
            this.setState({name: event.target.value})
        };

        render() {
            const newProps = {
                name: {
                    value: this.state.name,
                    onChange: this.onNameChange
                }
            };
            return <WrappedComponent {...this.props} {...newProps}/>
        }
    }
}
//Usage. The input will be a controlled input automagically.

@ppHOC
class Example extends React.Component {
    render() {
        return <input name="name" {...this.props.name}/>
    }
}

function ppHOC(WrappedComponent) {
    return class PP extends React.Component {
        render() {
            return (
                <div style={{display: 'block'}}>
                    <WrappedComponent {...this.props}/>
                </div>
            )
        }
    }
}

HOC.displayName = `HOC(${getDisplayName(WrappedComponent)})`
//or
class HOC extends ... {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`
...
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName ||
        WrappedComponent.name ||
         ‘Component’
}
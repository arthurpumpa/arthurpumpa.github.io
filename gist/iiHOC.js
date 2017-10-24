function iiHOC(WrappedComponent) {
    return class Enhancer extends WrappedComponent {
        render() {
            return super.render()
        }
    }
}


function iiHOC(WrappedComponent) {
    return class Enhancer extends WrappedComponent {
        render() {
            if (this.props.loggedIn) {
                return super.render()
            } else {
                return null
            }
        }
    }
}

function iiHOC(WrappedComponent) {
    return class Enhancer extends WrappedComponent {
        render() {
            const elementsTree = super.render()
            let newProps = {};
            if (elementsTree && elementsTree.type === 'input') {
                newProps = {value: 'may the force be with you'}
            }
            const props = {...elementsTree.props, ...newProps)
            const newElementsTree = React.cloneElement(elementsTree, props, elementsTree.props.children)
            return newElementsTree
        }
    }
}
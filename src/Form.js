import React from 'react';
import axios from 'axios'

class Form extends React.Component {
    userNameInput = React.createRef();

    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`http://api.github.com/users/${this.userNameInput.current.value}`);
        console.log(resp)
        this.props.onNewUser(resp.data)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Github username" ref={this.userNameInput} required ></input>
                <button>add card</button>
            </form>
        );

    }
}

export default Form;
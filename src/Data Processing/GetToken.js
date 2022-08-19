import React from 'react';
import Button from "@material-ui/core/Button";

export default class GetToken extends React.Component {

    sendPromises = () => {
        let login = document.querySelector('#login').value
        let password = document.querySelector('#password').value
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: login,
                password: password })
        };

        fetch('http://localhost/api/auth/login', requestOptions)
            .then(response => response.json())
            .then(data => {

                if ('token' in data) {
                    document.location.href = '/clicks'
                  }
                console.log('error')
            })
    };

        render()
        {
            return (
                <div>
                    <Button fullWidth
                            variant="contained" color="primary"
                    onClick={this.sendPromises}>
                        Sign In
                    </Button>
                </div>
            );

        }
    }
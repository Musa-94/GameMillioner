import React, { PureComponent } from 'react';
import {
    Wrapper,
    GlobalStyle,
} from './styleComponents';
import Input from '../components/input/input';
import Button from '../components/button/button';


class LoginPage extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
        }
    }

    componentDidMount() {
        console.info('Login page did mount');
    }

    componentDidUpdate() {
        console.info('update Login page');
    }

    componentWillUnmount() {
        console.log('Login page unmount');
    }

    handleChangeInput = e => {
        const { target } = e;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = () => {
        const {
            login,
            password,
        } = this.state;

        if (!login || !password) {
            return;
        }

        const user = {
            login: login,
            password: password,
        }
        console.log('user:', user);

        this.clearFields();
    }

    clearFields = () => {
        this.setState({
            login: '',
            password: '',
        })
    }

    render() {
        const {
            handleSubmit,
            handleChangeInput,
        } = this;
        const {
            login,
            password,
        } = this.state;

        return (
            <>
                <Wrapper data-at='wrapper'>
                    <Wrapper.form data-at='wrapper_form'>
                        <Input
                            type={'text'}
                            name={'login'}
                            change={handleChangeInput}
                            placeholder={'Login...'}
                        />
                        <Input
                            type={'password'}
                            name={'password'}
                            change={handleChangeInput}
                            placeholder={'Password...'}
                        />
                        <Button
                            type={'submit'}
                            click={handleSubmit}
                        />
                    </Wrapper.form>
                </Wrapper>
                <GlobalStyle/>
            </>
        )
    }
}

export default LoginPage;
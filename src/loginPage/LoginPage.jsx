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
            userName: '',
            password: '',
        }
    }

    componentDidMount() {
        console.info('Login page did mount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.info('update Login page');
    }

    componentWillUnmount() {
        console.log('Login page unmount');
    }

    handleChangeInput = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        if (this.state.userName && this.state.password) {
            // this.props.logIn(this.state);
            const user = {
                login: this.state.userName,
                password: this.state.password,
            }
            console.log('user:', user);

            this.clearFields();
        }
    }

    clearFields = () => {
        this.setState({
            username: '',
            password: null
        })
    }

    render() {
        const {
            handleSubmit,
            handleChangeInput,
        } = this;

        return (
            <>
                <Wrapper>
                    <Wrapper.form>
                        <Input
                            type={'text'}
                            name={'userName'}
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
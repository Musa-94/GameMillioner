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

    handlePerson = evt => {
        console.log(evt.target.value);
    }

    render() {
        const {
            handlePerson,
        } = this;
        return (
            <>
                <Wrapper>
                    <Wrapper.form>
                        <Input
                            type={'text'}
                            onChange={e => handlePerson(e)}
                            placeholder={'Login...'}
                        />
                        <Input
                            type={'password'}
                            onChange={e => handlePerson(e)}
                            placeholder={'Password...'}
                        />
                        <Button
                            type={'submit'}
                        />
                    </Wrapper.form>
                </Wrapper>
                <GlobalStyle/>
            </>
        )
    }
}

export default LoginPage;
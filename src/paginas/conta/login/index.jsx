import React from 'react';
import Menu from '../../../componentes/menu';
import Rodape from '../../../componentes/rodape';

import { Container, Form, Button, Alert } from 'react-bootstrap';

const Login = () => {
    
    return (
        <div>
            <Menu />
            <Container className='form-height'>
                <Form className='form-signin'>
                    <h1>Login</h1>
                    <small>Informe os dados Abaixo</small>

                    <hr />
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="Informe o email" name="email" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha" name="senha" required />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Enviar
                </Button>
                    <br /><br />
                    <a href='/resetar-senha' style={{ marginTop: '30px' }}>Esqueci a senha!</a>
                </Form>

            </Container>
            <Rodape />
        </div>
    )
}

export default Login;
import React from 'react';
// import { useFormik } from 'formik';
// import { useToasts } from 'react-toast-notifications';
import { useHistory } from 'react-router-dom';

// import Menu from '../../../componentes/menu';
import Rodape from '../../../componentes/rodape';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './index.css';
// import ContaServico from '../../../servicos/contaServico';

const ResetarSenha = () => {
    return (
        <div>
            {/* <Menu /> */}
            <Container className='form-height'>
                <Form className='form-signin'>
                    <h1>Esqueci minha senha</h1>
                    <small>Informe os dados Abaixo</small>

                    <hr />
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="Informe o email" name="email" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Enviar
                </Button>
                    <br /><br />
                    <a href='/' style={{ marginTop: '30px' }}>Logar no sistema</a>
                </Form>
            </Container>
            <Rodape />
        </div>
    )

}

export default ResetarSenha;
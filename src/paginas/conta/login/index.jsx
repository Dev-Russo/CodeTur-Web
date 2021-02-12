import React from 'react';
import Menu from '../../../componentes/menu';
import Rodape from '../../../componentes/rodape';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useFormik } from 'formik';
import ContaServico from '../../../servicos/contaServico';
import {useHistory} from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'

const Login = () => {
    const history = useHistory();
    const { addToast } = useToasts();
    
    
    const formik = useFormik({
        initialValues: {
            email: '',
            senha: ''
        },
        onSubmit: values => {
            // alert(JSON.stringify(values));
            ContaServico
                .logar(values)
                .then(resultado => resultado.json())
                .then(resultado => {
                    if(resultado.sucesso){
                        addToast(resultado.mensagem, { appearance: 'success', autoDismiss : true });
                        localStorage.setItem('token-codetur', resultado.data.token);
                        console.log(resultado)
                        history.push('/admin');
                    } else {
                        addToast(resultado.mensagem, { appearance: 'error', autoDismiss : true })
                    }
                })
                .catch(erro => {
                    console.error('erro na API' + erro);
                })
        }
    })

    return (
        <div>
            <Menu />
            <Container className='form-height'>
                <Form className='form-signin' onSubmit={formik.handleSubmit}>
                    <h1>Login</h1>
                    <small>Informe os dados Abaixo</small>

                    <hr />
                    <Form.Group>
                        <Form.Label>Email </Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Informe o email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            name="email"
                            required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            type="password" 
                            placeholder="Senha" 
                            value={formik.values.senha}
                            onChange={formik.handleChange}
                            name="senha" 
                            required />
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
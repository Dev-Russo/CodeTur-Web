import React from 'react';
import Rodape from "../../componentes/rodape";
import Menu from "../../componentes/menu";
import { Container } from "react-bootstrap";

const naoencontrado = () => {

    return(
        <div>
            <Menu/>
            <Container className='form-height'>
                <h1>Pagína não Encotrada</h1>
            </Container>
            <Rodape/>
        </div>
    )
}

export default naoencontrado;
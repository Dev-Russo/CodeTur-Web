import React from 'react';
import Rodape from "../../../componentes/rodape";
import Menu from "../../../componentes/menu";
import { Container } from "react-bootstrap";

const Dashboard = () => {

    return(
        <div>
            <Menu/>
            <Container className='form-height'>
                <h1>DashBoard</h1>
            </Container>
            <Rodape/>
        </div>
    )
}

export default Dashboard;
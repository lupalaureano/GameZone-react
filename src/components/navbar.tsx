import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function AppNavbar() {

    const [activeKey, setActiveKey] = useState<string>('topo');
    return (

        <Navbar className='header sticky-top' variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#topo"><img src='./img/logo.png' alt="Logo" id="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='menu' >
                <Nav
                    className="me-auto"
                    activeKey={activeKey}
                    onSelect={(selectedKey) => setActiveKey(selectedKey||'')}
                >
                    <Nav.Link eventKey="topo" href='#topo'>Início</Nav.Link>
                    <Nav.Link eventKey="jogos" href='#jogos'>Jogos</Nav.Link>
                    <Nav.Link eventKey="calendario" href='#calendario'>Calendário de Lançamentos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar >
    )
}
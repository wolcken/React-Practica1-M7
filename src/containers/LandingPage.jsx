import React from 'react';
import Table from 'react-bootstrap/Table';

const LandingPage = () => {
    return (
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <div style={{background: '#007bff', padding: '10px', borderRadius: '20px', marginBottom: '20px'}}>
                    <h1 style={{ color: '#ffffff', fontWeight: 'bold' }}>MODULO 7: DESARROLLO FRONTEND CON REACTJS</h1>
                </div>
                <h2 style={{ color: '#343a40' }}>Bienvenido</h2>
                <p style={{ color: '#6c757d', fontSize: '18px', lineHeight: '1.6' }}>
                    Este módulo se centra en el uso de <strong>React</strong>, incluyendo la creación de <strong>componentes</strong>,
                    el manejo de <strong>hooks</strong>, y el uso de <strong>Redux</strong>.
                </p>
            </div>

            <div>
                <h2 style={{ color: '#343a40', marginBottom: '20px' }}>Temas Cubiertos</h2>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td>Componentes funcionales y de clase</td>
                            <td>Uso de <strong>React hooks</strong> como useState y useEffect</td>
                            <td>Creación de <strong>custom hooks</strong> como useForm</td>
                            <td>Gestión de variables de estado con <strong>useState</strong></td>
                            <td>Gestión de estado global con <strong>Redux</strong></td>
                            <td>Integración con <strong>Redux</strong> con <strong>React</strong></td>
                            <td>Manejo de <strong>Formularios</strong> en <strong>React</strong></td>
                            <td>Publicando nuestra <strong>Página</strong> con <strong>GitHub Pages</strong></td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <div style={{ marginTop: '40px' }}>
                <h2 style={{ color: '#343a40', marginBottom: '20px' }}>Recursos Adicionales</h2>
                <p style={{ color: '#6c757d', fontSize: '18px', lineHeight: '1.6' }}>
                    Para profundizar en los temas cubiertos, consulta los siguientes recursos:
                    <a href="https://react.dev/" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}> React.js</a>
                </p>
            </div>
        </div>
    );
}

export default LandingPage;

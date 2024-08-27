import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const Contador = () => {
    const [contador, setContador] = useState(0);
    const handleContador1 = () => {
        setContador(contador + 1);
    };
    const handleContador2 = () => {
        setContador(contador - 1);
    };

    useEffect(() => {
        setContador(12);
    }, []);

    useEffect(() => {
        if (contador === 15) {
            alert('contador es 15');
        }
    }, [contador]);

    useEffect(() => {
        return () => {
            console.log('El componenete se desmonto');
        }
    });


    return (
        <>
            <h4>Componente Contador</h4>
            <h5>{contador}</h5>
            <div>
                <Button variant="primary" onClick={handleContador1}>Aumentar</Button>{' '}
                <Button variant="success" onClick={handleContador2}>Disminuir</Button>
            </div>
        </>
    );
};

export default Contador;
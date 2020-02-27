import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './contador.css';

export default class Contador extends Component {
    state = {
        numero: 0
    }
    aumentar = () => {
        this.setState({ numero: this.state.numero + 1 });
    }
    diminuir = () => {
        if (this.state.numero != 0) {
            return this.setState({ numero: this.state.numero - 1 });

        }
    }
    render() {
        return (
            <div>
                <h1 className="contador-titulo">{this.state.numero}</h1>
                <Button color="success" size="lg" className="md-2 contador-aumentar" outline onClick={this.aumentar}>Aumentar</Button>
                <Button color="danger" size="lg" className="md-2 contador-diminuir" outline onClick={this.diminuir}>Diminuir</Button>
                {/* <button type="button" className="contador-aumentar" onClick={this.aumentar}>Aumentar</button>
                <button type="button" className="contador-diminuir" onClick={this.diminuir}>Diminuir</button> */}
            </div>
        );
    }
}
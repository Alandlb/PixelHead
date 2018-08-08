import {Button, TextField, Typography} from "@material-ui/core";
import React, {Component} from "react";
import FirebaseService from "../Services/FirebaseService";
import {urls} from "../until/urlUntils";
import {withRouter} from "react-router-dom";

class Add extends Component {

    state = {id: null, NomePc: '', CPU: '', GPU: '', RAM: '', Disco: '', Categoria: ""};

    componentWillMount = () => {
        const {id} = this.props.match.params;

        if (!(id === undefined || !id)) {
            this.setState({id});
            FirebaseService.getUniqueDataBy('PCs', id, (data) => this.setState({...data}, () => console.log(this.state)));
        }

    };

    submit = (event) => {
        event.preventDefault();
       

        if(this.state.CPU>=1&&this.state.GPU>=0&&this.state.RAM>=4&&this.state.Disco>=120)
        {
            this.state.Categoria = "Administrativo/Negócios";
        }
        if(this.state.CPU>=4&&this.state.GPU>=0&&this.state.RAM>=8&&this.state.Disco>=120)
        {
            this.state.Categoria = "Desenvolvimento";
        }
        if(this.state.CPU>=6&&this.state.GPU>=1&&this.state.RAM>=8&&this.state.Disco>=240)
        {
            this.state.Categoria = "Design";
        }
        if(this.state.CPU>=8&&this.state.GPU>=2&&this.state.RAM>=16&&this.state.Disco>=240)
        {
            this.state.Categoria = "Animação";
        }
        if(this.state.CPU>=16&&this.state.GPU>=3&&this.state.RAM>=32&&this.state.Disco>=480)
        {
            this.state.Categoria = "3D";
        }
        if(this.state.CPU<1||this.state.GPU<0||this.state.RAM<4||this.state.Disco<120)
        {
            this.state.Categoria = "Nao Serve";            
        }

        const {NomePc} = this.state;
        const {CPU} = this.state;
        const {GPU} = this.state;
        const {RAM} = this.state;
        const {Disco} = this.state;
        const {Categoria} = this.state;
        
       

        let objToSubmit = {
            NomePc,
            CPU,
            GPU,
            RAM,
            Disco,
            Categoria

        };

        if (this.props.match.params.id === undefined) {
            FirebaseService.pushData('PCs', objToSubmit);
        } else {
            FirebaseService.updateData(this.props.match.params.id, 'PCs', objToSubmit)
        }

        this.props.history.push(urls.data.path);

    };


    render = () => (<React.Fragment>

        <Typography variant="headline" component="h2">Cadastrar PC</Typography>
        <form onSubmit={this.submit}>

            <TextField className="input-field"
                       type="text"
                       defaultValue={''}
                       label="Nome Do pc"
                       required
                       onChange={e => this.state.NomePc = e.target.value}/>


            <TextField className="input-field"
                       type="number"
                       label="CPU"
                       defaultValue={''}
                       required
                       onChange={e => this.state.CPU = e.target.value}/>


            <TextField className="input-field"
                       type="number"
                       label="GPU"
                       defaultValue={''}
                       required
                       onChange={e => this.state.GPU = e.target.value}/>


            <TextField className="input-field"
                       type="number"
                       label="RAM"
                       defaultValue={''}
                       required
                       onChange={e => this.state.RAM = e.target.value}/>
            

            <TextField className="input-field"
                       type="number"
                       label="Disco"
                       defaultValue={''}
                       required
                       onChange={e => this.state.Disco = e.target.value}/>          
            
            
            <Button type="submit"
                    style={{marginTop: '20px', display: 'inline-block', }}>
                Cadastrar
            </Button>
        </form>
    </React.Fragment>)
}

export default withRouter(Add);
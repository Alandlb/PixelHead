import React, { Component } from 'react';
import './App.css';
import {MuiThemeProvider} from "@material-ui/core/styles/index";
import {createMuiTheme} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import DataTable from "../DataTable/DataTable";
import TopBar from "../TopBar/TopBar";
import FirebaseService from "../Services/FirebaseService";
import Welcome from "../Welcome/Welcome";
import Add from "../Add/Add";
import { Route } from 'react-router';
import Card from "@material-ui/core/Card/index";
import CardContent from "@material-ui/core/CardContent/index";
import {urls} from "../until/urlUntils";

const theme = createMuiTheme({
    palette: {
        primary: red,
    },
});

class App extends Component {    
    state = {
        data: []
    };
    
    componentDidMount() {
        FirebaseService.getDataList('PCs', (dataReceived) =>    this.setState({data: dataReceived}))
    }
    
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <TopBar/>
                    <Card style={{margin: '50px'}}>
                        <CardContent>

                            <Route exact
                                path={urls.home.path}
                                render={(props) => <Welcome {...props}/>}
                            />

                            <Route exact
                                path={urls.data.path}
                                render={(props) => 
                                    <DataTable {...props} data={this.state.data}/>}
                            />

                            <Route exact
                                path={urls.add.path}
                                render={(props) => 
                                            <Add {...props}/>}
                            />
                            

                        </CardContent>
                    </Card>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default App;
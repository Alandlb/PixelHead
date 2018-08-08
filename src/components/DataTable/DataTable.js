import React from 'react';
import {Button, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";
import FirebaseService from "../Services/FirebaseService";
import DeleteIcon from "@material-ui/icons/Delete";


export const DataTable = ({data}) => {
    
    const remove = (id) => {
        FirebaseService.remove(id, 'PCs');
    };

    return <React.Fragment>
        <Typography variant="headline" component="h2">PC's Cadastrados</Typography>
        <Table selectable={false}>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Nome PC</TableCell>
                    <TableCell>CPU</TableCell>
                    <TableCell>GPU</TableCell>
                    <TableCell>RAM</TableCell>                    
                    <TableCell>Disco</TableCell>                                  
                    <TableCell>Categoria</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map((item, index) =>
                        <TableRow key={index}>
                            <TableCell>{item.key}</TableCell>
                            <TableCell>{item.NomePc}</TableCell>
                            <TableCell>{item.CPU}</TableCell>
                            <TableCell>{item.GPU}</TableCell>
                            <TableCell>{item.RAM}</TableCell>
                            <TableCell>{item.Disco}</TableCell>                            
                            <TableCell>{item.Categoria}</TableCell>
                            <TableCell>
                                <Button onClick={() => remove(item.key)}>
                                       <DeleteIcon/>
                                </Button>                                
                            </TableCell>

                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    </React.Fragment>
};
export default DataTable;
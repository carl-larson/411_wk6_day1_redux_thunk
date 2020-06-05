import React from 'react'
import { Button, Container, Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'

const Import = (props) => {
    console.log("PROPS: ", props.makes)
    return (
        
        <Container component={Paper}>
            <Button onClick={props.fetchMakes} variant='contained' color='primary'>Import</Button>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Car Makes!</TableCell>
                    <TableCell align="right">ID</TableCell>
                    <TableCell align="right">Type</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {props.makes.map((car) => (
                    <TableRow key={car.name}>
                    <TableCell component="th" scope="row">
                        {car.name}
                    </TableCell>
                    <TableCell align="right">{car.MakeName}</TableCell>
                    <TableCell align="right">{car.MakeID}</TableCell>
                    <TableCell align="right">{car.VehicleTypeName}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Import
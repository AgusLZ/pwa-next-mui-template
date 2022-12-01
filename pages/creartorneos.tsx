import { Button, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router';
import React, { ChangeEvent, FormEvent, useState } from 'react'
const crearTorneo = () => {
    const [nameTeam, setNameTeam] = useState<string>("");
    const [namesTeam, setNamesTeam] = useState<string[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNameTeam(event.target.value)
    }

    const handlePress = () => {
        setNamesTeam([nameTeam, ...namesTeam]);
        setNameTeam("")
        console.log(namesTeam);
    }
    const router = useRouter()
    const { name } = router.query
    return (
        <>
            <div id="create">
            <Typography id="title-1">Crear torneo</Typography>
            <Typography>{name}</Typography>

            <TextField id="outlined-basic" label="Nombre del equipo" variant="outlined" onChange={handleChange} />
            <Button onClick={handlePress}>agregar equipos</Button>
            <select id='btn-select' name="Tipo de torneo">

                <option value="value1" selected>-Seleccionar tipo de torneo-</option>
                <option value="value1">Eliminatoria</option>
                <option value="value2">Liga</option>
            </select>
        <br />
            <a href='/mistorneos'>
               <button id="send">Crear torneo</button>
            </a>
            </div>
        </>
    )
}

export default crearTorneo
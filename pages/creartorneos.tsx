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
            <Typography>Crear torneo</Typography>
            <Typography>{name}</Typography>

            <TextField id="outlined-basic" label="Nombre del equipo" variant="outlined" onChange={handleChange} />
            <Button onClick={handlePress}>agregar equipos</Button>
            <select name="Tipo de torneo">

                <option value="value1" selected>-Seleccionar tipo de torneo-</option>
                <option value="value1">Eliminatoria</option>
                <option value="value2">Liga</option>
                <option value="value3">Fase de grupos y Eliminatorias</option>
            </select>

            <a href='/mistorneos'>
               <button>Crear torneo</button>
            </a>


        </>
    )
}

export default crearTorneo
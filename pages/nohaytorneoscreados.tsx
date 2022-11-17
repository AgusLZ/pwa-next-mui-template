import { Box, Button, Container, Link, Stack, TextField, Typography } from "@mui/material"

const nohaytorneos = () => {
    return (
        <Container maxWidth="sm">
            <Typography variant="h4">Primero debes crear un torneo</Typography>
            <Box component={"form"} action="/creartorneos">
                <Stack >
                    <TextField id="name" name="name" required autoFocus label="Nombre de tu primer equipo" />
                    <Button type="submit">Crear torneo</Button>
                </Stack>
            </Box>
        </Container>
    )
}

export default nohaytorneos
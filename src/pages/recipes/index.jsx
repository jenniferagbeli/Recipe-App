import { Grid, Card, CardMedia, Typography, CardContent, Container, TextField, } from "@mui/material";

export default function Recipes() {
    return (
        <Container sx={{my: '2rem'}} maxWidth="sm">
         <TextField 
         fullWidth 
         id="outlined-basic" 
         label="Enter a keyboard to search recipes and hit Enter"
         variant="outlined" />

            <Grid sx={{ mt:'1rem'}} container spacing={3}>
                <Grid item xs={4}>
                <Card>
                    <CardMedia 
                    sx={{height: 140}}
                    image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"/>
                </Card>
                <CardContent>
                    <Typography variant="h5">Potash</Typography>
                </CardContent>
            </Grid>
         </Grid>
        </Container>
    );
}
// or

// const Recipes = () => {
//     return ();
// }
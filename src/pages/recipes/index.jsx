import { Grid, Card, CardMedia, Typography, CardContent, Container, TextField, } from "@mui/material";
import RecipeItem from "../../components/recipe-item";
import { useEffect, useState } from "react";

export default function Recipes() {
    const [recipes, setRecipes] = useState([]);

    const searchRecipes = () => {
        // prepare url
        const url = new URL('https://api.spoonacular.com/recipes/complexSearch');
        url.searchParams.append('apiKey', '682ecbd217144c468f8557a129534144');
        // fetch recipes
        fetch(url)
            // .then((response) => {return response.json()})
            .then((response) => response.json())
            .then((data) => {
                // update the recipes state
               setRecipes(data.results);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(searchRecipes, []);

    return (
        <Container sx={{ my: '2rem' }}>
            <TextField
                fullWidth
                id="outlined-basic"
                label="Enter a keyboard to search recipes and hit Enter"
                variant="outlined" />

            <Grid sx={{ mt: '1rem' }} container spacing={3}>
                {recipes.map((recipe) => <RecipeItem key={recipe.id} title={recipe.title} image={recipe.image} />)}
            </Grid>
        </Container>
    )
}
// or

// const Recipes = () => {
//     return ();
// }
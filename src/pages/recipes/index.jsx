import { Grid, Card, CardMedia, Typography, CardContent, Container, TextField, } from "@mui/material";
import RecipeItem from "../../components/recipe-item";
import { useEffect, useState } from "react";
import noRecipes from "../../assets/images/undraw_no_data_re_kwbl.svg";
import spinner from "../../assets/images/infinite-spinner.svg";

export default function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [searchItem,setSearchItem] = useState("");
    const [loading, setLoading] = useState(false);

    const searchRecipes = () => {
        setLoading(true);
        // prepare url
        const url = new URL('https://api.spoonacular.com/recipes/complexSearch');
        url.searchParams.append('apiKey', process.env.REACT_APP_SPOONACULAR_API_KEY);
        url.searchParams.append('query', searchItem); //Add the query parameter

        // Try-outs
        // url.searchParams.append('number', 25);
        // url.searchParams.append('offset', 5);

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
            .finally(() => setLoading(false)) 
    }

    useEffect(searchRecipes, []);

    return (
        <Container sx={{ my: '2rem' }}>
            <TextField
                fullWidth
                id="outlined-basic"
                label="Enter a keyboard to search recipes and hit Enter"
                variant="outlined"
                value={searchItem}
                    onChange={(event) => setSearchItem(event.target.value)}
                onKeyDown={(event) => event.key === 'Enter' && searchRecipes()}/>

            <Grid sx={{ mt: '1rem' }} container spacing={3}>
                {loading ? (
                    <Container sx={{display: 'flex', justifyContent: 'center'}}>
                        <img src={spinner} width="50%" />
                    </Container>
                ): recipes.length > 0? recipes.map((recipe) => <RecipeItem key={recipe.id} title={recipe.title} image={recipe.image} />) : (
                        <Container sx={{display: 'flex', justifyContent: 'center'}}>
                            <img src={noRecipes} width="25%" />
                            </Container>
                )}
            </Grid>
        </Container>
    )
}
// line 51---> to add the spinnter place it infront of : recipes.length
// line 47---> inserted a noimage pic which appears when the pictures dont appear {recipes.lenght > 0? infront of recipes.map----<img src=}

// or

// const Recipes = () => {
//     return ();
// }
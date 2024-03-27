import { useParams } from "react-router-dom"
import useSWR from "swr";
import spinner from "../../assets/images/infinite-spinner.svg";
import { Container } from "@mui/material";
import Navbar from "../../components/navbar/index.jsx"

const getRecipe = (...args) => {
    // prepare url
    const url = new URL(...args);
    url.searchParams.append('apiKey', process.env.REACT_APP_SPOONACULAR_API_KEY);
    // fetch and return data
    return fetch(url).then(response => response.json());
}

export default function Recipe() {
    const { id } = useParams();
    const { data: recipe, isLoading } = useSWR(`${process.env.REACT_APP_RECIPE_API}/recipes/${id}`, getRecipe);

    console.log(recipe, isLoading);

    return (
    <>
        <Navbar/>
            {isLoading? <img src={spinner} /> : (
                 <Container>
                 <h1>{recipe.title}</h1>
                 <div>{recipe.description}</div>
                 <img src={`https://savefiles.org/${recipe.image}?shareable_link=151`}  alt={recipe.title}/>
                 </Container>
            )}
        </>
        );
}
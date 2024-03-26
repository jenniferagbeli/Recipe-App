import { Alert, Box, Collapse, Container, IconButton, MenuItem, TextField } from "@mui/material";
import { Close } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import Navbar from "../../components/navbar";

const countries = [
    { value: 'GH', label: 'Ghana' },
    { value: 'NG', label: 'Nigeria' },
    { value: 'BE', label: 'Benin' },
    { value: 'TG', label: 'Togo' }
];

export default function AddRecipe() {
    const [loading, setLoading] = useState(false); //you can change the false to true
    const [open, setOpen] = useState(false);

    const addRecipe = async (event) => {
        setLoading(true);
        // Prevent default form submit behavior
        event.preventDefault();
        // Get form data
        const formData = new FormData(event.target);
        // Post form data to the backend

        const response= await fetch(`http://localhost:4000/recipes`, {
            method: 'POST',
            body: formData,
        })
        console.log(response)
        

        
        setLoading(false);
    }

    return (
        <>
        <Navbar/>
            <Container sx={{ my: '2rem' }} maxWidth="sm">
                <h1>Add A New Recipe</h1>
                <form onSubmit={addRecipe}>
                    <TextField
                        sx={{ mb: '2rem' }}
                        fullWidth
                        name="title"
                        label="Recipe Title" />
                    <TextField
                        sx={{ mb: '2rem' }}
                        fullWidth
                        name="description"
                        label="Recipe Description"
                        multiline
                        rows={4} />
                    <TextField
                        sx={{ mb: '2rem' }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        type="file"
                        fullWidth
                        name="image"
                        label="Recipe Image" />
                    <TextField
                        sx={{ mb: '2rem' }}
                        select
                        fullWidth
                        name="country"
                        label="Recipe Country"
                        defaultValue="GH"
                    >
                        {countries.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Box textAlign="center">
                        <Collapse in={open}>
                            <Alert
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setOpen(false);
                                        }}
                                    >
                                        <Close fontSize="inherit" />
                                    </IconButton>
                                }
                                sx={{ mb: 2 }}
                            >
                                New Recipe Added Successfully!
                            </Alert>
                        </Collapse>

                        <LoadingButton
                            sx={{ width: '50%' }}
                            loading={loading}
                            type="submit"
                            size="large"
                            variant="contained">
                            Add New Recipe
                        </LoadingButton>
                    </Box>
                </form>
            </Container>
        </>
    );
}
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";


export default function Navbar() {
    return(
        // you can add colourafter the AppBar
        <AppBar  position="static">
        <Toolbar>
          <Typography component={Link} to="/recipes" variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
            Recipe App
          </Typography>
          <Button component={Link} to="/add-recipe" color="inherit">Add New Recipe</Button>
        </Toolbar>
      </AppBar>
    );
}
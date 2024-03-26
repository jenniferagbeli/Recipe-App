import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Recipe from "./pages/recipe";
import Recipes from "./pages/recipes";
import AddRecipe from "./pages/add-recipe";

const router = createBrowserRouter([
  {path: "/", element: <Recipes /> },
  {path: "/recipes", element: <Recipes />},
  {path: "/add-recipe", element: <AddRecipe />},
  {path: "/recipes/:id", element: <Recipe />},
]);

function App() {
  return (
    <>
   <RouterProvider router={router} />
    </>
  );
}

export default App;

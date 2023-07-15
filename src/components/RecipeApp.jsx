import React, { useEffect, useState } from "react";
import axios from "axios";
import Recipe from "./Recipe";
import { Button, Grid } from "@mui/material";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Container from '@mui/material/Container';


import './main.css';


const RecipeApp = () =>{
    const APP_ID = "fd1c465b";
    const APP_KEY = "c8275d256c641e629f864892c9cdac98";
    const [recipe, setRecipe ] = useState([]);
    const [inputText, setInputText] = useState('');

   
    useEffect(()=>{
        getRecipe();
        
    },[inputText])

    const handleSubmit = (e)=>{
        e.preventDefault();
        
    }

    const getRecipe = async () => {
        const response = await axios.get(`https://api.edamam.com/search?q=${inputText}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
        )
        setRecipe(response.data.hits)
        console.log(response.data.hits)
    }
    return(
        <>
        <div>
        <Container fluid maxWidth="sm">
        <Paper  onSubmit={(e)=>handleSubmit}
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase 
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }} 
        type="text" 
        value={inputText} onChange={(e)=>setInputText(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      
     
    </Paper>
    </Container>   

            {
                recipe.map((recipe)=>{
                  return  <Recipe title={recipe.recipe.label}
                   calories={recipe.recipe.calories} 
                   image={recipe.recipe.image}
                   ingredients={recipe.recipe.ingredients} 
                   cautions={recipe.recipe.cautions} 
                   ingredientLines={recipe.recipe.ingredientLines}
                   mealType={recipe.recipe.mealType}
                   digest={recipe.recipe.digest}

                   />
                
                })
            }
           
        </div>
        <div>

        </div>
        </>
    )
}
export default RecipeApp;
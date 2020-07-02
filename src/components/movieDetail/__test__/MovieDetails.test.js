import React from 'react';
import ReactDom from 'react-dom';
import MovieDetails from '../MovieDetails';
import { render,screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it("render without crashing",()=>{
    const div=document.createElement("div");
    ReactDom.render(<MovieDetails></MovieDetails>, div)
});


 
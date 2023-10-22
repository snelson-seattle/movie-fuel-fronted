import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Searchbar from './Searchbar';
import { BrowserRouter } from 'react-router-dom';
const mockAxios = require("axios")
jest.mock('axios', () => jest.fn())
mockAxios.mockImplementation((input:any) => {Promise.resolve(input)})


describe("<Searchbar/>", () => {
    test("Should fetch movie data", () => {
        render(
            <BrowserRouter>
                <Searchbar />
            </BrowserRouter>
        );
        const nextPageButton = screen.getByTestId("nextPageButton")
        if(nextPageButton)
        fireEvent.click(nextPageButton)
        const previousPageButton = screen.getByTestId("prevPageButton")
        if(previousPageButton)
        fireEvent.click(previousPageButton)
        const searchbar = screen.getByTestId("searchbar")
        if(searchbar)
        fireEvent.change(searchbar)
        const go = screen.getByTestId("go")
        if(go)
        fireEvent.click(go)
        expect(mockAxios).toHaveBeenCalledTimes(4);

        // Check if user information is displayed
    });

});
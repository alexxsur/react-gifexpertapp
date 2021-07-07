import React from "react";
import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {

    const getGif = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?limit=10&q=homero&api_key=gyIiSo12lWr226ySyAgSmhQgep5CIJRn';
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
    }

    getGif();

    return (
            <div>
                <h3>{category}</h3>
            </div>
        );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
import React from 'react';

import { AlbumContainer } from "./album.styles";

const Album = ({ title }) => (
    <AlbumContainer>
        <p className="album-title">{title}</p>
    </AlbumContainer>
);

export default Album;
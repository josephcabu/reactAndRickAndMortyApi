import React, { useState } from 'react';
import './CharacterCard.css';

interface CharacterCardProps {
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: {
        name: string;
    }
    image: string;
}

const CharacterCard: React.FC<CharacterCardProps> = (CharacterCardProps) => {
    const { 
        name,
        status,
        species,
        gender,
        origin,
        image
    } = CharacterCardProps;

    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`card ${isFlipped ? 'is-flipped' : ''}`} onClick={handleFlip}>
            <div className="card-inner">
                <div className="card-front">
                    <img className="character-image" src={image} alt={name} />
                    <h2 className="character-name"> {name} </h2>
                    <p className="character-species"> {species} </p>
                </div>
                <div className="card-back">
                    <span className="character-feature">
                        Estatus:
                        <p className="feature-description">{status}</p>
                    </span>
                    <span className="character-feature">
                        Género:
                        <p className="feature-description">{gender}</p>
                    </span>
                    <span className="character-feature">
                        Origen:
                        <p className="feature-description">{origin.name}</p>
                    </span>
                    <span className="character-feature">
                        Especie:
                        <p className="feature-description">{species}</p>
                    </span>                 
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;
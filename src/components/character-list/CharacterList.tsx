import React from 'react';
import CharacterCard from '../character-card/CharacterCard';
import { useCharacters } from '../../hooks/useCharacters';

//Styles
import './CharacterList.css';

const CharacterList: React.FC = () => {
    const { characters, loading, error } = useCharacters();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="character-list">
            {characters.map((character) => (
                <CharacterCard
                    key={character.id}
                    name={character.name}
                    image={character.image}
                    status={character.status}
                    gender={character.gender}
                    origin={character.origin}
                    species={character.species}
                />
            ))}
        </div>
    );
};

export default CharacterList;
import { useEffect, useState } from 'react';
import api from '../components/apis/api';
import axios from 'axios';

interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: {
        name: string;
    }
    image: string;
}

export const useCharacters = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        const fetchCharacters = async () => {
            try {
                setLoading(true);
                const response = await api.get('/character', {
                    signal: controller.signal,
                });
                setCharacters(response.data.results);
            } catch (err: any) {
                if (axios.isCancel(err)) {
                    console.log('Petición cancelada por :', err.message); // Log if request is canceled
                } else {
                    setError(err.response?.data?.error || 'Fallo al obtener los personajes'); // More descriptive error message
                }
            } finally {
              setLoading(false);
            }
        };

        fetchCharacters();

        return () => {
            controller.abort();
        };

    }, []);
    return { characters, loading, error };
};
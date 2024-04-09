import { Pokemon } from "../types/pokemon";

export const getRandomProfileData = async (): Promise<Pokemon | ErrorCode> => {
  const profileId = Math.floor(Math.random() * 83) + 1;
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${profileId}`);

    if (!response.ok) {
      return { errorCode: response.status };
    }

    const result = await response.json();

    return {
      id: result.id,
      name: result.name,
      weight: result.weight,
      imageUrl: result.sprites.back_default
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { errorCode: 500 };
  }
}

export interface ErrorCode {
  errorCode: number;
}

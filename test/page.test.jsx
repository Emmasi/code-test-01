import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import Page from '../app/page'
import { getRandomProfileData } from "../app/API/api";

jest.mock("../app/API/api.tsx", () => ({
  getRandomProfileData: jest.fn()
}));

describe("Render <Page />", () => {
  test("should render pokemon on initial load", async () => {

    //arrange
    const mockData = {
      id: 1,
      name: "Pikachu",
      weight: "60",
      imageUrl: "pikachu.jpg"
    };

    getRandomProfileData.mockResolvedValue(mockData);

    //act
    render(<Page />);

    await waitFor(() => screen.getByRole('heading', {
      name: /Pikachu/i
    }));

    //assert
    expect(screen.getByText(/Email: Pikachu@hotmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone number: 0732-6060/i)).toBeInTheDocument();
    expect(screen.getByRole('img', {
      name: /bild på pikachu/i
    })).toBeInTheDocument();
  });

  test("should re-render pokemon when pressing button", async () => {
    const mockData1 = {
      id: 1,
      name: "Pikachu",
      weight: "60",
      imageUrl: "pikachu.jpg"
    };

    const mockData2 = {
      id: 2,
      name: "Bulbasaur",
      weight: "69",
      imageUrl: "bulbasaur.jpg"
    };

    getRandomProfileData.mockResolvedValueOnce(mockData1).mockResolvedValueOnce(mockData2);

    render(<Page />);

    await waitFor(() => screen.getByRole('heading', {
      name: /Pikachu/i
    }));

    fireEvent.click(screen.getByText(/Ny profil/i));

    await waitFor(() => screen.getByRole('heading', {
      name: /Bulbasaur/i
    }));

    expect(screen.queryByText(/Email: Pikachu@hotmail.com/)).toBeNull()
    expect(screen.queryByText(/Phone number: 0732-6060/)).toBeNull();

    expect(screen.getByText(/Email: Bulbasaur@hotmail.com/)).toBeInTheDocument()
    expect(screen.getByText(/Phone number: 0732-6969/)).toBeInTheDocument();
    expect(screen.getByRole('img', {
      name: /bild på bulbasaur/i
    })).toBeInTheDocument();
  });
});

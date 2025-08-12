import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("PostList search", () => {
  it("filtra i post mentre digiti (senza fake timers)", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    // Prendi il campo search per ruolo (più robusto del placeholder)
    const input = screen.getByRole("searchbox", { name: /cerca/i });
    const user = userEvent.setup();

    await user.clear(input);
    await user.type(input, "props");

    // Attendi il rendering dell’elemento filtrato
    expect(await screen.findByText(/Stato e props/i)).toBeInTheDocument();
    // E verifica che l’altro non ci sia più
    expect(screen.queryByText(/Benvenuto nel Blog/i)).not.toBeInTheDocument();
  });
});


import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("NotFound", () => {
  it("mostra una pagina 404 per route inesistente", () => {
    render(
      <MemoryRouter initialEntries={["/questa-non-esiste"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { name: /Pagina non trovata/i })).toBeInTheDocument();
  });
});

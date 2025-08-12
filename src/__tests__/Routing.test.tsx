import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("Routing", () => {
  it("naviga al dettaglio cliccando sul titolo del post", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    const user = userEvent.setup();
    await user.click(screen.getByRole("link", { name: /Benvenuto nel Blog/i }));
    expect(screen.getByRole("heading", { name: /Benvenuto nel Blog/i })).toBeInTheDocument();
  });
});

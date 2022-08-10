import { render, screen } from "@testing-library/react";
import Card from "./card";

describe("Card Component", () => {
  const cardProps = {
    cardData: {
      id: "1",
      name: "rick",
      image: "",
      status: "alive",
      species: "human",
      origin: { name: "earth", type: "planet" },
      location: { name: "earth", type: "planet" },
    },
  };

  it("should render Card component", () => {
    render(<Card {...cardProps} />);
    expect(screen.getByText("human")).toBeInTheDocument();
  });
});

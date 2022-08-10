import { render, screen } from "@testing-library/react";
import CardItem from "./cardItem";

describe("CardItem Component", () => {
  const cardItemProps = {
    name: "species",
    value: "human",
    type: "human"
  };

  it("should render Card component", () => {
    render(<CardItem {...cardItemProps} />);
    expect(screen.getByText(/species/)).toBeInTheDocument();
  });
});

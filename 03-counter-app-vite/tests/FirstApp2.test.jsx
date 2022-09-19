import {render, screen} from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => { 

  const title = "Hola, soy Goku";
  const subtitle = "Soy un subtítulo";

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar el mensaje 'Hola, soy Goku'", () => {
    render(<FirstApp title={title} />);
    expect( screen.getByText(title)).toBeTruthy();
    //screen.debug();
  });

  test("Debe mostrar el título en un h1", () => {
    render(<FirstApp title={title} />);
    expect( screen.getByRole('heading', {level: 1})).toBeTruthy();
    expect( screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
  });

  test("Debe mostrar el subtítulo enviado por props", () => {
    render(<FirstApp title={title} subtitle={subtitle} />);
    expect( screen.getByText(subtitle)).toBeTruthy();
  });
  
});
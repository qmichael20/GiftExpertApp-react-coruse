import { GifGridItem } from "../../components/GifGridItem";
import React from "react";
import { shallow } from "enzyme";

describe("Pruedas en GifGridItem", () => {
  const title = "Titulo";
  const url = "https://localhost/imagen.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Componente renderizado correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Url y alt deben ser igual a props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("animacion animate__pulse", () => {
    const div = wrapper.find("div");
    const className = div.prop("className");
    expect(className.includes("animate__pulse")).toBe(true);
  });
});

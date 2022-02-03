import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { GifExpertApp } from "../GifExpertApp";

// jest.mock("../../hooks/useFetchGifs");

describe("Prueba de <GifExpertApp", () => {
  test("Carga correctamente", () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar una lista de categorias", () => {
    const categories = ["Naruto", "Vegetta"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});

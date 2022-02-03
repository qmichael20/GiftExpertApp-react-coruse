import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";
import "@testing-library/jest-dom";

describe("Pruebas AddCategory", () => {
  const setcategories = jest.fn();
  let wrapper = shallow(<AddCategory setcategories={setcategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setcategories={setcategories} />);
  });

  test("Mostrarse Correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Change en la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola pepe";
    input.simulate("change", {
      target: {
        value,
      },
    });
  });

  test("No debe postear la informacion con submit cuando no hay texto", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setcategories).not.toHaveBeenCalled();
  });

  test("Debe llamar el setcategories y limpiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola Guapo";

    input.simulate("change", {
      target: {
        value,
      },
    });

    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setcategories).toHaveBeenCalledTimes(1);
    expect(setcategories).toHaveBeenCalledWith(expect.any(Function));

    const textValue = wrapper.find("input");

    expect(textValue.prop("value")).toBe("");
  });
});

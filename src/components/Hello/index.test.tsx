import { shallow } from "enzyme";
import * as React from "react";
import Hello from ".";

describe("Hello Component", () => {
  it("renders the correct text when no enthusiasm level is given", () => {
    const hello = shallow(<Hello name="Kim" />);
    expect(hello.find(".greeting").text()).toEqual("Hello Kim!");
  });

  it("renders the correct text with an explicit enthusiasm of 1", () => {
    const hello = shallow(<Hello name="Kim" enthusiasmLevel={1} />);
    expect(hello.find(".greeting").text()).toEqual("Hello Kim!");
  });

  it("renders the correct text with an explicit enthusiasm of 1", () => {
    const hello = shallow(<Hello name="Kim" enthusiasmLevel={5} />);
    expect(hello.find(".greeting").text()).toEqual("Hello Kim!!!!!");
  });

  it("throws when the enthusiasm level is 0", () => {
    expect(() => {
      shallow(<Hello name="Kim" enthusiasmLevel={0} />);
    }).toThrow();
  });

  it("throws when the enthusiasm level is -5", () => {
    expect(() => {
      shallow(<Hello name="Kim" enthusiasmLevel={-5} />);
    }).toThrow();
  });
});

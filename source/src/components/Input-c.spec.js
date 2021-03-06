/* eslint-disable no-undef */
import Input from './Input-c.vue';
import { render } from "@testing-library/vue";

describe("Rendering css validation", () => {
  it("has is-invalid class for input when help is set", () => {
    const { container } = render(Input, { props: {help: "Error message"} });
    const input = container.querySelector("input");
    expect(input.classList).toContain("is-invalid");
  })
  
  it("has invalid-feedback class for span when help is set", () => {
    const { container } = render(Input, { props: {help: "Error message"} });
    const span = container.querySelector("span");
    expect(span.classList).toContain("invalid-feedback");
  })
  
  it("does not have is-invalid class for input when help is not set", () => {
    const { container } = render(Input);
    const input = container.querySelector("input");
    expect(input.classList).not.toContain("is-invalid");
  })
})

import { text_to_url } from "../text_to_url";

it("should change space with -", () => {
  expect(text_to_url("text to url")).toEqual("text-to-url")
});
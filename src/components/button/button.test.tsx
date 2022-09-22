import React from "react";
import { render } from "@testing-library/react";
import Button from "./button";

test('first react test case', () => {
    const wrapper = render(<Button>Nice</Button>)
    const element = wrapper.queryAllByText('Nice')
    expect(element).toBeTruthy()
})
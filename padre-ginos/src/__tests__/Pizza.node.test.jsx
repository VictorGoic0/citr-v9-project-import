import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Pizza from "../Pizza";


afterEach(cleanup);

// just a basic test for trying out vitest
test("alt text renders on image", async () => {
    const title = "My Favorite Pizza";
    const image = "https://picsum.photos/200";
    const screen = render(
        <Pizza title={title} description="super cool pizza" image={image} />
    );
    const img = screen.getByRole("img");
    expect(img.src).toBe(image);
    expect(img.alt).toBe(title);
})

test("to have default image if none is provided", async () => {
    const screen = render(
    <Pizza name={"Cool Pizza"} description="super cool pizza" />
  );

  const img = screen.getByRole("img");
  expect(img.src).not.toBe("");
})
import { render, screen } from "@testing-library/react";

import TodoFooter from "../TodoFooter";

test('render todo footer container', () => {
  render(<TodoFooter todoLength={3} />);
  const containerElement = screen.getByTestId('todo-footer-container');
  expect(containerElement).toBeInTheDocument();
})

describe('todo length > 0', () => {
  describe('todo length == 1', () => {
    test('render todo footer with item', () => {
      render(<TodoFooter todoLength={1} />);
      const footerWithItem = screen.getByTestId('todo-footer-with-items');
      expect(footerWithItem).toHaveTextContent("You have 1 task");
    })
  })

  describe('todo length > 1', () => {
    test('render todo footer with items', () => {
      render(<TodoFooter todoLength={3} />);
      const footerWithItems = screen.getByTestId('todo-footer-with-items');
      expect(footerWithItems).toHaveTextContent("You have 3 tasks");
    })
  })
})

describe('todo length < 0', () => {
  test('render todo footer item message', () => {
    render(<TodoFooter todoLength={0} />);
    const footerWithNoItems = screen.queryByTestId('todo-footer-with-items');
    expect(footerWithNoItems).not.toBeInTheDocument();
  })
  test('render todo footer with no item', () => {
    render(<TodoFooter todoLength={0} />);
    const footerWithNoItems = screen.getByTestId('todo-footer-no-items');
    expect(footerWithNoItems).toBeInTheDocument();
  })
})
import { fireEvent, render, screen } from "@testing-library/react"
import TodoInput from "../TodoInput"

const mockSetTodoFnc = jest.fn()

test('todo input field typed', () => {
  render(<TodoInput setTodo={mockSetTodoFnc} />)
  const inputField = screen.getByTestId('todo-input-field')
  fireEvent.change(inputField, { target: { value: 'test' } })
  expect(inputField.value).toBe('test')
})

test('todo input field click button', () => {
  render(<TodoInput setTodo={mockSetTodoFnc} />)
  const inputField = screen.getByTestId('todo-input-field')
  const button = screen.getByTestId('todo-input-button')
  fireEvent.change(inputField, { target: { value: 'test' } })
  fireEvent.click(button)
  expect(inputField.value).toBeFalsy()
})
## Exercise 1
- Expensive Calculation with **useMemo**

Description:
 You’re building a character counter tool for writers. The tool calculates the total character count and estimated reading time for large text inputs. The calculation should only re-run when the input text changes — not on every keystroke or render.

Goals:
-- Use useMemo to memoize expensive string calculations.

-- Update state with useState.


Example Metrics to Compute:

- Total characters

- Words per minute estimate (e.g., 200 WPM)

- Average word length

*Bonus*:

- Add a textarea resize feature without re-rendering the metrics.


## Exercise 2
Description:
  You’re tasked with creating a form that manages its inputs using useReducer. The form includes multiple fields like name, email, and a newsletter checkbox.

Goals:
-- Use useReducer to manage form field states and updates.

-- Validate input on submit and show basic error messages.

*Bonus Challenge*:

- Include a reset button using a RESET_FORM action.

- Use useMemo to compute if the form is valid before enabling the submit button.

## Exercise 3

Description:
  Create a modal that is only loaded when the user clicks “Open Modal”. Use React.lazy and Suspense to defer loading.

Goals:

-- Use React.lazy to import the modal.

-- Wrap it in Suspense with a loading fallback.

-- Use local state (useState) to show/hide the modal.


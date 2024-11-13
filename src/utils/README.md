# Global Utilities Folder

This folder is intended only for global utilities. If a utility is specific to a feature, it should reside in that feature's folder under a `utils` subfolder. For example, `feature/product/utils`.

## What is a Utility?

A utility is a small function or a set of functions that perform a specific task or a group of related tasks. These tasks are usually common operations that are needed in various parts of the application, such as data manipulation, formatting, or calculations.

## When is a Utility a Utility and Should Live in the utils Folder?

Utilities should be placed in the `utils` folder when they small, reusable functions that provide a specific functionality. These functions are often used across different parts of the application and are not specific to a particular feature or module.

examples of libs include:

-   **toCapitalized**: A utility function that capitalizes the first letter of a string.
-   **getTextContrast**: A utility function that calculates the contrast ratio between two colors.

## Organizing Utilities

To make it easier to find and manage utility functions as the project grows, utilities should be broken down into their own folders and files based on their functionality. For example:

-   `utils/strings/`: Contains utility functions for string manipulation.
-   `array/`: Contains utility functions for array operations.
-   `utils/date/`: Contains utility functions for date and time operations.

Each folder should contain related utility functions grouped together in separate files. This organization helps in maintaining a clean and manageable codebase.

## TODO

-   Implement `eslint-plugin-boundaries` to enforce the usage of imports and exports within these folders. This will help in maintaining proper boundaries and dependencies between different parts of the codebase.

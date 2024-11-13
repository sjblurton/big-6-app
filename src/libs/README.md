# Global Libraries Folder

This folder is intended only for global libraries. If a library is specific to a feature, it should reside in that feature's folder under a lib subfolder. For example, feature/product/lib.

## What is a Library?

A library is a collection of related functions, classes, or modules that provide a set of functionalities. These functionalities are usually more complex and comprehensive than utilities, often encompassing a broader scope of operations or providing a more extensive API.

## When Should a Library Live in the Lib Folder?

Libraries should be placed in the lib folder when they become a large collection of related functions or a more complex library. These are often external npm packages that we want to use globally or custom libraries that provide significant functionality across the application.

## Examples of Libraries Include:

-   **Luxon**: A library for working with dates and times.
-   **Lodash**: A library for working with strings and other utilities.

## Organizing Libraries

To make it easier to find and manage libraries as the project grows, libraries should be broken down into their own folders and files based on their functionality. For example:

-   `lib/cms/`: Contains libraries for content management system operations.
-   lib/logger/: Contains an external library for logging and error handling.

Each folder should contain related libraries grouped together in separate files. This organization helps in maintaining a clean and manageable codebase.

## TODO

Implement eslint-plugin-boundaries to enforce the usage of imports and exports within these folders. This will help in maintaining proper boundaries and dependencies between different parts of the codebase.
By following this structure, we ensure that our global libraries are well-organized, easy to find, and maintainable. This approach also helps in minimizing code duplication and ensuring consistency across the project.

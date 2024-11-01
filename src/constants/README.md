# Global Constants Folder

This folder is intended only for global constants. If a constant is specific to a feature, it should reside in that feature's folder under a constants subfolder if it's not to be used anywhere else. For example, feature/product/constants.

## What is a Constant?

A constant is a value that does not change during the execution of the program. Constants are used to store fixed values that are used throughout the application, such as configuration settings, magic numbers, or strings that are reused in multiple places.

## When Should a Constant Live in the Constants Folder?

Constants should be placed in the constants folder when they are used globally across multiple features or modules. If a constant is only relevant to a specific feature, it should be placed in that feature's constants subfolder.

## Examples of Constants Include:

API Endpoints: URLs for API requests.
Configuration Settings: Values for application configuration.
Magic Numbers: Fixed numerical values used in calculations.
Strings: Reusable strings used in multiple places.

## Naming Convention

Constants should be named in uppercase with underscores (\_) separating words. For example:

```javascript
const API_ENDPOINT = "https://api.example.com"
const MAX_LENGTH = 100
const ERROR_MESSAGE = "An error occurred"
```

## Organizing Constants

To make it easier to find and manage constants as the project grows, constants should be broken down into their own folders and files based on their functionality. For example:

-   `constants/api/`: Contains constants for API endpoints.
-   `constants/config/`: Contains constants for configuration settings.
-   `constants/numbers/`: Contains constants for fixed numerical values.
-   `constants/strings/`: Contains constants for reusable strings.

Each folder should contain related constants grouped together in separate files. This organization helps in maintaining a clean and manageable codebase.

## TODO

Implement eslint-plugin-boundaries to enforce the usage of imports and exports within these folders. This will help in maintaining proper boundaries and dependencies between different parts of the codebase.

By following this structure, we ensure that our global constants are well-organized, easy to find, and maintainable. This approach also helps in minimizing code duplication and ensuring consistency across the project.

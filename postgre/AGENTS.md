```markdown
# AGENTS.md - AI Coding Agent Guidelines

These guidelines are designed to ensure the consistent, high-quality, and maintainable development of AI coding agents within this repository. Adherence to these principles is mandatory for all development activities.

## 1. DRY (Don't Repeat Yourself)

*   All code should have a single, well-defined purpose.
*   Avoid duplicating code blocks or logic across multiple files.
*   When reuse is necessary, design it to be a component, not a core function.
*   Leverage existing libraries and modules whenever possible.

## 2. KISS (Keep It Simple, Stupid)

*   Prioritize simplicity in design and implementation.
*   Write code that is easy to understand and debug.
*   Avoid unnecessary complexity.
*   Focus on the core functionality required by each agent.
*   Keep the code concise and easily navigable.

## 3. SOLID Principles

*   **Single Responsibility Principle:** Each class or module should have one, and only one, reason to change.
*   **Open/Closed Principle:** The system should be extensible through options without modifying the core implementation.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base class without altering the correctness of the program.
*   **Interface Segregation Principle:** Clients should not be forced to depend on methods they don't use.
*   **Dependency Inversion Principle:** Higher-level modules should not depend on lower-level modules.  Instead, they should depend on abstractions.

## 4. YAGNI (You Aren't Gonna Need It)

*   Implement only the functionality required for the current task.
*   Avoid adding features or functionalities that are not currently needed.
*   Refactor only when necessary, based on future requirements.
*   Don’t introduce implementation details that are unlikely to be needed.

## 5. Code Structure & File Management

*   Each file must be no more than 180 lines of code.
*   Code should be formatted consistently (e.g., using a code formatter).
*   Use descriptive variable and function names.
*   Include comments explaining complex logic or non-obvious decisions.
*   Prioritize clear and readable code.
*   Maintain a consistent naming convention.

## 6. Testing

*   All development must be productive.  No mocking or fake implementations are permitted *except* for unit tests.
*   Unit tests must be comprehensive and cover all core functionalities.
*   Test coverage should be at least 80%.
*   Unit tests should focus on individual components and functions, not entire agents.
*   Test expectations should be clearly documented.
*   Test cases should be self-contained and not rely on external dependencies.

## 7. File Limitations

*   Maximum file length: 1800 lines of code.
*   All files must have a clear and documented purpose.
*   Include a README.md file explaining the purpose of each file and its dependencies.
*   Each file should follow the structure defined in the 'Structure & File Management' section.
*   Prioritize clear and concise documentation.

## 8.  Specific Requirements (Illustrative - Adapt as Needed)

*   **Agent Class:** Define clear methods for agent management, task execution, and data handling.
*   **Data Storage:** Implement a simple data storage mechanism (e.g., dictionary or database) for agent states and data.
*   **Communication Protocol:** Specify a basic communication protocol for agents to exchange information.
*   **Error Handling:** Introduce a mechanism for handling errors gracefully.
*   **Logging:** Implement basic logging functionality to track agent actions.

## 9.  Code Style

*   Use consistent indentation and spacing.
*   Avoid unnecessary whitespace.
*   Follow established coding style guidelines.
*   Employ standardized library calls.


These guidelines will be enforced for all code produced within the AGENTS.md repository.  Any violation of these rules will result in code being rejected.
```
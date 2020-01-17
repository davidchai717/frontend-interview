## Question

1. Name a newer feature of javascript that you believe is extra useful, and discuss how you have used it in this project, or how you would use it if needed.

- Destructuring for sure. Not only does it allow for cleaner code through the application, but it allows for tree-shaking which greatly reduces unnecessary bloat from dependencies, thus cutting down on the bundle size.

2. What are 3 things you think `React` does very poorly? What tools do this better, if any?
- State management for an application that requires multiple reducers (although the Hooks and Context combo can achieve the Flux pattern alone, it can't quite merge multiple reducers effectively yet without breaking the "Single Source of Truth" principle). Redux for sure still excels in situations like that.
- React evolves on a constant basis, which can be bad for enterprise-level clients that require stability (as they can't always be up-to-date with the latest React version - which often times can introduce crucial security fixes).
- React being unopioninated can make it a bad choice for larger teams, as it's just a view library in its core and can pose headache if there isn't a contract set early on during the development.


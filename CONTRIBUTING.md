# Contributing to WS Tmux Theming

Thank you for your interest in contributing! To maintain code quality and stability, we follow a strict **Release-Based Workflow**.

## 🌿 Branching Strategy

We use the following long-lived branches:
- **`main`**: Contains the code currently in production. No one commits directly to this branch.
- **`dev`**: The primary integration branch. All features are merged here first.

### Short-lived Branches
- **`feature/xxx`**: For new features or enhancements. (Base: `dev`)
- **`release/vX.X.X`**: For final testing and version bumping before a release. (Base: `dev`)
- **`hotfix/xxx`**: For urgent production bug fixes. (Base: `main`)

## 🚀 How to Contribute

1. **Create a Feature Branch**: 
   `git checkout -b feature/your-feature-name dev`
2. **Commit Your Changes**: 
   Follow [Semantic Commit](https://www.conventionalcommits.org/) messages (e.g., `feat: add login button`).
3. **Open a Pull Request**: 
   Target the **`dev`** branch. Ensure all CI checks pass.
4. **Code Review**: 
   Once approved, your code will be merged into `develop`.

## 📦 Release Process

Releases are performed by the maintainers:
1. A `release/vX.X.X` branch is created from `dev`.
2. After final QA, the release branch is merged into **`main`**.
3. A **GitHub Release** and **Git Tag** are created on the merge commit.
4. The release branch is merged back into `dev` to sync any final fixes.

## 🔢 Versioning

We follow [Semantic Versioning (SemVer)](https://semver.org/):
- **Major** (1.0.0): Breaking changes.
- **Minor** (0.1.0): New features (backward compatible).
- **Patch** (0.0.1): Bug fixes (backward compatible).

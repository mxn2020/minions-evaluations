# minions-evaluations

**Benchmarks, test cases, and prompt scoring for continuous agent improvement**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-evaluations/sdk minions-sdk

# Python
pip install minions-evaluations

# CLI (global)
npm install -g @minions-evaluations/cli
```

---

## CLI

```bash
# Show help
evaluations --help
```

---

## Python SDK

```python
from minions_evaluations import create_client

client = create_client()
```

---

## Project Structure

```
minions-evaluations/
  packages/
    core/           # TypeScript core library (@minions-evaluations/sdk on npm)
    python/         # Python SDK (minions-evaluations on PyPI)
    cli/            # CLI tool (@minions-evaluations/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [evaluations.minions.help](https://evaluations.minions.help)
- Blog: [evaluations.minions.blog](https://evaluations.minions.blog)
- App: [evaluations.minions.wtf](https://evaluations.minions.wtf)

---

## License

[MIT](LICENSE)

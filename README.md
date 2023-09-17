# Lets play with Bun 🥟

To install dependencies:

```bash
bun install
```

Scripts:

```bash
    "dev": "bun --watch index.ts",
    "test": "bun --watch test",
    "format": "bun biome format ./app --write",
    "lint": "bun biome check --apply-unsafe ./app" # Fire some error at the and but works
```

This project was created using `bun init` in bun v1.0.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

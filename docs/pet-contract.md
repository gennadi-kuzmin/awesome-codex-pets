# Codex Pet Contract

Custom Codex pets use one fixed spritesheet atlas and one small manifest file.

## Files

Each pet folder should contain:

```text
pet.json
spritesheet.webp
```

## `pet.json`

```json
{
  "id": "terminal-ghost",
  "displayName": "Terminal Ghost",
  "description": "A friendly tiny CLI ghost for Codex.",
  "spritesheetPath": "spritesheet.webp"
}
```

## Spritesheet Atlas

- Format: WebP.
- Dimensions: `1536x1872`.
- Grid: 8 columns x 9 rows.
- Cell size: `192x208`.
- Background: transparent.
- Unused cells: fully transparent.

## Animation Rows

| Row | State | Used columns |
| --- | --- | ---: |
| 0 | idle | 0-5 |
| 1 | running-right | 0-7 |
| 2 | running-left | 0-7 |
| 3 | waving | 0-3 |
| 4 | jumping | 0-4 |
| 5 | failed | 0-7 |
| 6 | waiting | 0-5 |
| 7 | running | 0-5 |
| 8 | review | 0-5 |

Do not add labels, gutters, grid lines, extra frames, or shadows outside the cell.

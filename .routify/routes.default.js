

export default {
  "meta": {},
  "id": "_default",
  "file": {
    "path": "src/routes",
    "dir": "src",
    "base": "routes",
    "ext": "",
    "name": "routes"
  },
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {},
      "id": "_default_index_md",
      "name": "index",
      "module": () => import('../src/routes/index.md'),
      "file": {
        "path": "src/routes/index.md",
        "dir": "src/routes",
        "base": "index.md",
        "ext": ".md",
        "name": "index"
      },
      "children": []
    },
    {
      "meta": {},
      "id": "_default_index_svelte",
      "name": "index",
      "module": () => import('../src/routes/index.svelte'),
      "file": {
        "path": "src/routes/index.svelte",
        "dir": "src/routes",
        "base": "index.svelte",
        "ext": ".svelte",
        "name": "index"
      },
      "children": []
    }
  ]
}
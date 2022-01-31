

export default {
  "meta": {},
  "id": "_default",
  "module": () => import('../src/routes/_module.svelte'),
  "file": {
    "path": "src/routes/_module.svelte",
    "dir": "src/routes",
    "base": "_module.svelte",
    "ext": ".svelte",
    "name": "_module"
  },
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {},
      "id": "_default_1_home",
      "name": "1.home",
      "module": false,
      "file": {
        "path": "src/routes/1.home",
        "dir": "src/routes",
        "base": "1.home",
        "ext": ".home",
        "name": "1.home"
      },
      "children": [
        {
          "meta": {},
          "id": "_default_1_home_index_svelte",
          "name": "index",
          "module": () => import('../src/routes/1.home/index.svelte'),
          "file": {
            "path": "src/routes/1.home/index.svelte",
            "dir": "src/routes/1.home",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "children": []
        }
      ]
    },
    {
      "meta": {},
      "id": "_default_index_md",
      "name": "index",../src/routes/_module.svelte
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
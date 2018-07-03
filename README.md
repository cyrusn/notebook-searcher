# Notebook Searcher

Searcher theme for [hugo](https://gohugo.io/) the blog.

# Features
- toc with scroll spy (disable if set `toc = false` in front matter)
- full keyboard control

# Navgation guide
- `Q` to go home
- `Space` to search
- `Enter` to start navigate in results
- `Enter` again to go to selected page
- `J` / `K` to navigate the list or scroll up and down in page
- `H` / `L` to navigate the page number
- `[` / `]` to navigate the navbar

## Plugins

``` yaml
# YAML Front Matter
# enable equation editor
katex: true
# enable abc music notation
abcjs: true
# enable mermaid diagram
mermaid: true
```

# Dependencies

## jquery
```sh
# current version v3.3.1
# jquery for bootstrap (slim.min)
curl -o static/js/jquery.slim.min.js https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js
```

## bootstrap

```sh
# current version v4.1.1
# update from [Quick Start · BootstrapCDN by StackPath](https://www.bootstrapcdn.com/)
curl -o static/js/bootstrap.bundle.min.js https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.bundle.min.js

curl -o static/css/bootstrap.min.css https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css

```

## font-awesome
```sh
# current version v5.1.0
# [Getting Started | Font Awesome](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=svg-with-js)
curl -o static/js/fontawesome-all.min.js https://use.fontawesome.com/releases/v5.1.0/js/all.js
```

## lunr

```sh
# current version v2.3.0
# [lunr.js - cdnjs.com - The best FOSS CDN for web related libraries to speed up your websites!](https://cdnjs.com/libraries/lunr.js/)
curl -o static/js/lunr.min.js https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.0/lunr.min.js
```

## remark
```sh
# current version v0.14.0
# [Home · gnab/remark Wiki · GitHub](https://github.com/gnab/remark/wiki#getting-started)
curl -o static/js/remark-latest.min.js https://remarkjs.com/downloads/remark-latest.min.js
```


## katex
```sh
# current version 0.10.0-beta
# update auto-renderer
# [GitHub - Khan/KaTeX: Fast math typesetting for the web.](https://github.com/Khan/KaTeX)
# [KaTeX/README.md at master · Khan/KaTeX · GitHub](https://github.com/Khan/KaTeX/blob/master/contrib/auto-render/README.md)
curl -o static/css/katex.min.css https://cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.css
curl -o static/js/katex.min.js https://cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.js
curl -o static/js/auto-render.min.js https://cdn.jsdelivr.net/npm/katex@latest/dist/contrib/auto-render.min.js
```

## abcjs
```sh
# currrent version 5.1.2
# update abcjs
curl -o static/js/abcjs_basic-min.js https://raw.github.com/paulrosen/abcjs/master/bin/abcjs_basic_5.1.2-min.js
```

## mermaid
```sh
# currrent version 7.1.2
# update mermaid
# [MermaidJS CDN](https://unpkg.com/mermaid@7.1.2/dist/)
curl -o static/js/mermaid.min.js https://unpkg.com/mermaid@7.1.2/dist/mermaid.min.js
```

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
wget https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js -O static/js/jquery.slim.min.js
```

## bootstrap

```sh
# current version v4.1.1
# update from [Quick Start · BootstrapCDN by StackPath](https://www.bootstrapcdn.com/)
wget https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.bundle.min.js -O static/js/bootstrap.bundle.min.js 

wget https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css -O static/css/bootstrap.min.css 

```

## font-awesome
```sh
# current version v5.1.0
# [Getting Started | Font Awesome](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=svg-with-js)
wget https://use.fontawesome.com/releases/v5.1.0/js/all.js -O static/js/fontawesome-all.min.js 
```

## lunr

```sh
# current version v2.3.0
# [lunr.js - cdnjs.com - The best FOSS CDN for web related libraries to speed up your websites!](https://cdnjs.com/libraries/lunr.js/)
wget https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.0/lunr.min.js -O static/js/lunr.min.js 
```

## remark
```sh
# current version v0.14.0
# [Home · gnab/remark Wiki · GitHub](https://github.com/gnab/remark/wiki#getting-started)
wget https://remarkjs.com/downloads/remark-latest.min.js -O static/js/remark-latest.min.js 
```


## katex
```sh
# current version 0.10.0-beta
# update auto-renderer
# [GitHub - Khan/KaTeX: Fast math typesetting for the web.](https://github.com/Khan/KaTeX)
# [KaTeX/README.md at master · Khan/KaTeX · GitHub](https://github.com/Khan/KaTeX/blob/master/contrib/auto-render/README.md)
wget https://cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.css -O static/css/katex.min.css
wget https://cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.js -O static/js/katex.min.js
wget https://cdn.jsdelivr.net/npm/katex@latest/dist/contrib/auto-render.min.js -O static/js/auto-render.min.js
```

## abcjs
```sh
# currrent version 5.1.2
# update abcjs
# [paulrosen/abcjs: javascript for rendering abc music notation](https://github.com/paulrosen/abcjs)
wget https://raw.github.com/paulrosen/abcjs/master/bin/abcjs_basic_5.1.2-min.js -O static/js/abcjs_basic-min.js
```

## mermaid
```sh
# currrent version 7.1.2
# update mermaid
# [MermaidJS CDN](https://unpkg.com/mermaid@7.1.2/dist/)
wget https://unpkg.com/mermaid@7.1.2/dist/mermaid.min.js -O static/js/mermaid.min.js 
```

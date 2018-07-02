# Notebook Searcher

Searcher theme for [hugo](https://gohugo.io/) the blog.

## Plugins

``` yaml
# YAML Front Matter

# enable equation editor
katex: true

# enable abc music notation
abcjs: true

```

# Dependencies

## jquery
```sh
# jquery for bootstrap
# current version v3.3.1
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
# update auto-renderer
# current version 0.10.0-beta
# [GitHub - Khan/KaTeX: Fast math typesetting for the web.](https://github.com/Khan/KaTeX)
# [KaTeX/README.md at master · Khan/KaTeX · GitHub](https://github.com/Khan/KaTeX/blob/master/contrib/auto-render/README.md)
curl -o static/css/katex.min.css https://cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.css
curl -o static/js/katex.min.js https://cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.js
curl -o static/js/auto-render.min.js https://cdn.jsdelivr.net/npm/katex@latest/dist/contrib/auto-render.min.js
```

## abcjs

## mermaid

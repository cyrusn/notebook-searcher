# Notebook Searcher

Searcher theme for [hugo](https://github.com/gohugoio/hugo) blog.

## Run the example site

``` sh
# in `notebook-searcher/`
hugo serve -D --themesDir ../.. --source ./exampleSite
```

# Features

- search posts on list page
- full keyboard navigation  
  check `Tips` on example for navigation guide
- TOC with scroll spy  
  TOC is enabled by default, set `toc` to `false` in front matter to disable it
- Katex plugin
- abcjs plugin
- mermaid plugin
- RemarkJS slides  
  Posts in `/slide` will be loaded with RemarkJS. See `exampleSite/note/` for details.

Several shortcodes are defined for the plugins. The post must enable the plugin *explicitly* in front matter so the corresponding dependencies will be added to the page.  
See `exampleSite/note/` for details.

## Search feature

```
# simply type the keyword to search words in title, tags or filename.
e.g. `abcjs`
# using wild card
e.g. `abc*`
# search keywords in title only
e.g. `title: abcjs`
# search keywords in tags only
e.g. `tags: music`
# fuzzy search
# please note that lunrjs will return error message if you just type `~`
# without number followed it
e.g. abcde~2
```

# Dependencies

Dependencies are placed in `static/`. Any versioning in file name is stripped.  
`current version` below denotes the version in `static/`.  
To update dependencies, execute the following command and update `current version`.

## jQuery

```sh
# current version v3.3.1
# jQuery for bootstrap (slim.min)
wget https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js -O static/js/jquery.slim.min.js
```

## Bootstrap

```sh
# current version v4.1.1
# update from [Quick Start · BootstrapCDN by StackPath](https://www.bootstrapcdn.com/)
wget https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.bundle.min.js -O static/js/bootstrap.bundle.min.js 

wget https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css -O static/css/bootstrap.min.css 

```

## Font Awesome

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

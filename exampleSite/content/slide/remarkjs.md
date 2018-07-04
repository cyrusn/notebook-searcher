---
title: "Notebook-Searcher RemarkJS CSS"
subtitle: ""
description:
draft: false
remarkOption: 
  ratio: 16:9
  Navigation:
    scroll: false
    click: true
date: 2018-05-24T19:59:24+08:00
tags:
  - remark

---

# Agenda

- Background
- Center list
- Example
- This is normal image
- `img-100` class to set max width to 100%
- `img-75` class to set max width to 75%
- Also available on ...
- `overflow` can make the image overflow
- Blockquote
- Syntax
- Two Column
- Syntax for two column
- Footnote

---

class: center middle bg-primary text-light
# RemarkJS - CSS Guide
<hr class="bg-light">
## [Hugo Theme | Notebook-Searcher][@1]

---
# Background

- `class: center middle bg-primary text-light` 

---
# Center list
.blockquote-info[
> ### Guide
> Use `.fit-content.mx-auto` to create a centered list
]

.center[
# Example
.fit-content.mx-auto[
- apple
- orange
- pear
]
]


---
class: center
# This is normal image
But the image is too .text-danger[**big**]
![image][@2]

---
class: center

# `img-100` class to set max width to 100%
.img-100[![image][@2]]

---
class: center

# `img-75` class to set max width to 75%
.img-75[![image][@2]]

---
# Also available on ...
- `img-50`
- `img-25`

---
class: center

# `overflow` can make the image overflow

Use together with `.img-100` and `h-75` can produce a nice overflowed image

.img-100.overflow.h-75[
![image][@2]
]

---
# Blockquote

.blockquote-primary[
> ### blockquote
> This is primary blockquote's content.
]

# Syntax
``` md
.blockquote-primary[
> #### blockquote
> This is primary blockquote's content.
]
```

Other available color: `primary`, `secondary`, `success`, `info`, `warning`, `danger`, `light`, `dark`

---
# Two Column
.row[
.col-6[
- This is column 1
  + apple
  + orange
]

.col-6[
- This is column 2
  + alpha
  + beta
  + see syntax on next page
]
]
---
# Syntax for two column
``` md
.row[
.col-6[
- This is column 1
  + apple
  + orange
]

.col-6[
- This is column 2
  + alpha
  + beta
]
]
```

---
class: row

.col-3.bg-light.sidebar[
### Sidebar
- alpha
- beta
- gammer
]

.col-9[
## Syntax 

```md
class: row

.col-3.bg-light.sidebar[
### Sidebar
- alpha
- beta
- gammer
]

.col-9[
This is the syntax 
...
]
```
]

---
# Footnote

This is example.sup[1] of footnote.sup[2], here is google.com.sup[3]
.footnote[
1. Hello! World.
2. see syntax on next page
3. https://google.com
]

## Syntax
``` md
This is example.sup[1] of footnote.sup[2], here is google.com.sup[3]
.footnote[
1. Hello! World.
2. see syntax on next page
3. https://google.com
]
```
 
---
class: center middle bg-info text-light

# .text-danger[♥] Thanks .text-danger[♥]

<!-- reference links -->

[@1]: https://github.com/cyrusn/notebook-searcher
[@2]: ./situgunung-flipped-1600.jpg
[@3]: ./situgunung-flipped-1600.jpg
[@4]: ./situgunung-flipped-1600.jpg
[@5]: ./situgunung-flipped-1600.jpg

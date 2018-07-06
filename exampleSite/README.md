# Notebook Searcher

## Run this example site
``` sh
# cd notebook-searcher
hugo serve -D --themesDir ../.. --source ./exampleSite
```

## Try the search feature
``` 

# simple type the keyword to search, it searchs words in title, tags or filename.
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

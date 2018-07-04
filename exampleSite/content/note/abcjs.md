---
title: "abcjs"
subtitle: "abcjs example"
description:
draft: false
katex: false
mermaid: false
abcjs: true
date: 2018-07-04T06:50:29+08:00
tags:
  - abcjs
  - score
  - music
---


# References
- [paulrosen/abcjs: javascript for rendering abc music notation][@1]
- [ABC Music Notation][@2]


# Example - Lyrics

{{< abcjs >}}
X: 1
T: Misirlou
C: N.Roubanis 1934
O: Greece
M: 4/4
L: 1/8
K: Gm
%
|: "D"D3 E ^F2 G2 | A3B ^c2BA | A8- | A8 |
w: 1.~Mi-sir-lou mou i gli-kia sou ma-tia
w: 2.~Mav-ro ma-ta Mi-sir-lou mou tre-lli
| D3E ^F2G2 | A3B ^c2BA | A8- | A8 |
w: Flo-ga m'e-hi~i-na-psi mes tin kar-dia
w: Ti zo-i m'al-la-zo me-na fi-li
{{</ abcjs >}}


# Example - Voices

{{< abcjs >}}
X:1
T: Sonata I
C: J.S. Bach
M: C
Q:"Adagio"
L: 1/8
K:C
V:1 clef=treble name="Violino I"      sname="Vl. I"
V:2 clef=treble name="Violino II"     sname="Vl. II"  space=+10
[V:1]  g8-|gf/e/ {e}f>g (a/f/d/f/) (A//=B//A//B//TB3//A///B///)|
[V:2] z8 | z8 |
%
[V:1] c/gf/ E/ed/ c/c'b/ A/ag/ | ^f/e/d- d/(c/B/A/) G/(e/c/e/) Aa| d2-d/g/_b/a/ a3 g/=f/|
[V:2] c8- | cB/A/ {A}B>c (e/c/A/c/) (E//^F//E//F//TF3//E///F///) | G/(D/G/A/) _B/G/g/e/ ^cA d2-|
%
[V:1] Te/>d/e- e/(a/f/d/) TB/>A/B- B/(A//B//c/)d/| TG/>F/G- G/(c/A/F/) DTd/>c/ d/g/B/d/|Tc/>B/c2 B A/ag/ fA|
[V:2] dT=c/>=B/ c>f d>e AF-| FTE/>D/ Ec'/-a/ Tf/>e/f- f/d/g/f/ | Te/>d/e/g/- g/fe/ d^c d/FE/|
%
[V:1] G/gf/ E/ed/ c/c'b/ A/ag/|^f/a/g/f/ g2-g>e' f2-|f/e^d/ e2-e>c' =d2-|
[V:2] DG, G/gf/ E/ed/ =c/c'B/|ad'- d'/c'/d'/e'/ Ta/>g/a- a/c'/b/^f/|(g//a//g//a//Ta3//g///a///) b/a/b/c'/ T^f/>g/f- f/a/g/d/|
%
Q:"Alla breve"
[V:1] [L:1/4] c4|B4|_B4|A2zd|=BGc2-|cd/e/ f/a/g/f/|e/d/c2B|e3^f|gG/A/Bc|
[V:2] [L:1/4] zC/D/EF|GDG2-|GF/E/DE|FCF2-|FE/D/EF/G/|AFDB|cgG2-|GA/B/ c/e/d/c/|Bd2e|
{{< /abcjs >}}

<!-- reference links -->

[@1]: https://github.com/paulrosen/abcjs
[@2]: http://trillian.mit.edu/~jc/music/abc/doc/ABCtut.html

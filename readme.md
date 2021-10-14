# Project 1 Documentation
## by Louis Guillermo

## Introduction

My project will be a trivia series of seemingly random questions, but each questions or their answers will reveal a "fun" fact about me. Whether it's a series, game, movie, or book I enjoyed or a place I have been. Each question's answer will provide an indirect or direct connection into an experience I had.

## Techologies Used

- HTML
- CSS
- JS
- jQuery

## Challenges
#### I have trouble with

I had difficulty with functions and coming up with an overall idea of how to set up my design, not with how to but in which way I should (colors, sizes, making it game like). I watched the following video which helped me with my css, responsive web design, essentially solving some of the questions I had:

https://www.youtube.com/watch?v=f4fB9Xg2JEY&ab_channel=BrianDesign



My code looked like:

const $question = $("#question")
const $a = $("a")
const $b = $("b")
const $c = $("c")
const $d = $("d")
const $p1score = $("#player1 h4")
const $p2score = $("#player2 h4")

after talking to the discord group and then Beth. I was able to see that the reason my answers weren't connecting was due to not addressing their id properties accurately. When corrected my code looked like:

const $question = $("#question")
const $a = $("#a")
const $b = $("#b")
const $c = $("#c")
const $d = $("#d")
const $p1score = $("#player1 h4")
const $p2score = $("#player2 h4")

#### Example Table

| Column 1 | Column 2 |
|----------|----------|
| thing1   | thing2   |
| yadda1   | yadda2   |

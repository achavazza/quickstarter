[Quickstarter](http://www.quickstarter.com.ar)
=============

Quickstarter is a bunch of tools to help you build your next HTML5 project.
It's a Lightweight, Mobile-first, Style-agnostic & Responsive Grid System.

Check it out [http://www.quickstarter.com.ar](http://www.quickstarter.com.ar)

##Usage
Compile quickstarter.less with [Koala](http://koala-app.com)

Use it, hack it, break it...

##Grid Markup
You can use either `.quads` or `.triads`, (quads for 4 column layout or triads for 3 columns)
and they can be nested infinitely.

When you need to break the line use `.row` as a container of `.quads`.

```
<div class="grid">
  <div class="row">
    <div class="quad-1">...</div>
    <div class="quad-1">...</div>
    <div class="quad-1">...</div>
    <div class="quad-1">...</div>
  </div>
  <div class="row">
    <div class="quad-2">...</div>
    <div class="quad-2">...</div>
  </div>
  <div class="row">
    <div class="quad-4">...</div>
  </div>
</div>
```
or

```
<div class="grid">
  <div class="row">
    <div class="triad-1">...</div>
    <div class="triad-1">...</div>
    <div class="triad-1">...</div>
  </div>
  <div class="row">
    <div class="triad-2">...</div>
    <div class="triad-1">...</div>
  </div>
  <div class="row">
    <div class="triad-3">...</div>
  </div>
</div>
```
preffix & suffix

```
<div class="grid">
  <div class="row">
    <div class="quad-1 prefix-3">...</div>
  </div>
  <div class="row">
    <div class="triad-1 suffix-2">...</div>
  </div>
</div>
```
mutate & visible

prefixes

+ `none` : by default is mobile
+ `-sm` : small  : tablet
+ `-md` : medium : tablet landscape, old monitors
+ `-lg` : large  : desktop

prefixes go from mobile to large
+ `none` > `-sm` > `-md` > `-lg`

```
<div class="grid">
  <div class="row">
    <div class="quad-4 quad-2-md">...</div>
    <div class="quad-4 quad-2-md">...</div>
  </div>
  <div class="row">
    <div class="quad-1 invisible-md">...</div>
    <div class="quad-1 visible-md">...</div>
    <div class="quad-1 invisible-only-md">...</div>
    <div class="quad-1 visible-only-md">...</div>
  </div>
</div>
```


##Twitter account

Follow me at, [@getquickstarter](http://twitter.com/getquickstarter), keep up to date on announcements and more.


##Author

**Alejandro Chavazza**

+ http://twitter.com/basarium
+ http://about.me/alejandro.chavazza
+ http://github.com/achavazza

##Copyright and license
Quickstarter is free, libre and public domain see more on [http://unlicense.org/](http://unlicense.org/)

# Bootstrap v3 Helper: Blocks

This is a responsive helper for adding width to inline block. The widths are calculated based on element parent container and are based on 12 grid columns.

These helper supports Bootstrap 3 responsive utilities (xs, sm, md, lg). Additional media queries is configurable and can be extended depending on your project requirements.

Test

## Getting Started

[Download](https://github.com/syaifulsz/my-css-components/releases) latest version or install by bower:

```sh
bower install bootstrap-helper-blocks
```

Include this stylesheet code into your site:

```html
<link rel="stylesheet" href="dist/bootstrap-helper-blocks.min.css" />
```

If you want to have a responsive margin-padding helper, include this stylesheet too:

```html
<link rel="stylesheet" href="dist/bootstrap-helper-blocks-responsive.min.css" />
```

## Example usage:

```html
<div class="clearfix">
    <div class="pull-left block--1-2">
        <a href="#" class="btn btn-primary btn-block">Submit</a>
    </div>
    <div class="pull-left block--1-2">
        <a href="#" class="btn btn-danger btn-block">Cancel</a>
    </div>
</div>
```

## Example usage with responsive media query:

```html
<div class="clearfix text-center">
    <div class="pull-left block-md--1-2 block-sm--1-4 block-xs">
        Box 1
    </div>
    <div class="pull-left block-md--1-2 block-sm--1-4 block-xs">
        Box 2
    </div>
    <div class="pull-left block-md--1-2 block-sm--1-4 block-xs--1-2">
        Box 3
    </div>
    <div class="pull-left block-md--1-2 block-sm--1-4 block-xs--1-2">
        Box 4
    </div>
</div>
```

## Extends and compile with Bootstrap 3 SASS

You're required to install these in order to extends this helper:

- NodeJS
- Grunt CLI
- Ruby
- SASS

### Installation

Run:

```sh
npm install
```

### Compile

Run:

```sh
grunt
```

### Enable Bootstrap 3's responsive utilities for this helper

Change these variables to `true`.

```sass
$helper-block--xs: false
$helper-block--sm: false
$helper-block--md: false
$helper-block--lg: false
```

### Adjust grid columns

Adjust grid column here:

```sass
$grid: 12
```

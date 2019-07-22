# Bootstrap v4 Extend: Button Raised

Add a new style to Bootstrap v4 Button **Raised** `.btn-raised-primary`.

![Bootstrap v4 Extend: Button Raised](https://raw.githubusercontent.com/syaifulsz/my-css-components/master/packages/bootstrap-v4-extend-button-raised/screenshot.png)

## Getting Started

Get latest version by installing via [npm](https://www.npmjs.com/package/@syaifulsz/bootstrap-v4-extend-button-raised):

```sh
npm install @syaifulsz/bootstrap-v4-extend-button-raised
```

Include this stylesheet code into your site:

```html
<link rel="stylesheet" href="dist/bootstrap-v4-extend-button-raised.min.css" />
```

## Usage:

Example with `<a>` tag:

```html
<a href="#" class="btn btn-raised-primary">Button Primary</a>
<a href="#" class="btn btn-raised-secondary">Button Secondary</a>
<a href="#" class="btn btn-raised-danger">Button Danger</a>
<a href="#" class="btn btn-raised-success">Button Success</a>
<a href="#" class="btn btn-raised-info">Button Info</a>
```

Example with `<button>` tag:

```html
<button type="button" class="btn btn-raised-primary">Button Primary</button>
<button type="button" class="btn btn-raised-secondary">Button Secondary</button>
<button type="button" class="btn btn-raised-danger">Button Danger</button>
<button type="button" class="btn btn-raised-success">Button Success</button>
<button type="button" class="btn btn-raised-info">Button Info</button>
```

## Development

To extends, develop or contribute to this component, you're required to fork our main [repository](https://github.com/syaifulsz/my-css-components) and made a pull request.

### Development Requirements

Development tools required for this component are:

- [NodeJS](https://nodejs.org/en/)
- [Grunt CLI](https://gruntjs.com)
- [Ruby](https://www.ruby-lang.org/en/) (optional)
- [SASS](https://sass-lang.com) (optional)

Ruby and SASS are optional if you're fully using [node-sass](https://github.com/sass/node-sass) from npm for development.

### Development Setup

Run:

```sh
npm install
```

### Compile

Run:

```sh
grunt
```
---

# TODO

Nothing todo for now.

---

# CHANGELOG

All notable changes to this project will be documented in this file. **For now, let's keep TODO and CHANGELOG in README file. Keeping things simple.**

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.3] - 2019-07-22
### Changed
- Remove `grunt-contrib-sass`
- Add `grunt-sass`
- Add `includePaths` parameter to grunt SASS
- Update description in `package.json`
- Change absolute path for screenshot image in README (fix issue screenshot not showing on NPM page)

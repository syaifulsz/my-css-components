# Bootstrap v4 Extend: Modal Drawer

Add new Bootstrap v4 component Modal Drawer. An extended Modal to stick and appear from sides.

## Getting Started

Get latest version by installing via [npm](https://www.npmjs.com/package/@syaifulsz/bootstrap-v4-extend-modal-drawer):

```sh
npm install @syaifulsz/bootstrap-v4-extend-modal-drawer
```

Include this stylesheet code into your site:

```html
<link rel="stylesheet" href="dist/css/modal-drawer.min.css" />
```

## Usage:

Just like Bootstrap default modal code but just need to include `.modal-drawer`.

```html
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#drawer-default">
    Launch Default Drawer
</button>
<div class="modal fade modal-drawer" id="drawer-default" tabindex="-1" role="dialog" aria-labelledby="drawer-default-label" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="drawer-default-label">Default Drawer</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>
```

To make the drawer to show from the right side, include `modal-drawer modal-drawer--right`.

```html
<div class="modal fade modal-drawer modal-drawer--right" id="drawer-right" tabindex="-1" role="dialog" aria-labelledby="drawer-right-label" aria-hidden="true">
    ...
</div>
```

### Drawer with Navbar

```html
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#example-drawer-menu">
    Menu
</button>

<div class="modal fade modal-drawer" id="example-drawer-menu" tabindex="-1" role="dialog" aria-labelledby="example-drawer-menu-label" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div class="h5 modal-title" id="example-drawer-menu-label">Menu</div>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body p-0 list-group list-group-flush">
                <a href="#" class="list-group-item list-group-item-action">Home</a>
                <a href="#" class="list-group-item list-group-item-action">About</a>
                <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#example-drawer-menu-products">
                    Products <span>&rsaquo;</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">Services</a>
                <a href="#" class="list-group-item list-group-item-action">Store</a>
                <a href="#" class="list-group-item list-group-item-action">Contact</a>
                <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">Partner</a>
            </div>
            <div class="modal-footer small text-muted">
                @syaifulsz. Copyright &copy; 2019.
            </div>
        </div>
    </div>
</div>

<div class="modal fade modal-drawer modal-drawer--level-1" id="example-drawer-menu-products" tabindex="-1" role="dialog" aria-labelledby="example-drawer-menu-products-label" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div class="h5 modal-title" id="example-drawer-menu-products-label">Product</div>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body p-0 list-group list-group-flush">
                <a href="#" class="list-group-item list-group-item-action">Product 1</a>
                <a href="#" class="list-group-item list-group-item-action">Product 2</a>
                <a href="#" class="list-group-item list-group-item-action">Product 3</a>
            </div>
        </div>
    </div>
</div>
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

## [1.0.0] - 2019-07-27
### Add
- Initial setup

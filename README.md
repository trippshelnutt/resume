## Example Resume Website

### About This Repository

This repository is an example resume website built using the following technologies/frameworks:
- Jekyll (requires v. 4 for newer features)
  - postcss
  - purgecss
- Tailwindcss
- Netlify (hosting)

### Build and Run

The following command will build and run the site.
```console
$ jekyll serve
```

If you just want to build the site.
```console
$ jekyll build
```

### File Structure

This should be a pretty comprehensive list of the file structure of the site along with the uses for each file.
- _includes
  - *.html
    - Each of these files are used for different parts of the resume website. Some use the `<section>` tag to represent different sections in the body of the resume and then the header and footer use the `<header>` and `<footer>` tags respectively.
- _jobs
  - *.md
    - Each of these files are used for individual jobs for the `experienct` section of the resume. They will be imported into a `jobs` collection using Jekyll and can be accessed with `site.jobs`.
- _layouts
  - default.html
    - Top level layout file for the resume website which pulls in each of the lower level sections.
- css
  - custom.css
    - This site contains any custom CSS used in the site. It also has the import directives for Tailwind.
- js
  - custom.js
    - Not currently used, this file would contain any custom JavaScript that could be used to add some more flair to the website.
- _config.yml
  - This file is the configuration for Jekyll which specifies which plugins to use, collections to build, etc.
- index.html
  - Main html page for the website, but everything is defined outside of this file in `_layouts/default.html`.
- netlify.toml
  - Configuration for Netlify build which specifies building Jekyll in production mode.
- package.json
  - Standard `package.json` file.
- postcss.config.js
  - This is the configuration file for postcss which specifies the includes needed to bring in Tailwind.
- purgecss.config.js
  - This is the configuration file for purgecss which will remove any unused CSS that is brought in by Tailwind. This is configured to only run in production mode. If purgecss is not used, Tailwind will generate a very large amount of CSS which will likely not be used.
- tailwind.config.js
  - This is the configuration file for Tailwind. There is currently not any configuration used here, but this would allow overriding any of the default classes that are generated by Tailwind.

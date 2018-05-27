# Smartdown via WordPress

The [Smartdown](https://www.npmjs.com/package/smartdown) system is designed to allow the rendering of Smartdown in a variety of contexts, blogging systems, and other educational and communication systems that demand technical and/or interactive capability. [WordPress](https://wordpress.org) is a popular and widely used content management and publishing system that is used for blogging as well as for building fully-capable web applications.

This particular repository is a collection of scripts and instructions for how to use WordPress and Smartdown together.

Currently, the only supported scheme is where your Smartdown content is stored as a set of Smartdown files in GitHub Gists, and rendered via your WordPress site. However, this support can be (and will be) extended to support Smartdown source files stored in a variety of locations, including GitHub, S3, Dropbox, etc.


## GitHub Gists, WordPress, Scripts-n-Styles Plugin

This is the first of several examples on how to render Smartdown content via your WordPress site. This technique relies upon your WordPress site having the 'Scripts n Styles' Plugin installed. Note that it is 'Scripts n Styles' and not 'Scripts And Styles'. The official link is:

- https://wordpress.org/plugins/scripts-n-styles/

There may be other plugins that provide the same functionality, but this is the one that I had access to and have verified works. The instructions below apply to version `3.4.4` of Scripts n Styles and version `4.9.6` of WordPress.

### Add Script to the `<Body>` Section

Using the plugin, I can add the following content to the Scripts tab, in the `<body>` section (as opposed to the `<head>` section):

[Scripts-n-Styles-body-script.js](Scripts-n-Styles-body-script.js)

When using Scripts n Styles, remember to hit the 'Update Scripts' button to get your changes saved properly.

### Refer to Smartdown Gist Content

In the main content area of your WordPress Page/Post, instead of including Smartdown content directly, you will instead provide a link to Smartdown content that is stored within a GitHub Gist. This link should be called `Smartdown Gist Source` and should point to a URL like:

-	https://gist.github.com/DoctorBud/3b5cbab3424e08199b8046cf98d19c8f/

If everything works correctly, when you visit your WordPress page or post, you should see the `Smartdown Gist Source` link replaced by the corresponding Smartdown content.

### Global vs Per-Page and Per-Post Script Settings


The above instructions require you to paste the [Scripts-n-Styles-body-script.js](Scripts-n-Styles-body-script.js) code into every page or post you wish to publish. Fortunately, the Scripts n Styles plugin supports a `Global` setting so that all of your pages/posts can optionally be Smartdown-enabled. The [Scripts-n-Styles-body-script.js](Scripts-n-Styles-body-script.js) script should have no effect for any post/page that doesn't have a  `Smartdown Gist Source`.



module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-emulsify",
      options: {
        componentLibPath: 'components',
        docPagesPath: 'styleguide',
        basePath: __dirname,
        // designSystems: [
        //   {
        //     name: "Parent/Child Design System 1",
        //     link: "/"
        //   },
        //   {
        //     name: "Parent/Child Design System 2",
        //     link: "/"
        //   }
        // ],
        // Site Metadata for style guide
        siteMetadata: {
          title: "PROJECT NAME",
          description: "PROJECT DESCRIPTION",
          author: "PROJECT AUTHOR",
        }
      },
    },
  ],
}

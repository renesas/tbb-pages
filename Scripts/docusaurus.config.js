export default {
    title: 'TBB Pages',
    url: 'https://lwray-renesas.github.io',
    baseUrl: '/TBB-Pages/',
    organizationName: 'lwray-renesas', // usually your GitHub org/user
    projectName: 'TBB-Pages',
    deploymentBranch: 'gh-pages',      // where the static site will be pushed
    trailingSlash: false,              // recommended for GitHub Pages
    plugins: [require.resolve('docusaurus-lunr-search')],
  
    presets: [
      [
        '@docusaurus/preset-classic',
        {
          docs: {
            path: '../', // <- use the repo root for docs (we will filter in sidebar)
            routeBasePath: '/', // serve at site root
            sidebarPath: './sidebar.js',
            include: [
              '*.MD',
              '*.md',
              '**/*.MD',
              '**/*.md',
            ],
            exclude: ['Scripts/**'],
          },
          blog: false,
        },
      ],
    ],
  };
  
export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '635edbe8be39490a431bc112',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-v8qjm5tc',
                  apiId: 'a6aab52f-ba54-4151-be46-f1bf4c27deea'
                },
                {
                  buildHookId: '635edbe91beb5405d800e776',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-xrfi1otk',
                  apiId: 'dc4d148c-2015-4c40-9294-fd5788d02fd5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hvega6/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-xrfi1otk.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

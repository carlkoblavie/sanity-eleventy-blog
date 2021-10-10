export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '616317b8939c25498fc7bb53',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-4jxxfug6',
                  apiId: '07301e7d-37ca-4179-891e-ad27858b5339'
                },
                {
                  buildHookId: '616317b8b70a9dad8533e105',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-njoedc8u',
                  apiId: 'dcb1da77-ee83-49f3-80f7-08c0ef8169e7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/carlkoblavie/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-njoedc8u.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

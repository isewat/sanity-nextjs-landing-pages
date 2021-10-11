export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61645bb0a33ec400cfe8ff14',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6zjwspeg',
                  apiId: '33d1f92e-351d-4c95-a4ae-a3a8f9f46932'
                },
                {
                  buildHookId: '61645bb196e10cc2f63a7f9d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-mdr1vyd5',
                  apiId: 'adcbe0ab-67e5-43a1-a8a1-e0a31250b905'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/isewat/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-mdr1vyd5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

export default {
  widgets: [
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
                  buildHookId: '60c3c47cf0636d156297249f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-huu8ahnw',
                  apiId: '477ff382-6442-4f7c-be23-e15cc7407927'
                },
                {
                  buildHookId: '60c3c47c2b687d0d0367a6ad',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6azxa7fs',
                  apiId: 'f6c1fea3-ce92-48c1-ad44-0ea293353897'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ericganderson/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6azxa7fs.netlify.app', category: 'apps'}
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

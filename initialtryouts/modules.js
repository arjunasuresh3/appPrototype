YUI_config = {
  base: '++resource++yuijs/build/',
  groups : {
    jiva: {
      base: '++resource++js/',
      modules: {
        COMMON: {
          path: 'common.js'
        },
        zecalendar: {
          path: 'zecalendar.js',
          requires: ["calendar", "widget-position", "widget-position-align", "widget-position-constrain"]
        }
      }
    },
    views: {
      base: '++resource++js/',
      modules: {
        MEMSRC: {
          path: 'mem_search.js',
          requires: ['view', 'autocomplete']
        },
        'model-sync-zope': {
          path: 'ModelSyncZope.js',
          requires: ['io','json']
        }
      }
    }
  }
}
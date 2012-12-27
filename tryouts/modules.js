YUI_config = {
  // filter:'raw',
  //combine:false,
  base: '++resource++js/build/',
  groups : {
    jiva: {
      base: '++resource++js/',
      modules: {
        COMMON: {
          path: 'common.js'
        },
        zecalendar: {
          path: 'zecalendar.js',
          requires: ["calendar", "base-build", 'datatype-date', 'event-outside', 'event-focus']
        }
      }
    },
    views: {
      base: '++resource++js/',
      modules: {
        MEMSRC: {
          path: 'mem_search.js',
          requires: ['view', 'autocomplete', 'json', 'event-outside']
        },
        'model-sync-zope': {
          path: 'ModelSyncZope.js',
          requires: ['io','json']
        },
        'mem_search_results': {
          path: '6.js',
          requires: ['view','datatable']
        }
      }
    }
  }
}
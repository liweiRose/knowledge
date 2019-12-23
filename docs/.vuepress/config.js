module.exports = {
  base: '/knowledge/',
  dest: 'dist',
  title: 'Summary of front-end knowledge system',
  port: 9090,
  description: 'Knowledge summary',
  serviceWorker: false,
  themeConfig: {
    repo: 'liweirose/knowledge',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [
      {
        text: '更多',
        link: 'https://github.com/liweirose'
      }
    ],
    sidebar: [
      {
        title: 'Browser',
        collapsable: true,
        children: [
          'app/Browser/Browser-introduction',
          'app/Browser/Browser-event-loop',
          'app/Browser/Browser-reflow-repaint',
          'app/Browser/Browser-cache'
        ]
      },
      {
        title: 'HTML',
        collapsable: true,
        children: [
          'app/HTML/HTML-new-label',
          'app/HTML/HTML-DOM',
          'app/HTML/HTML-BOM'
        ]
      },
      {
        title: 'CSS',
        collapsable: true,
        children: [
          'app/CSS/CSS-box-model',
          'app/CSS/CSS-selector',
          'app/CSS/CSS-layout',
          'app/CSS/CSS-flex',
          'app/CSS/CSS-CSS3'
        ]
      },
      {
        title: 'JavaScript',
        collapsable: true,
        children: [
          'app/JavaScript/JavaScript-data-type',
          'app/JavaScript/JavaScript-prototype',
          'app/JavaScript/JavaScript-object-create',
          'app/JavaScript/JavaScript-object-extends',
          'app/JavaScript/JavaScript-parameters-passed-value',
          'app/JavaScript/JavaScript-array-object-arguments',
          'app/JavaScript/JavaScript-scope',
          'app/JavaScript/JavaScript-execution-context-stack',
          'app/JavaScript/JavaScript-closure',
          'app/JavaScript/JavaScript-promise',
          'app/JavaScript/JavaScript-polyfill'
          // 'app/JavaScript/JavaScript-es6'
        ]
      },
      {
        title: 'JavaScript ES6',
        collapsable: true,
        children: [
          'app/JavaScript-ES6/ES6-let-const',
          'app/JavaScript-ES6/ES6-structure-assignment',
          'app/JavaScript-ES6/ES6-object-extension',
          'app/JavaScript-ES6/ES6-array-extension',
          'app/JavaScript-ES6/ES6-function-extension',
          'app/JavaScript-ES6/ES6-asynchronous',
          'app/JavaScript-ES6/ES6-class',
          'app/JavaScript-ES6/ES6-module'
        ]
      },
      {
        title: 'JS Utils',
        collapsable: true,
        children: [
          'app/UTILS/UTILS-recursive',
          'app/UTILS/UTILS-type-judgment',
          'app/UTILS/UTILS-heavy',
          'app/UTILS/UTILS-depth-copy',
          'app/UTILS/UTILS-object-merge',
          'app/UTILS/UTILS-objects-equal',
          'app/UTILS/UTILS-array-find',
          'app/UTILS/UTILS-array-max-min',
          'app/UTILS/UTILS-throttling-stabilization',
          'app/UTILS/UTILS-array-flattening',
          'app/UTILS/UTILS-function-krierized',
          'app/UTILS/UTILS-partial-function',
          'app/UTILS/UTILS-inertia-function',
          'app/UTILS/UTILS-function-composition',
          'app/UTILS/UTILS-memory-function',
          'app/UTILS/UTILS-out-of-order',
          'app/UTILS/UTILS-sorting'
        ]
      },
      {
        title: 'Interview',
        collapsable: true,
        children: [
          'app/Interview/Interview-html',
          'app/Interview/Interview-css',
          'app/Interview/Interview-javascript',
          'app/Interview/Interview-network',
          'app/Interview/interview-browser',
          'app/Interview/interview-framework',
          'app/Interview/Interview-algorithm',
          'app/Interview/Interview-data-structure',
          'app/Interview/interview-summary',
          'app/Interview/interview-performance'
        ]
      },
      {
        title: 'Engineering',
        collapsable: true,
        children: [
          'app/Engineering/Engineering-webpack',
          'app/Engineering/Engineering-babel',
          'app/Engineering/Engineering-post-css',
          'app/Engineering/Engineering-sass-less',
          'app/Engineering/Engineering-eslint',
          'app/Engineering/Engineering-git',
          'app/Engineering/Engineering-tools',
          'app/Engineering/Engineering-linux',
          'app/Engineering/Engineering-driven'
        ]
      },
      {
        title: 'Engineering Practice',
        collapsable: true,
        children: [
          'app/Engineering-Practice/Engineering-Practice-data-persistence',
          'app/Engineering-Practice/Engineering-Practice-JSBridge',
          'app/Engineering-Practice/Engineering-Practice-micro-service'
        ]
      },
      {
        title: 'Underscore SourceCode Parsing',
        collapsable: true,
        children: [
          'app/Underscore/Underscore-index'
          // 'app/Underscore/Underscore-isArray',
          // 'app/Underscore/Underscore-isFunction',
          // 'app/Underscore/Underscore-isObject'
        ]
      },
      {
        title: 'Lodash SourceCode Parsing',
        collapsable: true,
        children: [
          'app/Lodash/Lodash-isArray',
          'app/Lodash/Lodash-isFunction',
          'app/Lodash/Lodash-isObject'
        ]
      },
      {
        title: 'Plan List',
        collapsable: true,
        children: [
          'app/PlanList/2019'
        ]
      },
    ]
  }
};

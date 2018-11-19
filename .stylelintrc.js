module.exports = {
  'extends': 'stylelint-config-standard',
  'rules': {
    'no-empty-source': null,
    'at-rule-no-unknown': [
      true,
      {
        'ignoreAtRules': [
          'extend',
          'at-root',
          'debug',
          'warn',
          'error',
          'if',
          'else',
          'for',
          'each',
          'while',
          'mixin',
          'include',
          'content',
          'return',
          'function',
        ],
      },
    ],
    "at-rule-empty-line-before": [ "always", {
        'except': [
          'blockless-after-same-name-blockless',
          'first-nested',
        ],
        'ignore': ['after-comment'],
      }
    ],
  },
};

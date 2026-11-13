// Jana's design tokens on DocuSeal's one daisyUI theme. The theme keeps the
// name `docuseal` because every layout selects it by that name. The ramps are
// also Tailwind colours (`bg-jana-ink-80`, `text-jana-danger-60`), so the
// shared classes in application.scss and form.scss are written in the same
// recipes as the hub's Button, Input, Textarea and Label.
const jana = require('./tailwind.jana.tokens.js')

module.exports = {
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      // The warm clinic type system.
      fontFamily: {
        sans: ['Instrument Sans', 'Arial', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        mono: [
          ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
          { fontFeatureSettings: '"tnum", "zero"' }
        ]
      },
      colors: {
        jana,
        surface: '#FFFFFF',
        well: jana.ink[5]
      },
      // Roles, as the hub names them: text-default, text-muted, border-strong.
      textColor: {
        default: jana.ink[100],
        muted: jana.ink[70],
        subtle: jana.ink[60],
        placeholder: jana.ink[50],
        inverse: '#FFFFFF'
      },
      borderColor: {
        default: jana.ink[20],
        strong: jana.ink[30]
      },
      // The warm elevation ladder: every tier tinted with warm ink (#3F3C36).
      boxShadow: {
        xs: '0 1px 2px 0 rgb(63 60 54 / 0.05)',
        inset: 'inset 0 1px 2px 0 rgb(63 60 54 / 0.08)',
        'inset-deep': 'inset 0 2px 4px 0 rgb(63 60 54 / 0.12)',
        sm: '0 6px 12px 0 rgb(63 60 54 / 0.05)',
        DEFAULT: '0 6px 12px 0 rgb(63 60 54 / 0.05)',
        md: '0 2px 4px -1px rgb(63 60 54 / 0.04), 0 6px 12px -2px rgb(63 60 54 / 0.08)',
        lg: '0 4px 8px -2px rgb(63 60 54 / 0.05), 0 16px 32px -4px rgb(63 60 54 / 0.12)',
        dialog: '0 8px 16px -6px rgb(75 52 37 / 0.08), 0 24px 48px -12px rgb(75 52 37 / 0.16)'
      }
    }
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        docuseal: {
          'color-scheme': 'light',
          primary: jana.brown[20],
          secondary: jana.green[50],
          accent: jana.green[60],
          neutral: jana.ink[80],
          'base-100': jana.ink[5],
          'base-200': jana.ink[10],
          'base-300': jana.ink[20],
          'base-content': jana.ink[100],
          info: jana.blue[50],
          success: jana.green[60],
          warning: jana.yellow[30],
          error: jana.red[60],
          '--rounded-btn': '0.5rem',
          '--rounded-box': '0.75rem',
          '--rounded-badge': '9999px',
          '--btn-text-case': 'none',
          '--tab-border': '2px',
          '--tab-radius': '.5rem'
        }
      }
    ]
  }
}

module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   extends: [
      'airbnb',
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
   ],
   overrides: [
   ],
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json',
   },
   plugins: [
      'react',
   ],
   rules: {
      'linebreak-style': 0,
      '@typescript-eslint/semi': 0,
      '@typescript-eslint/indent': 0,
      'react/jsx-indent': 0,
      'react/react-in-jsx-scope': 0,
   },
}

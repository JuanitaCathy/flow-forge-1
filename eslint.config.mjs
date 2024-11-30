import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import tsEslint from '@typescript-eslint/eslint-plugin';
import unusedImports from 'eslint-plugin-unused-imports';
import parser from '@typescript-eslint/parser';

export default [
  {
    languageOptions: {
      parser: parser, 
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true, 
        },
      },
      globals: {
        ...globals.browser, 
        ...globals.node,    
        es2021: true,        
      },
    },
  },
  {
    plugins: {
      'unused-imports': unusedImports,
      react: pluginReact,
      '@typescript-eslint': tsEslint,
    },
    rules: {
      
      'unused-imports/no-unused-imports': 'warn',

      
      '@typescript-eslint/no-unused-vars': 'off', 
      'no-console': 'off',  
      '@typescript-eslint/explicit-module-boundary-types': 'off',  
      '@typescript-eslint/no-explicit-any': 'off',  
      'react/prop-types': 'off',  
      'react/react-in-jsx-scope': 'off',  
      'react/jsx-uses-react': 'off',  
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

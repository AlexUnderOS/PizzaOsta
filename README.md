

[SASS]
npm install -g sass
npm install -D sass-embedded

__vite.config.js__
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  }
__________________
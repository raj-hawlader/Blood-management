const path = require('path');

module.exports = {
  // ...existing configuration...
  module: {
    rules: [
      // ...existing rules...
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
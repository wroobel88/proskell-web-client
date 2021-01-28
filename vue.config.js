module.exports = {
  devServer: {
    proxy: {
      "/haskell": {
        target: "http://localhost:5000/",
        changeOrigin: true,
      },
      "/prolog": {
        target: "http://localhost:5000/",
        changeOrigin: true,
      },
    },
  },
};

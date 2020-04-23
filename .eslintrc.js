module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: "babel-eslint",
  extends: [
    "airbnb",
  ],
  plugins: ["react"],
  rules: {
    "react/jsx-uses-react": 2,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-one-expression-per-line": 0,
    "react/prop-types": 0,
  },
}

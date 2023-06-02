module.exports = (api) => {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@assets": "./src/assets",
            "@constants": "./src/constants",
            "@config": "./src/config",
            "@navigation": "./src/navigation",
            "@components": "./src/components",
            "@services": "./src/services",
            "@styles": "./src/styles",
            "@theme": "./src/theme",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};

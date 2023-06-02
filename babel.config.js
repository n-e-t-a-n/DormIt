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
            "@components": "./src/components",
            "@hooks": "./src/hooks",
            "@navigation": "./src/navigation",
            "@services": "./src/services",
            "@theme": "./src/theme",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};

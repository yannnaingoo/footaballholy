module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://footaballholy.xyz/",
        permanent: true,
      },
      // {
      //   source: "/:slug",
      //   destination: "https://footaballholy.xyz/:slug",
      //   permanent: true,
      // },
    ];
  },
};

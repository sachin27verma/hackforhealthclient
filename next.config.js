
const nextConfig = {
}

// module.exports = nextConfig


// next.config.js

module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/ddos',
          destination: 'https://mis.svnit.ac.in/SVNIT', // Proxy to external URL
        },
      ];
    },
  };
  
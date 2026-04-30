module.exports = {
  apps: [
    {
      name: "turkmen-english",
      script: "node",
      args: ".next/standalone/server.js",
      cwd: "/root/turkmen-english",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "0.0.0.0",
      },
      restart_delay: 3000,
      max_restarts: 10,
    },
  ],
};

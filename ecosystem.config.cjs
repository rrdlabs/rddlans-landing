module.exports = {
  apps: [
    {
      name: "rrdlabs-landing",
      script: "/root/rrdlabs-landing/node_modules/next/dist/bin/next",
      args: "start -p 3000",
      cwd: "/root/rrdlabs-landing",
      env: {
        NODE_ENV: "production",
      },
      instances: 1,
      autorestart: true,
      max_memory_restart: "512M",
    },
  ],
};
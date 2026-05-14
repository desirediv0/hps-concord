module.exports = {
  apps: [
    {
      name: "hps-concord",
      cwd: "/root/hps-concord",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 7007
      },
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "800M",
      error_file: "/root/.pm2/logs/hps-concord-error.log",
      out_file: "/root/.pm2/logs/hps-concord-out.log",
      log_date_format: "DD/MM/YYYY HH:mm:ss"
    }
  ]
};

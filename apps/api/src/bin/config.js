// ecosystem.config.js

module.exports = {
    apps: [
      {
        name: 'App Name',
        script: './../main.js',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'development',
          PORT: 3000,
          DB_URL: 'mongodb://localhost:27017/myapp'
          // Add other environment variables as needed
        },
        env_production: {
          NODE_ENV: 'production',
          PORT: 8080,
          DB_URL: 'mongodb://prod-server:27017/myapp'
          // Add production environment variables
        }
      }
    ]
  };
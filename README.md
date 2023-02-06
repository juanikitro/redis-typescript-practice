# Install Redis

```bash
sudo apt update
sudo apt install redis-server
```

## Config

Add "supervised systemd" at the final of redis.conf file

```bash
sudo nano /etc/redis/redis.conf
```

```bash
sudo systemctl restart redis.service
```

### Link with Localhost

Add "bind 127.0.0.1 ::1" in redis.conf file

```bash
sudo nano /etc/redis/redis.conf
```

```bash
sudo systemctl restart redis
```

### Password

Uncomment the "requirepass foobared" in redis.conf file and change "foobared" for your password. Add your password to the .env file with the "REDIS_PASSWORD" key

```bash
sudo nano /etc/redis/redis.conf
```

```bash
sudo systemctl restart redis.service
```

# Run the project

```bash
npm i &&
npm run redis &&
npm run start
```

# The endpoints

### All characters

First call: 300ms
Second call: 10ms

```bash
curl http://localhost:3000/character
```

### Specific characters

First call: 190ms
Second call: 8ms

```bash
curl http://localhost:3000/1
```

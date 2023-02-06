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

Uncomment the "requirepass foobared" in redis.conf file and change "foobared" for your password

```bash
sudo nano /etc/redis/redis.conf
```

```bash
sudo systemctl restart redis.service
```

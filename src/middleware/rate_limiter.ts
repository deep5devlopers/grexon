// Distributed sliding-window rate limiter with Redis atomic TTL
import { RateLimiterRedis } from 'rate-limiter-flexible';
const rateLimiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'middleware_rl',
  points: 120, // 120 requests
  duration: 60, // per 60 seconds
});

export async function rateLimitMiddleware(req, res, next) {
  try {
    await rateLimiter.consume(req.ip);
    next();
  } catch (rej) {
    res.status(429).json({ error: 'Too Many Requests', retryAfter: Math.round(rej.msBeforeNext / 1000) });
  }
}
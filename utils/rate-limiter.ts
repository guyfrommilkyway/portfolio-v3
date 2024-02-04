// packages
import { kv } from '@vercel/kv';

type Result = {
  limit?: number;
  remaining?: number;
  success: boolean;
};

const rateLimiter = async (
  ip: string,
  limit: number,
  duration: number,
): Promise<Result> => {
  try {
    const address = `rate_limit:${ip}`;
    const current = await kv.get(address);

    if (!current) await kv.set(address, 1, { ex: duration, nx: true });

    const count = parseInt(current as string, 10) || 0;
    const remaining = limit - count;

    if (count >= limit) return { limit, remaining, success: false };

    kv.incr(address);

    return { limit, remaining: limit - (count + 1), success: true };
  } catch (e) {
    console.log(e);

    return { success: false };
  }
};

export default rateLimiter;

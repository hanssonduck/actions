import type { Serve } from "bun";
import { Hono } from "hono";

const app = new Hono();
app.get("/", ({ json }) => json({ message: "Hello universe!" }));

export default app satisfies Serve;

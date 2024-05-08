import type { Serve } from "bun";
import { Hono } from "hono";

const app = new Hono();
app.get("/", ({ json }) => json({ message: "Hello World!" }));

export default app satisfies Serve;


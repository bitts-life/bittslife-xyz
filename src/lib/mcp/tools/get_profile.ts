import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description: "Get Shubham Sharma's professional profile summary (Android developer).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      name: "Shubham Sharma",
      title: "Senior Android Developer",
      location: "Bangalore, IN",
      experience_years: 6,
      summary:
        "Android Developer with 6+ years of experience designing and developing high-performance, scalable mobile applications with millions of downloads. Expertise in Kotlin, Jetpack, MVVM, and CI/CD.",
      companies: ["Walmart", "BlueStone", "NoBroker"],
      education: "B.Tech. in Computer Science, Rajasthan Technical University (2013-2017)",
      website: "https://www.bittslife.xyz/",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});
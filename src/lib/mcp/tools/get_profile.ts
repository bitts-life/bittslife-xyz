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
      title: "Sr. Software Engineer (Android) at Experian",
      location: "Bangalore, IN",
      experience_years: 7,
      summary:
        "Android Developer with 7+ years of experience designing and developing high-performance, scalable mobile applications with millions of downloads. Expertise in Kotlin, Jetpack, MVVM, and CI/CD. Reduced app size by 30%, achieved 90% test coverage.",
      current_company: "Experian",
      current_role: "Sr. Software Engineer (Android)",
      companies: ["Experian", "Caspex (Walmart)", "Xebia (Walmart)", "BlueStone", "NoBroker", "Zonolith"],
      education: "B.Tech. in Computer Science, Rajasthan Technical University (2013-2017)",
      website: "https://www.bittslife.xyz/",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});
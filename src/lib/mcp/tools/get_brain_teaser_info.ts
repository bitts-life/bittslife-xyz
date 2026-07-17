import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_brain_teaser_info",
  title: "Get Brain Teaser AI Game info",
  description: "Get launch, feature, and early-access info for the Brain Teaser AI Game Android app.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: "Brain Teaser AI Game",
      platform: "Android",
      status: "Coming Soon — Closed Beta",
      launch_date: "2026-05-01",
      landing_page: "https://www.bittslife.xyz/#/brain-teaser",
      early_access_whatsapp: "https://wa.me/919672460166?text=Hi!%20I%20want%20early%20access%20to%20Brain%20Teaser%20AI%20Game",
      highlights: [
        "10+ mini games",
        "Endless AI-generated puzzles",
        "Personalized adaptive difficulty",
        "Daily challenges",
      ],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description: "List featured projects and apps by Shubham Sharma.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const projects = [
      {
        name: "Brain Teaser AI Game",
        status: "Coming Soon (Closed Beta)",
        launch_date: "2026-05-01",
        description: "AI-powered Android brain training puzzle game with 10+ mini games and endless AI-generated puzzles.",
        url: "https://www.bittslife.xyz/#/brain-teaser",
      },
      {
        name: "Walmart Grocery App",
        role: "Senior Software Engineer",
        description: "Contributed to Walmart's grocery Android app used by millions; improved test coverage to 90% and reduced production bugs by 50%.",
      },
      {
        name: "BlueStone App",
        role: "Senior Software Engineer",
        description: "Jewelry e-commerce Android app. Reduced app size by 30% via ProGuard/R8; +20% user retention from new features.",
      },
      {
        name: "NoBroker App",
        role: "Android Developer",
        description: "Real-estate Android app; feature development and performance optimizations.",
      },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(projects, null, 2) }],
      structuredContent: { projects },
    };
  },
});
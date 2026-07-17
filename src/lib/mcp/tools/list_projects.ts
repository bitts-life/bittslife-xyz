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
        name: "Experian Android App",
        role: "Sr. Software Engineer (Android)",
        description: "Built Personal Info SDUI components, Hosted App Flow for banks (Ollo, Merrick), and the Wallet Genius feature that recommends optimized cards by user goal.",
      },
      {
        name: "Walmart Protection Plan Hub",
        role: "Sr. Software Engineer (Caspex)",
        description: "Built the Protection Plan Hub and Amends flow, driving a 15% increase in protection plan adoption and letting customers edit purchases post-checkout.",
      },
      {
        name: "Walmart OmniScheduler",
        role: "Consultant (Xebia)",
        description: "Designed the OmniScheduler Module for Oil & Tire Change services, reducing scheduling time by 30% and increasing appointment bookings by 25%. Maintained 90%+ test coverage.",
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
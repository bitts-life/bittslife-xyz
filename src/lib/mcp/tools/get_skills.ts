import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_skills",
  title: "Get skills",
  description: "List Shubham Sharma's Android/mobile development skills and technologies.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const skills = {
      languages: ["Kotlin", "Java", "SQL"],
      android: ["Jetpack Compose", "Jetpack", "MVVM", "MVI", "Coroutines", "Flow", "Room", "Hilt", "Dagger", "Retrofit"],
      tools: ["Android Studio", "Git", "Firebase", "Gradle", "ProGuard/R8"],
      testing: ["JUnit", "Espresso", "Mockito", "UI Automator"],
      devops: ["CI/CD", "GitHub Actions", "Fastlane", "Jenkins"],
      architecture: ["Clean Architecture", "MVVM", "MVI", "Modularization"],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(skills, null, 2) }],
      structuredContent: skills,
    };
  },
});
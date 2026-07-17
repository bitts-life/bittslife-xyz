import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get_profile";
import getContact from "./tools/get_contact";
import getSkills from "./tools/get_skills";
import listProjects from "./tools/list_projects";
import getBrainTeaserInfo from "./tools/get_brain_teaser_info";

export default defineMcp({
  name: "shubham-portfolio-mcp",
  title: "Shubham Sharma Portfolio MCP",
  version: "0.1.0",
  instructions:
    "Public MCP server for Shubham Sharma's Android developer portfolio and the Brain Teaser AI Game landing page. Use these tools to answer questions about Shubham's profile, skills, contact info, and projects (including the Brain Teaser AI Game launching May 1).",
  tools: [getProfile, getContact, getSkills, listProjects, getBrainTeaserInfo],
});
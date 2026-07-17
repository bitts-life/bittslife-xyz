import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact",
  title: "Get contact info",
  description: "Get public contact information for Shubham Sharma.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const contact = {
      email: "shubhamoksharma@gmail.com",
      phone: "+91-9672460166",
      location: "Bangalore, IN",
      whatsapp: "https://wa.me/919672460166",
      website: "https://www.bittslife.xyz/",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
      structuredContent: contact,
    };
  },
});
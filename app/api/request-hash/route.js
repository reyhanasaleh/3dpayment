import crypto from "crypto";

export async function POST(req) {
  const formData = await req.formData();
  const entries = Object.fromEntries(formData.entries());

  // Exclude hash & encoding
  const hashKeys = Object.keys(entries)
    .filter(k => !["hash", "encoding"].includes(k.toLowerCase()));

  // Sort alphabetically
  hashKeys.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

  // Build hash string
  const hashParts = hashKeys.map(k => {
    const v = entries[k] ?? "";
    return v.replace(/\\/g, "\\\\").replace(/\|/g, "\\|");
  });

  const hashString = hashParts.join("|") + "|" + process.env.API_STORE_KEY;

  // SHA512 → Base64
  const sha512 = crypto.createHash("sha512").update(hashString, "ascii").digest();
  const hash = Buffer.from(sha512).toString("base64");

  // Add hash to form fields
  const fields = Object.keys(entries)
    .map(k => `<input type="hidden" name="${k}" value="${entries[k]}" />`)
    .join("\n");

  const html = `
<html>
<body onload="document.forms[0].submit()">
<form method="post" action="${process.env.API_LINK}">
${fields}
<input type="hidden" name="hash" value="${hash}" />
</form>
</body>
</html>
`;

  return new Response(html, { headers: { "Content-Type": "text/html" } });
}

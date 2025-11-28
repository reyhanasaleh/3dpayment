import crypto from "crypto";

export async function POST(req) {
  const formData = await req.formData();
  const entries = Object.fromEntries(formData.entries());

  const keys = Object.keys(entries).sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" })
  );

  let hashVal = "";

  keys.forEach((key) => {
    const lower = key.toLowerCase();
    if (lower !== "hash" && lower !== "encoding") {
      const escaped = entries[key].replace(/\\/g, "\\\\").replace(/\|/g, "\\|");
      hashVal += escaped + "|";
    }
  });

  const storeKey = "ASDf23891678_ASDf23891678";
  const escapedStoreKey = storeKey.replace(/\\/g, "\\\\").replace(/\|/g, "\\|");
  hashVal += escapedStoreKey;

  const sha512 = crypto.createHash("sha512").update(hashVal).digest("hex");
  const actualHash = Buffer.from(sha512, "hex").toString("base64");

  const retrievedHash = entries["HASH"];

  const valid = retrievedHash === actualHash;

  let rows = Object.entries(entries)
    .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`)
    .join("");

  const message = valid
    ? "<h4>HASH is successful</h4>"
    : "<h4>Security Alert. The digital signature is not valid.</h4>";

  const html = `
<html>
<body>
<table>${rows}</table>
${message}
</body>
</html>
`;

  return new Response(html, { headers: { "Content-Type": "text/html" } });
}

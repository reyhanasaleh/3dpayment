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
  const hash = Buffer.from(sha512, "hex").toString("base64");

  const fields = keys
    .map(
      (k) => `<input type=\"hidden\" name=\"${k}\" value=\"${entries[k]}\" />`
    )
    .join("\n");

console.log(hash);
    
  const html = `
<html>
<body onload=\"document.forms[0].submit()\">
<form method=\"post\" action=\"https://sanalpos.card-plus.net/fim/est3dgate\">
${fields}
<input type=\"hidden\" name=\"HASH\" value=\"${hash}\" />
</form>
</body>
</html>
`;

  return new Response(html, { headers: { "Content-Type": "text/html" } });
}

export async function POST(req) {
  const data = await req.formData();
  console.log("Callback data:", Object.fromEntries(data.entries()));

  return new Response("Callback received");
}

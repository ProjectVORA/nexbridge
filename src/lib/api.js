export async function callApi(action, args) {
  const res = await fetch("actions", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ action, args }) });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || json?.error) throw new Error(json?.error || `Request failed (${res.status})`);
  return json?.data;
}

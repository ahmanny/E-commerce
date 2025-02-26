async function fetchData() {
  return new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate 3s delay
}

export default async function SettingsPage() {
  await fetchData();
  return <div>SettingsPage</div>;
}

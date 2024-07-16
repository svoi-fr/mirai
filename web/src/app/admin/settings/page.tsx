import { AdminPageTitle } from "@/components/adminPageComponents/Title";
import { FiSettings } from "react-icons/fi";
import { Settings } from "@/interfaces/admin/settings/interfaces";
import { fetchSS } from "@/lib/utilsSS";
import { SettingsForm } from "@/components/adminPageComponents/settings/AdminSettingsForm";
import { Callout, Text } from "@tremor/react";

export default async function Page() {
  const response = await fetchSS("/settings");

  if (!response.ok) {
    const errorMsg = await response.text();
    return <Callout title="Failed to fetch settings">{errorMsg}</Callout>;
  }

  const settings = (await response.json()) as Settings;

  return (
    <div className="mx-auto container">
      <AdminPageTitle
        title="Workspace Settings"
        icon={<FiSettings size={32} className="my-auto" />}
      />

      <Text className="mb-8">
        Manage general Danswer settings applicable to all users in the
        workspace.
      </Text>

      <SettingsForm settings={settings} />
    </div>
  );
}

import { AdminPageTitle } from "@/components/adminPageComponents/Title";
import { CPUIcon } from "@/components/icons/icons";
import { SlackBotCreationForm } from "@/components/adminPageComponents/slackbot/SlackBotConfigCreationForm";
import { fetchSS } from "@/lib/utilsSS";
import { ErrorCallout } from "@/components/ErrorCallout";
import { DocumentSet } from "@/lib/types";
import { BackButton } from "@/components/BackButton";
import { Text } from "@tremor/react";
import { Persona } from "@/interfaces/persona";

async function Page() {
  const tasks = [fetchSS("/manage/document-set"), fetchSS("/persona")];
  const [documentSetsResponse, personasResponse] = await Promise.all(tasks);

  if (!documentSetsResponse.ok) {
    const errorText = await documentSetsResponse.text();
    return (
      <ErrorCallout
        errorTitle="Something went wrong :("
        errorMsg={`Failed to fetch document sets - ${errorText}`}
      />
    );
  }
  const documentSets = (await documentSetsResponse.json()) as DocumentSet[];

  if (!personasResponse.ok) {
    const errorText = await personasResponse.text();
    return (
      <ErrorCallout
        errorTitle="Something went wrong :("
        errorMsg={`Failed to fetch personas - ${errorText}`}
      />
    );
  }
  const personas = (await personasResponse.json()) as Persona[];

  return (
    <div className="container mx-auto">
      <BackButton />
      <AdminPageTitle
        icon={<CPUIcon size={32} />}
        title="New Slack Bot Config"
      />

      <Text className="mb-8">
        Define a new configuration below! This config will determine how
        DanswerBot behaves in the specified channels.
      </Text>

      <SlackBotCreationForm documentSets={documentSets} personas={personas} />
    </div>
  );
}

export default Page;

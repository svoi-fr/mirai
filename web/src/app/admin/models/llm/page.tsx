import { AdminPageTitle } from "@/components/adminPageComponents/Title";
import { FiCpu } from "react-icons/fi";
import { LLMConfiguration } from "@/components/adminPageComponents/models/llm/AdminModelsLLMConfiguration";
import LLMOptions from "@/components/adminPageComponents/llm/AdminLlmOptions";


const Page = () => {
  return (
    <div className="mx-auto container">
      <AdminPageTitle
        title="LLM Setup"
        icon={<FiCpu size={32} className="my-auto" />}
      />

      <LLMConfiguration />

      <LLMOptions />
    </div>
  );
};

export default Page;

import ModelManager from "@/components/adminPageComponents/models/embeding/AdminEmbeddingModelManager";
import { AdminPageTitle } from "@/components/adminPageComponents/Title";
import { FiPackage } from "react-icons/fi";


function Page() {
  return (
    <div className="mx-auto container">
      <AdminPageTitle
        title="Embedding"
        icon={<FiPackage size={32} className="my-auto" />}
      />

      <ModelManager />
    </div>
  );
}

export default Page;

import { EmbeddingModelDescriptor, FullEmbeddingModelDescriptor, INVALID_OLD_MODEL } from "@/interfaces/admin/models/models";

export function checkModelNameIsValid(modelName: string | undefined | null) {
    if (!modelName) {
      return false;
    }
    if (modelName === INVALID_OLD_MODEL) {
      return false;
    }
    return true;
  }
  
  export function fillOutEmeddingModelDescriptor(
    embeddingModel: EmbeddingModelDescriptor | FullEmbeddingModelDescriptor
  ): FullEmbeddingModelDescriptor {
    return {
      ...embeddingModel,
      description: "",
    };
  }
  
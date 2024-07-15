import { EmbeddingModelDescriptor, FullEmbeddingModelDescriptor, INVALID_OLD_MODEL } from "@/interfaces/admin/models/models";

export function checkModelNameIsValid(modelName: string | undefined | null) {
    !modelName || modelName === INVALID_OLD_MODEL ? false : true
  }
  
  export function fillOutEmeddingModelDescriptor(
    embeddingModel: EmbeddingModelDescriptor | FullEmbeddingModelDescriptor
  ): FullEmbeddingModelDescriptor {
    return {
      ...embeddingModel,
      description: "",
    };
  }
  
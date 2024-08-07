"use client";

import { Button } from "@tremor/react";
import { CCPairFullInfo } from "@/app/admin/connector/[ccPairId]/types";
import { usePopup } from "@/hooks/common/usePopup";
import { FiTrash } from "react-icons/fi";
import { deleteCCPair } from "@/lib/documentDeletion";
import { mutate } from "swr";
import { buildCCPairInfoUrl } from "@/lib/connector/helpers";

export function DeletionButton({ ccPair }: { ccPair: CCPairFullInfo }) {
  const { popup, setPopup } = usePopup();

  const isDeleting =
    ccPair?.latest_deletion_attempt?.status === "PENDING" ||
    ccPair?.latest_deletion_attempt?.status === "STARTED";

  let tooltip: string;
  if (ccPair.connector.disabled) {
    if (isDeleting) {
      tooltip = "This connector is currently being deleted";
    } else {
      tooltip = "Click to delete";
    }
  } else {
    tooltip = "You must pause the connector before deleting it";
  }

  return (
    <div>
      {popup}
      <Button
        size="xs"
        color="red"
        onClick={() =>
          deleteCCPair(
            ccPair.connector.id,
            ccPair.credential.id,
            setPopup,
            () => mutate(buildCCPairInfoUrl(ccPair.id))
          )
        }
        icon={FiTrash}
        disabled={!ccPair.connector.disabled || isDeleting}
        tooltip={tooltip}
      >
        Schedule for Deletion
      </Button>
    </div>
  );
}

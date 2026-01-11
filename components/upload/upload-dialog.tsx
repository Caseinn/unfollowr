"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import UploadWorkspace from "@/components/upload/upload-workspace";

type UploadDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function UploadDialog({ open, onOpenChange }: UploadDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl">
        <DialogHeader>
          <DialogTitle>Open your export</DialogTitle>
          <DialogDescription>
            Upload the Export your information zip from Instagram. We only read the follower and following lists.
          </DialogDescription>
        </DialogHeader>

        <UploadWorkspace />
      </DialogContent>
    </Dialog>
  );
}

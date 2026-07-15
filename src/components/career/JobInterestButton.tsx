"use client";

import { Button } from "@/components/ui/Button";
import { requestCareerRoleSelection } from "@/lib/career-role";

type JobInterestButtonProps = {
  role: string;
  className?: string;
};

export function JobInterestButton({ role, className }: JobInterestButtonProps) {
  return (
    <Button
      type="button"
      variant="secondary"
      className={className}
      onClick={() => requestCareerRoleSelection(role)}
    >
      Interesse bekunden
    </Button>
  );
}

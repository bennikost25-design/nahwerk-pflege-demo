export const CAREER_ROLE_EVENT = "nahwerk:select-career-role";

export type CareerRoleDetail = {
  role: string;
};

export function requestCareerRoleSelection(role: string) {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent<CareerRoleDetail>(CAREER_ROLE_EVENT, {
      detail: { role },
    }),
  );

  const target = document.getElementById("bewerbung");
  if (!target) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({
    behavior: reduce ? "auto" : "smooth",
    block: "start",
  });
}

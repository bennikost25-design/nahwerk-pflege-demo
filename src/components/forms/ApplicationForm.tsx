"use client";

import { Button } from "@/components/ui/Button";
import {
  applicationRoles,
  contactPreferences,
  hoursOptions,
} from "@/content/site-content";
import {
  CAREER_ROLE_EVENT,
  type CareerRoleDetail,
} from "@/lib/career-role";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import {
  FormEvent,
  useEffect,
  useId,
  useState,
  type ReactNode,
} from "react";

type FormState = {
  firstName: string;
  lastName: string;
  contact: string;
  role: string;
  hours: string;
  preference: string;
  message: string;
  privacy: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  firstName: "",
  lastName: "",
  contact: "",
  role: "",
  hours: "",
  preference: "",
  message: "",
  privacy: false,
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "Bitte geben Sie Ihren Vornamen an.";
  }
  if (!values.lastName.trim()) {
    errors.lastName = "Bitte geben Sie Ihren Nachnamen an.";
  }
  if (!values.contact.trim()) {
    errors.contact = "Bitte Telefonnummer oder E-Mail angeben.";
  } else {
    const value = values.contact.trim();
    const looksEmail = value.includes("@");
    const looksPhone = /^[+0-9\s()/.-]{6,}$/.test(value);
    if (looksEmail) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errors.contact = "Bitte eine gültige E-Mail-Adresse eingeben.";
      }
    } else if (!looksPhone) {
      errors.contact =
        "Bitte eine gültige Telefonnummer oder E-Mail-Adresse eingeben.";
    }
  }
  if (!values.role) {
    errors.role = "Bitte eine Tätigkeit auswählen.";
  }
  if (!values.hours) {
    errors.hours = "Bitte einen Stundenumfang auswählen.";
  }
  if (!values.preference) {
    errors.preference = "Bitte angeben, wie Sie kontaktiert werden möchten.";
  }
  if (!values.privacy) {
    errors.privacy =
      "Bitte bestätigen Sie den Datenschutzhinweis, um fortzufahren.";
  }

  return errors;
}

const fieldClass =
  "mt-2 w-full min-h-11 rounded-[var(--radius-sm)] border border-line bg-elevated px-3.5 py-2.5 text-ink transition-colors focus-visible:border-petrol focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petrol/25";

export function ApplicationForm() {
  const formId = useId();
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    function onSelectRole(event: Event) {
      const custom = event as CustomEvent<CareerRoleDetail>;
      const role = custom.detail?.role;
      if (!role || !applicationRoles.includes(role as (typeof applicationRoles)[number])) {
        return;
      }
      setSubmitted(false);
      setValues((prev) => ({ ...prev, role }));
      setErrors((prev) => {
        if (!prev.role) return prev;
        const next = { ...prev };
        delete next.role;
        return next;
      });
      window.setTimeout(() => {
        document.getElementById(`${formId}-role`)?.focus();
      }, 350);
    }

    window.addEventListener(CAREER_ROLE_EVENT, onSelectRole);
    return () => window.removeEventListener(CAREER_ROLE_EVENT, onSelectRole);
  }, [formId]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0];
      const el = document.getElementById(`${formId}-${firstKey}`);
      el?.focus();
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="border-t-2 border-sage bg-sage-soft/50 px-5 py-7 md:px-8 md:py-8"
        role="status"
        aria-live="polite"
      >
        <div className="flex gap-3">
          <CheckCircle2
            className="mt-0.5 size-6 shrink-0 text-sage"
            aria-hidden
          />
          <div>
            <h3 className="font-display text-2xl text-petrol">
              Demo-Bewerbung erfasst
            </h3>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Vielen Dank. In dieser Demonstration wurden{" "}
              <strong className="font-semibold text-ink">
                keine Daten übertragen, gespeichert oder versendet
              </strong>
              . Das Formular zeigt ausschließlich einen lokalen Erfolgszustand.
            </p>
            <Button
              className="mt-6"
              variant="secondary"
              onClick={() => {
                setValues(initial);
                setErrors({});
                setSubmitted(false);
              }}
            >
              Formular zurücksetzen
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-7 border-t-2 border-petrol/15 bg-surface/80 px-5 py-7 md:px-8 md:py-8"
      aria-describedby={`${formId}-demo-note`}
    >
      <p id={`${formId}-demo-note`} className="text-sm text-ink-muted">
        Pflichtfelder sind mit * markiert. Es werden keine Daten an einen Server
        gesendet.
      </p>

      <fieldset className="space-y-5">
        <legend className="font-display text-lg text-petrol">Persönliche Angaben</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id={`${formId}-firstName`}
            label="Vorname *"
            error={errors.firstName}
          >
            <input
              id={`${formId}-firstName`}
              name="firstName"
              autoComplete="given-name"
              className={cn(fieldClass, errors.firstName && "border-terracotta")}
              value={values.firstName}
              onChange={(e) => update("firstName", e.target.value)}
              aria-invalid={Boolean(errors.firstName)}
              aria-describedby={
                errors.firstName ? `${formId}-firstName-error` : undefined
              }
            />
          </Field>
          <Field
            id={`${formId}-lastName`}
            label="Nachname *"
            error={errors.lastName}
          >
            <input
              id={`${formId}-lastName`}
              name="lastName"
              autoComplete="family-name"
              className={cn(fieldClass, errors.lastName && "border-terracotta")}
              value={values.lastName}
              onChange={(e) => update("lastName", e.target.value)}
              aria-invalid={Boolean(errors.lastName)}
              aria-describedby={
                errors.lastName ? `${formId}-lastName-error` : undefined
              }
            />
          </Field>
        </div>

        <Field
          id={`${formId}-contact`}
          label="Telefonnummer oder E-Mail *"
          error={errors.contact}
        >
          <input
            id={`${formId}-contact`}
            name="contact"
            autoComplete="email"
            className={cn(fieldClass, errors.contact && "border-terracotta")}
            value={values.contact}
            onChange={(e) => update("contact", e.target.value)}
            aria-invalid={Boolean(errors.contact)}
            aria-describedby={
              errors.contact ? `${formId}-contact-error` : undefined
            }
          />
        </Field>
      </fieldset>

      <fieldset className="space-y-5 border-t border-line pt-6">
        <legend className="font-display text-lg text-petrol">
          Tätigkeit und Umfang
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id={`${formId}-role`}
            label="Gewünschte Tätigkeit *"
            error={errors.role}
          >
            <select
              id={`${formId}-role`}
              name="role"
              className={cn(fieldClass, errors.role && "border-terracotta")}
              value={values.role}
              onChange={(e) => update("role", e.target.value)}
              aria-invalid={Boolean(errors.role)}
              aria-describedby={errors.role ? `${formId}-role-error` : undefined}
            >
              <option value="">Bitte auswählen</option>
              {applicationRoles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </Field>
          <Field
            id={`${formId}-hours`}
            label="Gewünschter Stundenumfang *"
            error={errors.hours}
          >
            <select
              id={`${formId}-hours`}
              name="hours"
              className={cn(fieldClass, errors.hours && "border-terracotta")}
              value={values.hours}
              onChange={(e) => update("hours", e.target.value)}
              aria-invalid={Boolean(errors.hours)}
              aria-describedby={
                errors.hours ? `${formId}-hours-error` : undefined
              }
            >
              <option value="">Bitte auswählen</option>
              {hoursOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </fieldset>

      <fieldset className="border-t border-line pt-6">
        <legend className="text-sm font-semibold text-ink">
          Bevorzugte Kontaktart *
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {contactPreferences.map((option) => (
            <label
              key={option}
              className={cn(
                "flex min-h-12 cursor-pointer items-center gap-3 rounded-[var(--radius-sm)] border px-3",
                values.preference === option
                  ? "border-petrol/40 bg-elevated"
                  : "border-line bg-elevated/60",
              )}
            >
              <input
                type="radio"
                name="preference"
                value={option}
                checked={values.preference === option}
                onChange={() => update("preference", option)}
                className="size-4 accent-petrol"
              />
              <span className="text-sm">{option}</span>
            </label>
          ))}
        </div>
        {errors.preference ? (
          <p
            id={`${formId}-preference-error`}
            className="mt-2 text-sm text-terracotta"
            role="alert"
          >
            {errors.preference}
          </p>
        ) : null}
      </fieldset>

      <Field id={`${formId}-message`} label="Kurznotiz (optional)">
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={4}
          className={cn(fieldClass, "min-h-28")}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
        />
      </Field>

      <div className="border-t border-line pt-6">
        <label className="flex min-h-12 cursor-pointer items-start gap-3 rounded-[var(--radius-sm)] border border-line bg-elevated/70 px-3 py-3">
          <input
            id={`${formId}-privacy`}
            type="checkbox"
            className="mt-1 size-4 accent-petrol"
            checked={values.privacy}
            onChange={(e) => update("privacy", e.target.checked)}
            aria-invalid={Boolean(errors.privacy)}
            aria-describedby={
              errors.privacy ? `${formId}-privacy-error` : undefined
            }
          />
          <span className="text-sm leading-relaxed text-ink-muted">
            Ich habe den Demo-Datenschutzhinweis zur Kenntnis genommen und
            verstehe, dass in dieser Demonstration keine Daten übermittelt
            werden. *
          </span>
        </label>
        {errors.privacy ? (
          <p
            id={`${formId}-privacy-error`}
            className="mt-2 text-sm text-terracotta"
            role="alert"
          >
            {errors.privacy}
          </p>
        ) : null}
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Kurzbewerbung absenden (Demo)
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
      </label>
      {children}
      {error ? (
        <p
          id={`${id}-error`}
          className="mt-1.5 text-sm text-terracotta"
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

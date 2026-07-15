"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import { FormEvent, useId, useState } from "react";

type FormState = {
  name: string;
  contact: string;
  topic: string;
  message: string;
  privacy: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  name: "",
  contact: "",
  topic: "",
  message: "",
  privacy: false,
};

const topics = [
  "Erstgespräch zur Pflege",
  "Frage zu Leistungen",
  "Für Angehörige",
  "Sonstiges",
] as const;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Bitte Ihren Namen angeben.";
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
  if (!values.topic) errors.topic = "Bitte ein Thema auswählen.";
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Bitte beschreiben Sie Ihr Anliegen in mindestens 10 Zeichen.";
  }
  if (!values.privacy) {
    errors.privacy = "Bitte den Datenschutzhinweis bestätigen.";
  }
  return errors;
}

const fieldClass =
  "mt-1.5 w-full min-h-11 rounded-[var(--radius-sm)] border border-line bg-elevated px-3 py-2.5 text-ink transition-colors focus:border-petrol";

export function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

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
      document.getElementById(`${formId}-${firstKey}`)?.focus();
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="border border-sage/30 bg-sage-soft/60 p-6"
        role="status"
        aria-live="polite"
      >
        <div className="flex gap-3">
          <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-sage" aria-hidden />
          <div>
            <h3 className="font-display text-2xl text-petrol">Nachricht simuliert</h3>
            <p className="mt-3 text-ink-muted leading-relaxed">
              In dieser Demo wurden{" "}
              <strong className="font-semibold text-ink">
                keine Daten übertragen
              </strong>
              . Ein realer Pflegedienst würde sich hier zurückmelden.
            </p>
            <Button
              className="mt-5"
              variant="secondary"
              onClick={() => {
                setValues(initial);
                setErrors({});
                setSubmitted(false);
              }}
            >
              Neue Demo-Nachricht
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
      className="space-y-5 border border-line bg-cream p-5 md:p-7"
    >
      <p className="text-sm text-ink-muted">
        Demo-Formular ohne Datenübertragung. Pflichtfelder mit *.
      </p>

      <div>
        <label htmlFor={`${formId}-name`} className="text-sm font-semibold">
          Name *
        </label>
        <input
          id={`${formId}-name`}
          className={cn(fieldClass, errors.name && "border-terracotta")}
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${formId}-name-error` : undefined}
        />
        {errors.name ? (
          <p id={`${formId}-name-error`} className="mt-1.5 text-sm text-terracotta" role="alert">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor={`${formId}-contact`} className="text-sm font-semibold">
          Telefon oder E-Mail *
        </label>
        <input
          id={`${formId}-contact`}
          className={cn(fieldClass, errors.contact && "border-terracotta")}
          value={values.contact}
          onChange={(e) => update("contact", e.target.value)}
          aria-invalid={Boolean(errors.contact)}
          aria-describedby={
            errors.contact ? `${formId}-contact-error` : undefined
          }
        />
        {errors.contact ? (
          <p
            id={`${formId}-contact-error`}
            className="mt-1.5 text-sm text-terracotta"
            role="alert"
          >
            {errors.contact}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor={`${formId}-topic`} className="text-sm font-semibold">
          Thema *
        </label>
        <select
          id={`${formId}-topic`}
          className={cn(fieldClass, errors.topic && "border-terracotta")}
          value={values.topic}
          onChange={(e) => update("topic", e.target.value)}
          aria-invalid={Boolean(errors.topic)}
          aria-describedby={errors.topic ? `${formId}-topic-error` : undefined}
        >
          <option value="">Bitte auswählen</option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
        {errors.topic ? (
          <p id={`${formId}-topic-error`} className="mt-1.5 text-sm text-terracotta" role="alert">
            {errors.topic}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className="text-sm font-semibold">
          Ihre Nachricht *
        </label>
        <textarea
          id={`${formId}-message`}
          rows={5}
          className={cn(fieldClass, "min-h-32", errors.message && "border-terracotta")}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? `${formId}-message-error` : undefined
          }
        />
        {errors.message ? (
          <p
            id={`${formId}-message-error`}
            className="mt-1.5 text-sm text-terracotta"
            role="alert"
          >
            {errors.message}
          </p>
        ) : null}
      </div>

      <div>
        <label className="flex items-start gap-3">
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
          <span className="text-sm text-ink-muted">
            Ich verstehe, dass dies ein Demo-Formular ohne echte Übermittlung
            ist. *
          </span>
        </label>
        {errors.privacy ? (
          <p
            id={`${formId}-privacy-error`}
            className="mt-1.5 text-sm text-terracotta"
            role="alert"
          >
            {errors.privacy}
          </p>
        ) : null}
      </div>

      <Button type="submit" size="lg">
        Nachricht senden (Demo)
      </Button>
    </form>
  );
}

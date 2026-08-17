import { FormEvent, useEffect, useState } from "react";

import Seo from "../../components/Seo/Seo";
import { BOOKING_URL, CONTACT_EMAIL } from "../../config/site";
import { offices } from "../../content/siteContent";

import "./ContactPage.scss";

const subjectLabels = {
  partnership: "Partnership",
  pilot_product: "Pilot & product enquiry",
  press: "Press",
  investor_relations: "Investor relations",
  other: "Other"
} as const;

type Subject = keyof typeof subjectLabels;

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  subject: Subject;
  message: string;
  sibos: boolean;
  website: string;
};

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  institution: "",
  subject: "partnership",
  message: "",
  sibos: false,
  website: ""
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setForm((current) => ({
      ...current,
      subject: params.get("subject") === "press" ? "press" : current.subject,
      sibos: params.get("event") === "sibos" || current.sibos
    }));
  }, []);

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function validate() {
    const nextErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.firstName.trim()) nextErrors.firstName = "Enter your first name.";
    if (!form.lastName.trim()) nextErrors.lastName = "Enter your last name.";
    if (!form.institution.trim()) nextErrors.institution = "Enter your institution.";
    if (!form.email.trim()) {
      nextErrors.email = "Enter your business email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid business email.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    if (form.website) {
      setStatus("success");
      setStatusMessage("Thank you. Your enquiry has been received.");
      return;
    }

    const subject = `${subjectLabels[form.subject]} — ${form.institution.trim()}`;
    const body = [
      `Name: ${form.firstName.trim()} ${form.lastName.trim()}`,
      `Business email: ${form.email.trim()}`,
      `Institution: ${form.institution.trim()}`,
      `Subject: ${subjectLabels[form.subject]}`,
      form.sibos ? "Would like to meet the team at Sibos, Miami (28 September – 1 October)." : "",
      "",
      form.message.trim()
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus("success");
    setStatusMessage(
      `Your email client is opening with this enquiry prefilled. If nothing opens, email us at ${CONTACT_EMAIL}.`
    );
  }

  return (
    <div className="standalone-page contact-page">
      <Seo
        title="Contact SolideFinance"
        description="Get in touch with the SolideFinance team — partnerships, pilots, press and investor enquiries."
        path="/contact"
      />
      <div className="contact-layout">
        <div className="contact-intro">
          <p className="eyebrow">Contact</p>
          <h1>Contact our team</h1>
          <p className="standalone-page__intro">
            Tell us about your institution and your use case. Our team responds to qualified enquiries within two
            business days.
          </p>
          <a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          {BOOKING_URL && (
            <p>
              <a className="text-link" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a meeting <span aria-hidden="true">↗</span>
              </a>
            </p>
          )}
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <FormField label="First name" name="firstName" error={errors.firstName} required>
              <input
                id="firstName"
                name="firstName"
                value={form.firstName}
                onChange={(event) => update("firstName", event.target.value)}
                autoComplete="given-name"
                required
                aria-invalid={Boolean(errors.firstName)}
                aria-describedby={errors.firstName ? "firstName-error" : undefined}
              />
            </FormField>
            <FormField label="Last name" name="lastName" error={errors.lastName} required>
              <input
                id="lastName"
                name="lastName"
                value={form.lastName}
                onChange={(event) => update("lastName", event.target.value)}
                autoComplete="family-name"
                required
                aria-invalid={Boolean(errors.lastName)}
                aria-describedby={errors.lastName ? "lastName-error" : undefined}
              />
            </FormField>
          </div>

          <FormField label="Business email" name="email" error={errors.email} required>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={(event) => update("email", event.target.value)}
              autoComplete="email"
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
          </FormField>

          <FormField label="Institution" name="institution" error={errors.institution} required>
            <input
              id="institution"
              name="institution"
              value={form.institution}
              onChange={(event) => update("institution", event.target.value)}
              autoComplete="organization"
              required
              aria-invalid={Boolean(errors.institution)}
              aria-describedby={errors.institution ? "institution-error" : undefined}
            />
          </FormField>

          <FormField label="Subject" name="subject" required>
            <select
              id="subject"
              name="subject"
              value={form.subject}
              onChange={(event) => update("subject", event.target.value as Subject)}
              required
            >
              {Object.entries(subjectLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </FormField>

          <FormField label="Message" name="message">
            <textarea
              id="message"
              name="message"
              rows={6}
              value={form.message}
              onChange={(event) => update("message", event.target.value)}
            />
          </FormField>

          <div className="honeypot" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              value={form.website}
              onChange={(event) => update("website", event.target.value)}
              autoComplete="off"
              tabIndex={-1}
            />
          </div>

          <label className="checkbox-field">
            <input type="checkbox" checked={form.sibos} onChange={(event) => update("sibos", event.target.checked)} />
            <span>I would like to meet the team at Sibos, Miami (28 September – 1 October).</span>
          </label>

          <div className="form-actions">
            <button className="button-like" type="submit">
              Send enquiry <span aria-hidden="true">→</span>
            </button>
            <p>
              By submitting, you acknowledge our <a href="/privacy-policy">privacy policy</a>.
            </p>
          </div>

          <p className={`form-status ${status}`} role="status" aria-live="polite">
            {statusMessage}
          </p>
        </form>
      </div>

      <section className="contact-offices" aria-labelledby="contact-offices-title">
        <h2 id="contact-offices-title">Our offices</h2>
        <div className="contact-offices__grid">
          {offices.map((office) => (
            <article key={office.city}>
              <h3>{office.city}</h3>
              {office.address && <p>{office.address}</p>}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

type FormFieldProps = {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
};

function FormField({ label, name, error, required, children }: FormFieldProps) {
  return (
    <div className="form-field">
      <label htmlFor={name}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && (
        <span className="field-error" id={`${name}-error`}>
          {error}
        </span>
      )}
    </div>
  );
}

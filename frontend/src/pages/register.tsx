import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { FeaturePageLayout } from "../components/layout/FeaturePageLayout";
import { usePageMetadata } from "../utils/usePageMetadata";

type ParticipantType = "" | "local" | "international";
type IeeeMember = "" | "yes" | "no";

interface RegisterFormState {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  organization: string;
  ieeeMember: IeeeMember;
  participantType: ParticipantType;
  privacyAccepted: boolean;
}

const initialState: RegisterFormState = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  organization: "",
  ieeeMember: "",
  participantType: "",
  privacyAccepted: false,
};

const COUNTRIES: { value: string; label: string }[] = [
  { value: "RW", label: "Rwanda" },
  { value: "KE", label: "Kenya" },
  { value: "UG", label: "Uganda" },
  { value: "TZ", label: "Tanzania" },
  { value: "ET", label: "Ethiopia" },
  { value: "BI", label: "Burundi" },
  { value: "CD", label: "DR Congo" },
  { value: "SS", label: "South Sudan" },
  { value: "SO", label: "Somalia" },
  { value: "DJ", label: "Djibouti" },
  { value: "other", label: "Other (International)" },
];

export default function RegisterPage(): React.ReactElement {
  usePageMetadata('Register | EA-HTS 2027', 'Secure your place at East Africa\'s premier humanitarian technology summit.');

  const [form, setForm] = useState<RegisterFormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof RegisterFormState>(
    key: K,
    value: RegisterFormState[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Registration submitted:", form);
    setSubmitted(true);
  }

  return (
    <FeaturePageLayout>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> Register
          </div>
          <div className="eyebrow">Join Us in Kigali</div>
          <h1>Register for EA-HTS 2027.</h1>
          <p>
            Secure your place at East Africa&apos;s premier humanitarian technology
            summit. Complete the form below and follow the payment instructions
            for your participant type.
          </p>
        </div>
      </section>

      {/* REGISTRATION FORM */}
      <section className="section register-section">
        <div className="container">
          <div className="register-grid">
            {/* FORM */}
            <div className="reveal visible">
              <h2 style={{ marginBottom: "0.5rem", fontSize: "1.5rem" }}>
                Registration Form
              </h2>
              <p
                style={{
                  color: "var(--text-muted)",
                  marginBottom: "2rem",
                  fontSize: "0.92rem",
                }}
              >
                All fields marked with * are required. After submitting, follow
                the payment instructions shown below the form.
              </p>

              {submitted ? (
                <div
                  className="payment-block"
                  style={{ borderColor: "var(--primary)" }}
                >
                  <h4>Thank you, {form.fullName || "there"}!</h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                    Your registration has been recorded. Please complete payment
                    using the instructions for your participant type, and check
                    your email ({form.email}) for confirmation.
                  </p>
                </div>
              ) : (
                <form id="register-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="full-name">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="full-name"
                        className="form-input"
                        placeholder="Enter your full name"
                        required
                        value={form.fullName}
                        onChange={(e) => update("fullName", e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="form-input"
                        placeholder="you@example.com"
                        required
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="form-input"
                        placeholder="+250 7XX XXX XXX"
                        required
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="country">
                        Country *
                      </label>
                      <select
                        id="country"
                        className="form-select"
                        required
                        value={form.country}
                        onChange={(e) => update("country", e.target.value)}
                      >
                        <option value="">Select your country</option>
                        {COUNTRIES.map((c) => (
                          <option key={c.value} value={c.value}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="organization">
                      Organization / Affiliation
                    </label>
                    <input
                      type="text"
                      id="organization"
                      className="form-input"
                      placeholder="Your organization or university"
                      value={form.organization}
                      onChange={(e) => update("organization", e.target.value)}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">IEEE Member? *</label>
                      <div
                        style={{
                          display: "flex",
                          gap: "1.5rem",
                          marginTop: "0.4rem",
                        }}
                      >
                        <label
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            cursor: "pointer",
                            fontSize: "0.92rem",
                            color: "var(--text)",
                          }}
                        >
                          <input
                            type="radio"
                            name="ieee-member"
                            value="yes"
                            required
                            style={{ accentColor: "var(--primary)" }}
                            checked={form.ieeeMember === "yes"}
                            onChange={() => update("ieeeMember", "yes")}
                          />
                          Yes
                        </label>
                        <label
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            cursor: "pointer",
                            fontSize: "0.92rem",
                            color: "var(--text)",
                          }}
                        >
                          <input
                            type="radio"
                            name="ieee-member"
                            value="no"
                            style={{ accentColor: "var(--primary)" }}
                            checked={form.ieeeMember === "no"}
                            onChange={() => update("ieeeMember", "no")}
                          />
                          No
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="participant-type">
                        Participant Type *
                      </label>
                      <select
                        id="participant-type"
                        className="form-select"
                        required
                        value={form.participantType}
                        onChange={(e) =>
                          update(
                            "participantType",
                            e.target.value as ParticipantType
                          )
                        }
                      >
                        <option value="">Select participant type</option>
                        <option value="local">Local (Rwanda — RWF)</option>
                        <option value="international">
                          International (USD)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Conditional Payment: Local */}
                  {form.participantType === "local" && (
                    <div id="payment-local" className="payment-block">
                      <h4>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--primary)"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="20" height="14" x="2" y="5" rx="2" />
                          <line x1="2" x2="22" y1="10" y2="10" />
                        </svg>
                        Mobile Money Payment (Rwanda)
                      </h4>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "var(--text-muted)",
                          marginBottom: "1rem",
                        }}
                      >
                        Transfer the registration fee to one of the numbers
                        below. Include your full name as the payment reference.
                      </p>
                      <div className="payment-detail">
                        <span>MTN MoMo</span>
                        <span>07X XXX XXXX</span>
                      </div>
                      <div className="payment-detail">
                        <span>Airtel Money</span>
                        <span>07X XXX XXXX</span>
                      </div>
                      <div className="payment-detail">
                        <span>Reference</span>
                        <span>EAHTS2027 + Your Full Name</span>
                      </div>
                      <div className="payment-detail">
                        <span>Registration Fee</span>
                        <span style={{ color: "var(--primary)" }}>
                          RWF — To be confirmed
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Conditional Payment: International */}
                  {form.participantType === "international" && (
                    <div id="payment-intl" className="payment-block">
                      <h4>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--primary)"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2v20M2 12h20" />
                        </svg>
                        Bank Transfer (International)
                      </h4>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "var(--text-muted)",
                          marginBottom: "1rem",
                        }}
                      >
                        Wire the registration fee to the account below. Include
                        your full name and &quot;EAHTS2027&quot; in the transfer
                        reference.
                      </p>
                      <div className="payment-detail">
                        <span>Bank Name</span>
                        <span>To be confirmed</span>
                      </div>
                      <div className="payment-detail">
                        <span>Account Name</span>
                        <span>To be confirmed</span>
                      </div>
                      <div className="payment-detail">
                        <span>Account Number</span>
                        <span>To be confirmed</span>
                      </div>
                      <div className="payment-detail">
                        <span>SWIFT / BIC</span>
                        <span>To be confirmed</span>
                      </div>
                      <div className="payment-detail">
                        <span>Registration Fee</span>
                        <span style={{ color: "var(--primary)" }}>
                          USD — To be confirmed
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Privacy */}
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="privacy-check"
                      required
                      checked={form.privacyAccepted}
                      onChange={(e) =>
                        update("privacyAccepted", e.target.checked)
                      }
                    />
                    <label htmlFor="privacy-check">
                      I agree to the{" "}
                      <a
                        href="https://www.ieee.org/security-privacy.html"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: "var(--primary)",
                          textDecoration: "underline",
                        }}
                      >
                        IEEE Privacy Policy
                      </a>{" "}
                      and consent to my data being used for Summit registration
                      purposes. *
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      marginTop: "1.5rem",
                      width: "100%",
                      justifyContent: "center",
                      padding: "1rem",
                    }}
                  >
                    Submit Registration
                  </button>
                </form>
              )}
            </div>

            {/* INFO SIDEBAR */}
            <div className="reveal visible reveal-delay-1">
              <div className="register-info-card">
                <h3>Event Details</h3>
                <div className="info-item">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M16 2v4" />
                    <path d="M8 2v4" />
                    <path d="M3 10h18" />
                  </svg>
                  <div>
                    <h4>Dates</h4>
                    <p>January 27–29, 2027</p>
                  </div>
                </div>
                <div className="info-item">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <h4>Location</h4>
                    <p>Kigali, Rwanda</p>
                  </div>
                </div>
                <div className="info-item">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <div>
                    <h4>Expected Participants</h4>
                    <p>350+ from 10+ countries</p>
                  </div>
                </div>
                <div className="info-item">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <div>
                    <h4>Questions?</h4>
                    <p>
                      Email{" "}
                      <a
                        href="mailto:ieeeahts27@gmail.com"
                        style={{ color: "var(--primary)" }}
                      >
                        ieeeahts27@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* What's included */}
              <div
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--light-gray)",
                  borderRadius: "var(--radius-lg)",
                  padding: "2rem",
                  marginTop: "1.5rem",
                }}
              >
                <h4
                  style={{
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  What&apos;s included
                </h4>
                <div
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-muted)",
                    lineHeight: 2,
                  }}
                >
                  ✓ Access to all Summit sessions (Day 1 &amp; 2)
                  <br />
                  ✓ Demo Village access
                  <br />
                  ✓ Conference materials &amp; badge
                  <br />
                  ✓ Networking reception
                  <br />
                  ✓ Certificate of participation
                  <br />
                  ✓ Day 3 Field Visit (registered only)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FeaturePageLayout>
  );
}

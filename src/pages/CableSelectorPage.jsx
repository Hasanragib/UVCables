import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead.jsx";
import { useApp } from "../context/AppContext.jsx";
import { STEPS, getRecommendation } from "../data/cableSelector.js";
import "../styles/selector.css";
import "../styles/sections.css";

// ─── Step labels for progress bar ─────────────────────────────────────────────
var STEP_LABELS = ["Application", "Voltage", "Environment"];

// ─── Progress bar ─────────────────────────────────────────────────────────────
function ProgressBar({ currentStep, total }) {
  return (
    <div className="selector__progress" aria-label="Progress">
      {Array.from({ length: total }).map(function (_, i) {
        var isDone = i < currentStep;
        var isActive = i === currentStep;
        return (
          <div key={i} className="selector__step-dot">
            <div
              className={
                "selector__dot" +
                (isDone ? " selector__dot--done" : "") +
                (isActive ? " selector__dot--active" : "")
              }
              aria-current={isActive ? "step" : undefined}
            >
              {isDone ? "✓" : i + 1}
            </div>
            <span
              className={
                "selector__step-label" +
                (isActive ? " selector__step-label--active" : "")
              }
            >
              {STEP_LABELS[i]}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ─── Single question step ──────────────────────────────────────────────────────
function QuestionStep({ step, stepIndex, total, answers, onAnswer, onBack }) {
  var selected = answers[step.id];

  return (
    <div className="selector__card">
      <div className="selector__step-num">
        Step {stepIndex + 1} of {total}
      </div>
      <h2 className="selector__question">{step.question}</h2>
      <p className="selector__hint">{step.hint}</p>

      <div
        className="selector__options"
        role="group"
        aria-label={step.question}
      >
        {step.options.map(function (opt) {
          return (
            <button
              key={opt.id}
              className={
                "selector__option" +
                (selected === opt.id ? " selector__option--selected" : "")
              }
              onClick={function () {
                onAnswer(step.id, opt.id, opt.label);
              }}
              aria-pressed={selected === opt.id}
            >
              <span className="selector__option-icon" aria-hidden="true">
                {opt.icon}
              </span>
              <span className="selector__option-label">{opt.label}</span>
              <span className="selector__option-desc">{opt.desc}</span>
            </button>
          );
        })}
      </div>

      <div className="selector__nav">
        {stepIndex > 0 ? (
          <button className="selector__back" onClick={onBack}>
            ← Back
          </button>
        ) : (
          <div />
        )}

        {/* Show selected answers so far */}
        <div
          className="selector__answers-summary"
          aria-label="Your selections so far"
        >
          {STEPS.slice(0, stepIndex).map(function (s) {
            var answerLabel = answers[s.id + "_label"];
            return answerLabel ? (
              <span key={s.id} className="selector__answer-tag">
                {answerLabel}
              </span>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Result card ───────────────────────────────────────────────────────────────
function ResultCard({ recommendation, answers, onRestart, products }) {
  var product = products.find(function (p) {
    return p.id === recommendation.primary;
  });
  var altProducts = recommendation.alternatives
    .map(function (id) {
      return products.find(function (p) {
        return p.id === id;
      });
    })
    .filter(Boolean);

  if (!product) {
    return (
      <div className="selector__card">
        <p>Could not find recommendation. Please try again.</p>
        <button className="selector__restart" onClick={onRestart}>
          Start Over
        </button>
      </div>
    );
  }

  // Build WhatsApp enquiry message
  var waMessage =
    "Hi UV Cables, the Cable Selector recommended " +
    product.label +
    " (" +
    product.isDisplay +
    ") for my application. " +
    "Application: " +
    (answers.application_label || "") +
    ". " +
    "Voltage: " +
    (answers.voltage_label || "") +
    ". " +
    "Environment: " +
    (answers.environment_label || "") +
    ". " +
    "Please share pricing and availability.";

  var waUrl =
    "https://wa.me/" +
    (import.meta.env.VITE_WHATSAPP_NUMBER || "919818088873") +
    "?text=" +
    encodeURIComponent(waMessage);

  return (
    <div
      className="selector__result"
      role="region"
      aria-label="Cable recommendation"
    >
      {/* Header */}
      <div
        className="selector__result-header"
        style={{ borderTop: "4px solid " + product.dot }}
      >
        <span className="selector__result-icon" aria-hidden="true">
          {product.icon}
        </span>
        <div>
          <div className="selector__result-label">We recommend</div>
          <div className="selector__result-name">{product.label}</div>
          <div className="selector__result-std">{product.isDisplay}</div>
        </div>
      </div>

      {/* Body */}
      <div className="selector__result-body">
        {/* Why */}
        <p className="selector__result-reason">{recommendation.reason}</p>

        {/* Tip */}
        {recommendation.tip && (
          <div className="selector__result-tip">
            <span className="selector__result-tip-icon">💡</span>
            <span>{recommendation.tip}</span>
          </div>
        )}

        {/* Key specs */}
        <div className="selector__result-specs">
          <div className="selector__result-specs-title">Key Specifications</div>
          <div className="selector__result-specs-list">
            {product.specs.map(function (spec) {
              return (
                <div key={spec} className="selector__result-spec-item">
                  <span
                    className="selector__result-spec-arrow"
                    style={{ color: product.dot }}
                  >
                    ▸
                  </span>
                  <span>{spec}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="selector__result-actions">
          {/* Primary — Contact form */}
          <Link to="/contact" className="btn btn--primary">
            Get a Quote for {product.label} →
          </Link>

          {/* WhatsApp */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp"
            style={{
              background: "#25D366",
              color: "#fff",
              border: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              padding: "11px 20px",
              borderRadius: "var(--radius-md)",
              fontWeight: 700,
              fontSize: 14,
              textDecoration: "none",
              fontFamily: "var(--font-sans)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Ask on WhatsApp
          </a>

          {/* Restart */}
          <button className="selector__restart" onClick={onRestart}>
            ↺ Start Over
          </button>
        </div>

        {/* Alternatives */}
        {altProducts.length > 0 && (
          <div className="selector__alternatives">
            <div className="selector__alternatives-title">Also consider</div>
            <div className="selector__alt-chips">
              {altProducts.map(function (p) {
                return (
                  <Link
                    key={p.id}
                    to={"/products#" + p.id}
                    className="selector__alt-chip"
                  >
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: p.dot,
                        display: "inline-block",
                        flexShrink: 0,
                      }}
                    />
                    {p.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function CableSelectorPage() {
  const { PRODUCTS } = useApp();

  var stepState = useState(0);
  var currentStep = stepState[0];
  var setStep = stepState[1];

  var answersState = useState({});
  var answers = answersState[0];
  var setAnswers = answersState[1];

  var doneState = useState(false);
  var done = doneState[0];
  var setDone = doneState[1];

  var recommendation = done ? getRecommendation(answers) : null;

  function handleAnswer(stepId, optionId, optionLabel) {
    var newAnswers = Object.assign({}, answers);
    newAnswers[stepId] = optionId;
    newAnswers[stepId + "_label"] = optionLabel;
    setAnswers(newAnswers);

    // Move to next step or finish
    if (currentStep < STEPS.length - 1) {
      setStep(currentStep + 1);
    } else {
      setDone(true);
    }
  }

  function handleBack() {
    if (currentStep > 0) {
      setStep(currentStep - 1);
    }
  }

  function handleRestart() {
    setAnswers({});
    setStep(0);
    setDone(false);
  }

  return (
    <>
      <SEOHead
        title="Cable Selector Tool"
        description="Find the right industrial cable in 3 steps. Answer simple questions about your application, voltage, and environment — UV Cables recommends the best cable for your need."
        path="/cable-selector"
      />

      <main
        style={{
          paddingTop: "var(--nav-h)",
          background: "var(--bg-subtle)",
          minHeight: "100vh",
        }}
      >
        {/* Hero strip */}
        <div style={{ background: "var(--navy)", padding: "var(--space-8) 0" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: "clamp(24px, 4vw, 38px)",
                fontWeight: 900,
                color: "#fff",
                letterSpacing: "-0.03em",
                marginBottom: 8,
              }}
            >
              Cable Selector Tool
            </h1>
            <p
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.65)",
                maxWidth: 460,
                margin: "0 auto",
              }}
            >
              Answer 3 quick questions — we'll recommend the right cable for
              your application.
            </p>
          </div>
        </div>

        {/* Selector */}
        <div
          className="container"
          style={{ padding: "var(--space-10) var(--space-8)" }}
        >
          <div className="selector">
            {!done && (
              <ProgressBar currentStep={currentStep} total={STEPS.length} />
            )}

            {done ? (
              <ResultCard
                recommendation={recommendation}
                answers={answers}
                onRestart={handleRestart}
                products={PRODUCTS}
              />
            ) : (
              <QuestionStep
                step={STEPS[currentStep]}
                stepIndex={currentStep}
                total={STEPS.length}
                answers={answers}
                onAnswer={handleAnswer}
                onBack={handleBack}
              />
            )}
          </div>
        </div>
      </main>
    </>
  );
}

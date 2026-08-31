import { useState } from "react";
import "../styles/faq.css";

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <div className={"faq-item" + (isOpen ? " faq-item--open" : "")}>
      <button
        className="faq-item__question"
        onClick={function () {
          onToggle(index);
        }}
        aria-expanded={isOpen}
        aria-controls={"faq-answer-" + index}
        id={"faq-question-" + index}
      >
        <span className="faq-item__q-text">{faq.q}</span>
        <span className="faq-item__icon" aria-hidden="true">
          {isOpen ? "-" : "+"}
        </span>
      </button>
      <div
        className="faq-item__answer"
        id={"faq-answer-" + index}
        role="region"
        aria-labelledby={"faq-question-" + index}
        hidden={!isOpen}
      >
        <div className="faq-item__answer-inner">{faq.a}</div>
      </div>
    </div>
  );
}

export default function FAQAccordion({ faqs, allowMultiple }) {
  var openState = useState([]);
  var openItems = openState[0];
  var setOpenItems = openState[1];

  function handleToggle(index) {
    if (allowMultiple) {
      setOpenItems(function (prev) {
        if (prev.includes(index)) {
          return prev.filter(function (i) {
            return i !== index;
          });
        }
        return prev.concat([index]);
      });
    } else {
      setOpenItems(function (prev) {
        if (prev.includes(index)) {
          return [];
        }
        return [index];
      });
    }
  }

  return (
    <div className="faq-accordion" role="list">
      {faqs.map(function (faq, i) {
        return (
          <FAQItem
            key={i}
            faq={faq}
            index={i}
            isOpen={openItems.includes(i)}
            onToggle={handleToggle}
          />
        );
      })}
    </div>
  );
}

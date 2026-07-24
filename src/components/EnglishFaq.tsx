"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type EnglishFaqProps = {
  items: FaqItem[];
};

export function EnglishFaq({ items }: EnglishFaqProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="grid gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `english-faq-${index}`;

        return (
          <article key={item.question} className="rounded-lg border border-line bg-surface">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-black text-text focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30"
            >
              <span>{item.question}</span>
              <span className="shrink-0 text-xl text-gold" aria-hidden="true">
                {isOpen ? "-" : "+"}
              </span>
            </button>
            {isOpen ? (
              <p id={answerId} className="border-t border-line px-5 py-4 text-sm leading-7 text-muted">
                {item.answer}
              </p>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}

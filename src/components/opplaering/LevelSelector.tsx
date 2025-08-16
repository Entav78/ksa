import React, { useState } from 'react';
import { steps } from '@/components/opplaering/steps';

export type Step = {
  question: string;
  yesNextIndex?: number;
  noNextIndex?: number;
  yesResult?: Result;
  noResult?: Result;
  image: string;
};

type Result = {
  level: string;
  message: string;
  link: string;
  image?: string;
};

export function LevelSelector() {
  const [stepIndex, setStepIndex] = useState(0);
  const [result, setResult] = useState<Result | null>(null);
  const [history, setHistory] = useState<number[]>([]);

  const currentStep = steps[stepIndex];

  const handleAnswer = (answer: 'yes' | 'no') => {
    const next =
      answer === 'yes' ? currentStep.yesNextIndex : currentStep.noNextIndex;
    const res = answer === 'yes' ? currentStep.yesResult : currentStep.noResult;

    if (res) {
      setResult(res);
    } else if (typeof next === 'number') {
      setHistory((prev) => [...prev, stepIndex]);
      setStepIndex(next);
    }
  };

  const handleRestart = () => {
    setStepIndex(0);
    setResult(null);
    setHistory([]);
  };

  const handleBack = () => {
    if (history.length > 0) {
      const prevHistory = [...history];
      const lastStep = prevHistory.pop()!;
      setStepIndex(lastStep);
      setResult(null);
      setHistory(prevHistory);
    }
  };

  return (
    <div className="mt-12 p-6 rounded-lg shadow-md bg-background text-text">
      <h2 className="text-2xl font-bold mb-4 text-center">Finn riktig nivå</h2>

      {result ? (
        <div className="text-center">
          <img
            src={result.image ?? currentStep.image}
            alt={result.level}
            className="w-40 mx-auto mb-4"
          />

          <p className="text-lg font-semibold mb-2">{result.level}</p>
          <p className="mb-4">{result.message}</p>
          <a
            href={result.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-text px-5 py-2 rounded hover:bg-secondary transition"
          >
            Gå til påmelding
          </a>
          <div className="mt-4">
            <button
              onClick={handleRestart}
              className="text-sm underline text-primary hover:text-secondary"
            >
              Start på nytt
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <img
            src={currentStep.image}
            alt="Nivåbilde"
            className="w-40 mx-auto mb-4"
          />
          <p className="text-lg font-medium mb-6">{currentStep.question}</p>
          <div className="flex justify-center gap-6">
            <button
              onClick={() => handleAnswer('yes')}
              className="bg-yes text-text px-6 py-2 rounded hover:opacity-90 transition"
            >
              Ja
            </button>
            <button
              onClick={() => handleAnswer('no')}
              className="bg-no text-text px-6 py-2 rounded hover:opacity-90 transition"
            >
              Nei
            </button>
          </div>

          {history.length > 0 && (
            <button
              onClick={handleBack}
              className="mt-4 text-sm underline text-primary hover:text-secondary"
            >
              ← Tilbake
            </button>
          )}
        </div>
      )}
    </div>
  );
}

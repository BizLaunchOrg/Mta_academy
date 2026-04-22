"use client";

import React, { useState } from "react";

type Program = {
  id: number;
  tag: string;
  title: string;
  description: string;
  selected?: boolean;
};

const programs: Program[] = [
  {
    id: 1,
    tag: "Flagship Program",
    title: "Full-Stack Architectural Design",
    description: "24-week immersive experience in software excellence.",
  },
  {
    id: 2,
    tag: "Professional Cert",
    title: "Advanced AI & Machine Learning",
    description: "Master the cognitive frontier in 12 specialized modules.",
  },
  {
    id: 3,
    tag: "Executive Workshop",
    title: "The CTO's Strategy Playbook",
    description: "High-level leadership and scaling for senior tech leads.",
  },
];

const EnrollmentPage: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<number>(1);

  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
            Secure your future.
          </h1>
          <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
            Begin your journey towards intellectual mastery. Complete your
            enrollment details to join the next cohort.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-4 text-xs font-bold uppercase tracking-widest">
            <span className="text-purple-600">Step 02 of 03</span>
            <span className="text-gray-400">Program Selection</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-gradient-to-r from-purple-700 to-purple-500 rounded-full shadow-lg" />
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main */}
          <div className="lg:col-span-8 space-y-12">
            <div className="bg-white p-8 rounded-xl shadow-md border">
              {/* Step 1 (Completed) */}
              <div className="mb-10 border-b pb-6 opacity-60">
                <div className="flex justify-between mb-4">
                  <h3 className="text-xs uppercase font-bold tracking-widest text-gray-400">
                    ✓ Personal Details
                  </h3>
                  <button className="text-purple-600 text-xs hover:underline">
                    Edit
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Full Name</p>
                    <p className="font-semibold">Julian Sterling</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="font-semibold">julian.s@academy.edu</p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Select your discipline.
                </h2>

                <div className="space-y-4">
                  {programs.map((program) => {
                    const isActive = selectedProgram === program.id;

                    return (
                      <div
                        key={program.id}
                        onClick={() => setSelectedProgram(program.id)}
                        className={`p-6 rounded-xl border-2 cursor-pointer transition ${
                          isActive
                            ? "border-purple-600 bg-purple-50"
                            : "border-gray-200 hover:border-purple-400"
                        }`}
                      >
                        <div className="flex justify-between">
                          <div>
                            <span
                              className={`text-[10px] px-2 py-1 rounded mb-2 inline-block font-bold uppercase ${
                                isActive
                                  ? "bg-purple-200 text-purple-700"
                                  : "bg-gray-100 text-gray-500"
                              }`}
                            >
                              {program.tag}
                            </span>

                            <h4 className="font-semibold text-lg">
                              {program.title}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {program.description}
                            </p>
                          </div>

                          {/* Radio */}
                          <div
                            className={`h-6 w-6 rounded-full border-2 flex items-center justify-center ${
                              isActive
                                ? "border-purple-600"
                                : "border-gray-300"
                            }`}
                          >
                            {isActive && (
                              <div className="h-3 w-3 bg-purple-600 rounded-full" />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-10 pt-6 border-t flex justify-between">
                <button className="text-gray-500 hover:text-black text-sm font-semibold">
                  ← Previous Step
                </button>

                <button className="bg-gradient-to-r from-purple-700 to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition">
                  Continue to Payment
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Summary */}
            <div className="bg-black text-white p-6 rounded-xl shadow-xl">
              <h3 className="text-lg font-bold mb-4">
                Investment Summary
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Program</span>
                  <span>Full-Stack Design</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tuition</span>
                  <span>$12,400</span>
                </div>
                <div className="flex justify-between text-green-400">
                  <span>Discount</span>
                  <span>- $1,240</span>
                </div>
              </div>

              <div className="border-t border-gray-700 mt-6 pt-4 flex justify-between items-end">
                <div>
                  <p className="text-xs text-gray-400">Total</p>
                  <p className="text-2xl font-bold">$11,160</p>
                </div>
                <div className="text-right text-sm">
                  <p className="text-gray-400">12x payments</p>
                  <p>$930/mo</p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gray-100 p-5 rounded-xl">
              <p className="text-sm italic text-gray-600 mb-4">
                "The curriculum is exceptionally deep. This isn't just a course;
                it's a shift in how you think about engineering."
              </p>

              <div className="flex items-center gap-3">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjCEYuSj-kWe5teXwJZRDi6tZKdOMwFXoVonrdK8yjZBdI6sjKndSTCK5JhPbDAEfi6NhQdsZbsuw7nMFLcLTcGNs5JmnPisMTHeQtLRD8Yq4XXSQab1cuGx6mBZSbXYtnL9eKOi8_Ksvhkuc5SBuzE-1aCVPtGpVFoZqwXakrgqK9UhX5iqDAa2DUDiAi0JqHIWuXuSVr36w4GjoI6GZru9sD5gENXonudGTTNG5C_B22J84V2kgSs8bhvEkcYfI-5w2UdxU8VCbY"
                  alt="Student"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs font-semibold">David Chen</p>
                  <p className="text-[10px] text-gray-500 uppercase">
                    Cohort 08 Alumni
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EnrollmentPage;
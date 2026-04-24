"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type ProgramOption = {
  title: string;
  duration: string;
  tuition: number;
};

const defaultPrograms: ProgramOption[] = [
  {
    title: "Full-Stack Architectural Design",
    duration: "8 Weeks",
    tuition: 58000,
  },
  {
    title: "Advanced AI & Machine Learning",
    duration: "12 Weeks",
    tuition: 45000,
  },
  {
    title: "The CTO's Strategy Playbook",
    duration: "6 Weeks",
    tuition: 30000,
  },
];

type EnrollmentRouteState = {
  prefillProgram?: string;
  prefillType?: "cohort" | "bootcamp";
};

const EnrollmentPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const routeState = location.state as EnrollmentRouteState | null;
  const prefillProgram = routeState?.prefillProgram?.trim();

  const programOptions = useMemo(() => {
    const options = [...defaultPrograms];
    if (prefillProgram && !options.some((program) => program.title === prefillProgram)) {
      options.unshift({
        title: prefillProgram,
        duration: "6 Weeks",
        tuition: 58000,
      });
    }
    return options;
  }, [prefillProgram]);

  const [selectedProgram, setSelectedProgram] = useState<string>(
    prefillProgram || defaultPrograms[0].title
  );
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("Beginner");
  const [careerGoal, setCareerGoal] = useState("");
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    phoneNumber?: string;
    careerGoal?: string;
  }>({});

  useEffect(() => {
    if (prefillProgram) {
      setSelectedProgram(prefillProgram);
      return;
    }
    if (!programOptions.some((program) => program.title === selectedProgram)) {
      setSelectedProgram(programOptions[0].title);
    }
  }, [prefillProgram, programOptions, selectedProgram]);

  const selectedProgramOption =
    programOptions.find((program) => program.title === selectedProgram) || programOptions[0];

  const validateStepOne = () => {
    const nextErrors: {
      fullName?: string;
      email?: string;
      phoneNumber?: string;
      careerGoal?: string;
    } = {};

    if (!fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!phoneNumber.trim()) nextErrors.phoneNumber = "Phone number is required.";
    if (!careerGoal.trim()) nextErrors.careerGoal = "Career goal is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const goToNextStep = () => {
    if (currentStep === 1) {
      if (!validateStepOne()) return;
      setCurrentStep(2);
      return;
    }
    if (currentStep === 2) {
      setCurrentStep(3);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep === 1) {
      navigate(-1);
      return;
    }
    setCurrentStep((prev) => (prev === 3 ? 2 : 1));
  };

  const handlePayOnWhatsApp = () => {
    const message = [
      "Hello MTA Academy, I have completed enrollment details.",
      "",
      `Full Name: ${fullName.trim()}`,
      `Email: ${email.trim()}`,
      `Phone Number: ${phoneNumber.trim()}`,
      `Experience Level: ${experienceLevel}`,
      `Career Goal: ${careerGoal.trim()}`,
      "",
      `Program: ${selectedProgram}`,
      `Duration: ${selectedProgramOption.duration}`,
      `Tuition: ₦${selectedProgramOption.tuition.toLocaleString()}`,
      "Payment Plan: One-time payment",
    ].join("\n");

    const whatsappUrl = `https://wa.me/2349160807076?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen pt-32 sm:pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 relative z-20 lg:hidden">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-violet-700 hover:bg-violet-800 px-4 py-2 rounded-full shadow-md"
          >
            ← Back
          </button>
        </div>
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
            <span className="text-purple-600">
              Step {String(currentStep).padStart(2, "0")} of 03
            </span>
            <span className="text-gray-400">
              {currentStep === 1
                ? "Personal Details"
                : currentStep === 2
                ? "Review Details"
                : "Payment"}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r from-purple-700 to-purple-500 rounded-full shadow-lg transition-all duration-300 ${
                currentStep === 1
                  ? "w-1/3"
                  : currentStep === 2
                  ? "w-2/3"
                  : "w-full"
              }`}
            />
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main */}
          <div className="lg:col-span-8 space-y-12">
            <div className="bg-white p-8 rounded-xl shadow-md border">
              {currentStep === 1 && (
                <>
                  <div className="mb-10 border-b pb-8">
                    <h2 className="text-2xl font-bold mb-6">Personal details</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-2 block">
                          Full Name
                        </label>
                        <input
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          type="text"
                          placeholder="Enter your full name"
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        {errors.fullName && (
                          <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-2 block">
                          Email Address
                        </label>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          placeholder="you@example.com"
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        {errors.email && (
                          <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-2 block">
                          Phone Number
                        </label>
                        <input
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          type="tel"
                          placeholder="+234 801 234 5678"
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        {errors.phoneNumber && (
                          <p className="text-xs text-red-500 mt-1">{errors.phoneNumber}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-2 block">
                          Experience Level
                        </label>
                        <select
                          value={experienceLevel}
                          onChange={(e) => setExperienceLevel(e.target.value)}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-sm font-semibold text-gray-700 mb-2 block">
                          Career Goal
                        </label>
                        <textarea
                          value={careerGoal}
                          onChange={(e) => setCareerGoal(e.target.value)}
                          placeholder="Tell us your goal for joining this program."
                          rows={4}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        {errors.careerGoal && (
                          <p className="text-xs text-red-500 mt-1">{errors.careerGoal}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-6">Select your program.</h2>

                    <div className="space-y-4">
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Program
                      </label>
                      <select
                        value={selectedProgram}
                        onChange={(e) => setSelectedProgram(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        {programOptions.map((program) => (
                          <option key={program.title} value={program.title}>
                            {program.title}
                          </option>
                        ))}
                      </select>

                      <div className="rounded-xl border border-purple-100 bg-purple-50 p-4">
                        <p className="text-xs uppercase tracking-widest text-purple-600 font-bold mb-1">
                          Selected Program
                        </p>
                        <p className="font-semibold text-gray-900">{selectedProgram}</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <div className="space-y-5">
                  <h2 className="text-2xl font-bold">Review your details</h2>
                  <div className="rounded-xl border border-gray-200 p-5 space-y-3 text-sm">
                    <div className="flex justify-between gap-3">
                      <span className="text-gray-500">Full Name</span>
                      <span className="font-semibold text-gray-900">{fullName}</span>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span className="text-gray-500">Email</span>
                      <span className="font-semibold text-gray-900">{email}</span>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span className="text-gray-500">Phone</span>
                      <span className="font-semibold text-gray-900">{phoneNumber}</span>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span className="text-gray-500">Experience</span>
                      <span className="font-semibold text-gray-900">{experienceLevel}</span>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span className="text-gray-500">Program</span>
                      <span className="font-semibold text-gray-900">{selectedProgram}</span>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span className="text-gray-500">Duration</span>
                      <span className="font-semibold text-gray-900">
                        {selectedProgramOption.duration}
                      </span>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span className="text-gray-500">Tuition</span>
                      <span className="font-semibold text-gray-900">
                        ₦{selectedProgramOption.tuition.toLocaleString()}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-gray-100">
                      <span className="text-gray-500 block mb-1">Career Goal</span>
                      <p className="font-medium text-gray-800">{careerGoal}</p>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-5">
                  <h2 className="text-2xl font-bold">Payment</h2>
                  <div className="rounded-xl border border-purple-100 bg-purple-50 p-5 space-y-3">
                    <p className="text-sm text-gray-700">
                      Click the button below to send your enrollment details to the
                      academy on WhatsApp. The site owner will then send account
                      details for payment.
                    </p>
                    <div className="text-sm space-y-1">
                      <p>
                        <span className="text-gray-500">Program:</span>{" "}
                        <span className="font-semibold">{selectedProgram}</span>
                      </p>
                      <p>
                        <span className="text-gray-500">Duration:</span>{" "}
                        <span className="font-semibold">
                          {selectedProgramOption.duration}
                        </span>
                      </p>
                      <p>
                        <span className="text-gray-500">Total:</span>{" "}
                        <span className="font-semibold">
                          ₦{selectedProgramOption.tuition.toLocaleString()}
                        </span>
                      </p>
                      <p>
                        <span className="text-gray-500">Payment Plan:</span>{" "}
                        <span className="font-semibold">One-time payment</span>
                      </p>
                    </div>
                    <button
                      onClick={handlePayOnWhatsApp}
                      className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full font-semibold transition-colors"
                    >
                      Pay via WhatsApp
                    </button>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="mt-10 pt-6 border-t flex justify-between">
                <button
                  onClick={goToPreviousStep}
                  className="text-gray-500 hover:text-black text-sm font-semibold"
                >
                  ← {currentStep === 1 ? "Back" : "Previous Step"}
                </button>

                {currentStep < 3 ? (
                  <button
                    onClick={goToNextStep}
                    className="bg-gradient-to-r from-purple-700 to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
                  >
                    {currentStep === 1 ? "Continue to Review" : "Continue to Payment"}
                  </button>
                ) : (
                  <button
                    onClick={handlePayOnWhatsApp}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
                  >
                    Pay on WhatsApp
                  </button>
                )}
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
                  <span>{selectedProgram}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tuition</span>
                  <span>₦{selectedProgramOption.tuition.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Duration</span>
                  <span>{selectedProgramOption.duration}</span>
                </div>
              </div>

              <div className="border-t border-gray-700 mt-6 pt-4 flex justify-between items-end">
                <div>
                  <p className="text-xs text-gray-400">Total</p>
                  <p className="text-2xl font-bold">
                    ₦{selectedProgramOption.tuition.toLocaleString()}
                  </p>
                </div>
                <div className="text-right text-sm">
                  <p className="text-gray-400">Payment plan</p>
                  <p>One-time payment</p>
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
                  src="/images/enrollment-student.jpg"
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
const WHATSAPP_NUMBER = "2349160807076";

export const whatsappMessages = {
  joinCohort:
    "Hello MTA Academy, I would like to join a cohort. Please share the next available intake and details.",
  applyNow:
    "Hello MTA Academy, I would like to apply now. Please guide me through the enrollment process.",
  explorePrograms:
    "Hello MTA Academy, I would like to explore all your programs. Please share what is available.",
  bookConsultation:
    "Hello MTA Academy, I would like to book a consultation. Please let me know your available times.",
  seeAllCourses:
    "Hello MTA Academy, I would like to see all available courses. Please share the full course list.",
  bookCoachSession:
    "Hello MTA Academy, I would like to book a session with a coach. Please help me get started.",
  coachHere:
    "Hello MTA Academy, I am interested in coaching on your platform. I would love to learn more about joining your faculty.",
  learnHere:
    "Hello MTA Academy, I would like to enroll and start learning. Please share the next steps.",
  seeAllCategories:
    "Hello MTA Academy, I would like to explore all course categories. Please share your program options.",
  getStarted:
    "Hello MTA Academy, I would like to get started. Please guide me on the best path for me.",
  contact:
    "Hello MTA Academy, I would like to get in touch. Please let me know how we can connect.",
} as const;

export type WhatsAppMessageKey = keyof typeof whatsappMessages;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function whatsappLink(key: WhatsAppMessageKey): string {
  return whatsappUrl(whatsappMessages[key]);
}

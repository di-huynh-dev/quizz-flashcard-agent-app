import "./globals.css";
import { Inter } from "next/font/google";
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Super Smart Learning Hub",
  keywords: "AI, Education, Learning, Quizzes, Flashcards, Interactive Learning",
  description:
    "Super Smart Learning Hub is an interactive educational platform that enhances learning through adaptive quizzes and AI-powered flashcards. Engage with personalized quizzes and smart flashcards for efficient study.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CopilotKit runtimeUrl="/api/copilotkit">
          {children}
          <footer className="fixed bottom-0 left-0 right-0 bg-tranparent text-white py-4 text-center  z-10">
            <p>
              Created by{" "}
              <a
                href="https://www.linkedin.com/in/huynhtiendi/"
                target="blank"
                className="text-blue-400 cursor-pointer"
              >
                Huynh Tien Di
              </a>
            </p>
          </footer>
        </CopilotKit>{" "}
      </body>
    </html>
  );
}

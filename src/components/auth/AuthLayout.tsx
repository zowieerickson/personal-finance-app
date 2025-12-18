import type { ReactNode } from "react";
import AuthIllustration from "./AuthIllustration";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center h-full items-stretch lg:flex-row lg:p-5">
        <AuthIllustration />
        {children}
      </div>
    </div>
  );
}

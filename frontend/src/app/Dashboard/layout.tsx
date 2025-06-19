import DashLayout from "../_components/DashLayout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashLayout>{children}</DashLayout>;
}

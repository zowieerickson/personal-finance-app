type DashboardHeaderProps = {
  title: string;
};

export default function DashboardHeader({ title }: DashboardHeaderProps) {
  return <h1 className="mb-8">{title}</h1>;
}

type DashboardHeaderProps = {
  title: string;
};

export default function DashboardHeader({ title }: DashboardHeaderProps) {
  return <h1>{title}</h1>;
}

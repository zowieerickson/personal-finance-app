type StatCardProps = {
  label: string;
  value: string | number;
};

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <section>
      <h3>{label}</h3>
      <p>{value}</p>
    </section>
  );
}

type StatCardProps = {
  label: string;
  value: string | number;
  className?: string;
};

export default function StatCard({ label, value, className }: StatCardProps) {
  return (
    <section className={`md:w-1/3 p-5 md:p-6 rounded-xl ${className ?? ""}`}>
      <h3 className="text-preset-4 mb-3">{label}</h3>
      <p className="text-preset-1">${value}</p>
    </section>
  );
}

type ScheduleCardProps = {
  day: string;
  morning: string;
  evening: string;
};

export function ScheduleCard({ day, morning, evening }: ScheduleCardProps) {
  return (
    <article className="grid gap-4 rounded-lg border border-gold/25 bg-surface p-6 sm:grid-cols-[0.8fr_1fr_1fr] sm:items-center">
      <h3 className="text-lg font-black text-gold">{day}</h3>
      <p className="text-text/85">{morning}</p>
      <p className="text-text/85">{evening}</p>
    </article>
  );
}

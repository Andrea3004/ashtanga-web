type ScheduleCardProps = {
  day: string;
  morning: string;
  evening: string;
};

export function ScheduleCard({ day, morning, evening }: ScheduleCardProps) {
  return (
    <article className="grid gap-4 rounded-lg border border-white/15 bg-white/5 p-6 sm:grid-cols-[0.8fr_1fr_1fr] sm:items-center">
      <h3 className="text-lg font-black text-white">{day}</h3>
      <p className="text-white/80">{morning}</p>
      <p className="text-white/80">{evening}</p>
    </article>
  );
}

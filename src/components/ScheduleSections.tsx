import {
  generalClassDays,
  generalClassTimes,
  mysoreScheduleItems,
  saturdayGeneralClass,
  scheduleNotes
} from "@/data/site";

export function GeneralScheduleSection() {
  return (
    <section aria-labelledby="general-schedule-title" className="space-y-5">
      <div>
        <p className="text-xs font-black uppercase text-gold">General Class</p>
        <h3 id="general-schedule-title" className="mt-2 text-2xl font-black text-text">
          일반 수업 스케줄(1시간)
        </h3>
      </div>

      <div className="grid gap-3 md:hidden">
        {generalClassDays.map((item) => (
          <article key={item.day} className="rounded-lg border border-gold/25 bg-surface p-5">
            <h4 className="text-lg font-black text-gold">{item.day}</h4>
            <p className="mt-2 font-bold text-text">{item.title}</p>
            <p className="mt-3 text-sm leading-6 text-muted">{generalClassTimes.join(" · ")}</p>
          </article>
        ))}
        <article className="rounded-lg border border-gold/25 bg-surface p-5">
          <h4 className="text-lg font-black text-gold">{saturdayGeneralClass.day}</h4>
          <p className="mt-2 font-bold text-text">{saturdayGeneralClass.title}</p>
          <p className="mt-3 text-sm leading-6 text-muted">{saturdayGeneralClass.time}</p>
        </article>
      </div>

      <div className="hidden overflow-hidden rounded-lg border border-gold/25 md:block">
        <div className="grid grid-cols-[0.8fr_repeat(6,1fr)] bg-gold text-sm font-black text-background">
          <span className="p-3">시간</span>
          {generalClassDays.map((item) => (
            <span key={item.day} className="border-l border-background/20 p-3">
              {item.day}
            </span>
          ))}
          <span className="border-l border-background/20 p-3">{saturdayGeneralClass.day}</span>
        </div>
        {generalClassTimes.map((time) => (
          <div key={time} className="grid grid-cols-[0.8fr_repeat(6,1fr)] border-t border-gold/20 bg-surface text-sm">
            <span className="p-3 font-black text-gold">{time}</span>
            {generalClassDays.map((item) => (
              <span key={`${time}-${item.day}`} className="border-l border-gold/15 p-3 text-text/85">
                {item.title}
              </span>
            ))}
            <span className="border-l border-gold/15 p-3 text-text/85">
              {time === "10:00" ? (
                <>
                  <strong className="block text-text">{saturdayGeneralClass.title}</strong>
                  <span className="text-muted">{saturdayGeneralClass.time}</span>
                </>
              ) : (
                <span className="text-muted">-</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function MysoreScheduleSection() {
  return (
    <section id="mysore" aria-labelledby="mysore-schedule-title" className="space-y-5">
      <div>
        <p className="text-xs font-black uppercase text-gold">Mysore Class</p>
        <h3 id="mysore-schedule-title" className="mt-2 text-2xl font-black text-text">
          마이솔 클래스 스케줄
        </h3>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {mysoreScheduleItems.map((item) => (
          <article key={item.day} className="rounded-lg border border-gold/25 bg-surface p-5">
            <h4 className="text-lg font-black text-gold">{item.day}</h4>
            <div className="mt-4 grid gap-3">
              {item.sessions.map((session) => (
                <div key={`${item.day}-${session.time}-${session.title}`} className="border-t border-gold/15 pt-3 first:border-t-0 first:pt-0">
                  <p className="font-black text-text">{session.time}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{session.title}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ScheduleNotes() {
  return (
    <aside className="rounded-lg border border-gold/25 bg-background p-5">
      <p className="text-sm font-black uppercase text-gold">Notice</p>
      <ul className="mt-3 grid gap-2 text-sm leading-6 text-text/75">
        {scheduleNotes.map((note) => (
          <li key={note}>· {note}</li>
        ))}
      </ul>
    </aside>
  );
}

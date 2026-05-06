import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = ["О нас", "Задачи", "Подразделения", "Служба", "Контакт"];

const STATS = [
  { value: "24/7", label: "Боеготовность" },
  { value: "100%", label: "Профессионализм" },
  { value: "∞", label: "Верность присяге" },
];

const PILLARS = [
  {
    icon: "Shield",
    title: "Защита",
    text: "Охрана государственных интересов в любых условиях и на любой глубине оперативной обстановки.",
  },
  {
    icon: "Target",
    title: "Точность",
    text: "Выверенные действия, минимальные потери, максимальный результат — принцип каждой операции.",
  },
  {
    icon: "Users",
    title: "Единство",
    text: "Сплочённость личного состава, взаимовыручка и доверие — основа боевого братства ССО.",
  },
  {
    icon: "Zap",
    title: "Решимость",
    text: "Готовность действовать немедленно в условиях неполноты информации и высокой неопределённости.",
  },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen text-foreground overflow-x-hidden"
      style={{ backgroundColor: "var(--dark-base)" }}
    >
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 border-b"
        style={{
          backgroundColor: "rgba(20, 20, 16, 0.94)",
          backdropFilter: "blur(12px)",
          borderColor: "var(--olive-dark)",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 flex items-center justify-center border"
            style={{ borderColor: "var(--olive)", backgroundColor: "var(--olive-dark)" }}
          >
            <span
              className="font-display font-bold text-sm"
              style={{ color: "var(--olive-light)" }}
            >
              ССО
            </span>
          </div>
          <span
            className="font-display font-medium tracking-widest text-sm uppercase hidden sm:block"
            style={{ color: "var(--sand)" }}
          >
            Силы специальных операций
          </span>
        </div>

        <ul className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="font-display text-sm tracking-wider uppercase transition-colors duration-200"
                style={{ color: "var(--sand-muted)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--olive-light)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--sand-muted)")
                }
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "var(--sand)" }}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 pt-16 flex flex-col"
          style={{ backgroundColor: "var(--dark-base)" }}
        >
          <ul className="flex flex-col items-center gap-8 mt-16">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-display text-2xl tracking-widest uppercase"
                  style={{ color: "var(--sand)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col justify-end noise-bg"
        style={{
          background: `
            linear-gradient(160deg, rgba(74,85,40,0.18) 0%, transparent 50%),
            linear-gradient(to bottom, transparent 40%, var(--dark-base) 100%),
            var(--dark-base)
          `,
        }}
      >
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 39px, var(--olive) 39px, var(--olive) 40px),
              repeating-linear-gradient(90deg, transparent, transparent 39px, var(--olive) 39px, var(--olive) 40px)
            `,
          }}
        />

        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ backgroundColor: "var(--olive)" }}
        />

        <div
          className="absolute top-24 right-6 md:right-12 font-body text-xs tracking-widest opacity-40"
          style={{ color: "var(--olive-light)" }}
        >
          <div>55°45′N</div>
          <div>37°36′E</div>
        </div>

        <div
          className="absolute top-24 left-8 font-display text-xs tracking-widest opacity-30"
          style={{ color: "var(--olive-light)" }}
        >
          01 / ГЛАВНАЯ
        </div>

        <div className="relative z-10 px-6 md:px-12 pb-20 pt-32">
          <div className="animate-fade-up mb-4 flex items-center gap-3">
            <div
              className="h-px flex-1 max-w-12"
              style={{ backgroundColor: "var(--olive)" }}
            />
            <span
              className="font-body text-xs tracking-[0.3em] uppercase"
              style={{ color: "var(--olive-light)" }}
            >
              Российская Федерация
            </span>
          </div>

          <h1
            className="animate-fade-up-delay-1 font-display font-bold uppercase leading-none mb-6"
            style={{
              fontSize: "clamp(3.5rem, 12vw, 10rem)",
              color: "var(--sand)",
              letterSpacing: "-0.01em",
            }}
          >
            ССО
          </h1>

          <div
            className="animate-fade-up-delay-2 h-px mb-6"
            style={{
              backgroundColor: "var(--olive)",
              maxWidth: "600px",
              animation: "expandWidth 1s ease 0.2s both",
            }}
          />

          <p
            className="animate-fade-up-delay-2 font-display font-light tracking-widest uppercase text-lg md:text-2xl mb-4"
            style={{ color: "var(--sand)", maxWidth: "600px" }}
          >
            Силы специальных операций
          </p>

          <p
            className="animate-fade-up-delay-3 font-body font-light text-base md:text-lg leading-relaxed mb-10"
            style={{ color: "var(--sand-muted)", maxWidth: "480px" }}
          >
            Элитные подразделения, действующие там, где обычные силы невозможны.
            Профессионализм. Отвага. Честь.
          </p>

          <div className="animate-fade-up-delay-4 flex flex-wrap gap-4">
            <button
              className="font-display tracking-widest uppercase px-8 py-3 text-sm transition-all duration-200"
              style={{
                backgroundColor: "var(--olive)",
                color: "var(--dark-base)",
                border: "1px solid var(--olive)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--olive-light)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--olive)";
              }}
            >
              О подразделении
            </button>
            <button
              className="font-display tracking-widest uppercase px-8 py-3 text-sm transition-all duration-200"
              style={{
                backgroundColor: "transparent",
                color: "var(--sand)",
                border: "1px solid var(--olive-dark)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--olive)";
                (e.currentTarget as HTMLElement).style.color = "var(--olive-light)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--olive-dark)";
                (e.currentTarget as HTMLElement).style.color = "var(--sand)";
              }}
            >
              Служба по контракту
            </button>
          </div>
        </div>

        <div
          className="relative z-10 border-t"
          style={{
            borderColor: "var(--olive-dark)",
            backgroundColor: "rgba(28,28,22,0.7)",
          }}
        >
          <div className="flex divide-x" style={{ borderColor: "var(--olive-dark)" }}>
            {STATS.map((s, i) => (
              <div
                key={i}
                className="flex-1 px-6 py-5 text-center"
                style={{ borderColor: "var(--olive-dark)" }}
              >
                <div
                  className="font-display font-bold text-2xl md:text-3xl"
                  style={{ color: "var(--olive-light)" }}
                >
                  {s.value}
                </div>
                <div
                  className="font-body text-xs tracking-widest uppercase mt-1"
                  style={{ color: "var(--sand-muted)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: ПРИНЦИПЫ */}
      <section
        className="relative py-24 px-6 md:px-12"
        style={{ backgroundColor: "var(--dark-mid)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span
              className="font-display text-xs tracking-widest opacity-40"
              style={{ color: "var(--olive-light)" }}
            >
              02 / ПРИНЦИПЫ
            </span>
            <div
              className="h-px flex-1"
              style={{ backgroundColor: "var(--olive-dark)" }}
            />
          </div>

          <h2
            className="font-display font-bold uppercase text-4xl md:text-5xl mb-12"
            style={{ color: "var(--sand)" }}
          >
            Основы деятельности
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-px"
            style={{ backgroundColor: "var(--olive-dark)" }}
          >
            {PILLARS.map((p, i) => (
              <div
                key={i}
                className="p-8 transition-colors duration-300 cursor-default"
                style={{ backgroundColor: "var(--dark-card)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "var(--dark-mid)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "var(--dark-card)";
                }}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1"
                    style={{
                      border: "1px solid var(--olive-dark)",
                      backgroundColor: "var(--dark-base)",
                    }}
                  >
                    <Icon name={p.icon} fallback="Shield" size={18} style={{ color: "var(--olive-light)" }} />
                  </div>
                  <div>
                    <h3
                      className="font-display font-semibold uppercase tracking-wider text-lg mb-2"
                      style={{ color: "var(--sand)" }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="font-body text-sm leading-relaxed"
                      style={{ color: "var(--sand-muted)" }}
                    >
                      {p.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: ДЕВИЗ */}
      <section
        className="relative py-32 px-6 md:px-12 overflow-hidden"
        style={{ backgroundColor: "var(--dark-base)" }}
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              var(--olive-dark) 40px,
              var(--olive-dark) 41px
            )`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div
            className="w-16 h-px mx-auto mb-8"
            style={{ backgroundColor: "var(--olive)" }}
          />
          <blockquote
            className="font-display font-light uppercase leading-tight"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 4rem)",
              color: "var(--sand)",
              letterSpacing: "0.04em",
            }}
          >
            "Честь. Отвага. Родина."
          </blockquote>
          <div
            className="w-16 h-px mx-auto mt-8"
            style={{ backgroundColor: "var(--olive)" }}
          />
          <p
            className="mt-6 font-body text-sm tracking-widest uppercase"
            style={{ color: "var(--sand-muted)" }}
          >
            Девиз Сил специальных операций
          </p>
        </div>
      </section>

      {/* SECTION: СЛУЖБА */}
      <section
        className="relative py-24 px-6 md:px-12"
        style={{ backgroundColor: "var(--dark-mid)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span
              className="font-display text-xs tracking-widest opacity-40"
              style={{ color: "var(--olive-light)" }}
            >
              03 / СЛУЖБА
            </span>
            <div
              className="h-px flex-1"
              style={{ backgroundColor: "var(--olive-dark)" }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="font-display font-bold uppercase text-4xl md:text-5xl mb-6"
                style={{ color: "var(--sand)" }}
              >
                Служба
                <br />
                по контракту
              </h2>
              <p
                className="font-body text-base leading-relaxed mb-8"
                style={{ color: "var(--sand-muted)" }}
              >
                ССО открыты для граждан, обладающих высокой физической подготовкой,
                твёрдостью духа и стремлением к профессиональному росту.
                Присоединяйтесь к элите Вооружённых Сил.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Высокое денежное довольствие",
                  "Профессиональная подготовка мирового уровня",
                  "Социальные гарантии и льготы",
                  "Карьерный рост и специализация",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div
                      className="w-1.5 h-1.5 flex-shrink-0"
                      style={{ backgroundColor: "var(--olive-light)" }}
                    />
                    <span
                      className="font-body text-sm"
                      style={{ color: "var(--sand)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className="font-display tracking-widest uppercase px-8 py-3 text-sm transition-all duration-200"
                style={{
                  backgroundColor: "var(--olive)",
                  color: "var(--dark-base)",
                  border: "1px solid var(--olive)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "var(--olive-light)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "var(--olive)";
                }}
              >
                Подать заявку
              </button>
            </div>

            <div
              className="border p-8"
              style={{
                borderColor: "var(--olive-dark)",
                backgroundColor: "var(--dark-card)",
              }}
            >
              <div
                className="font-display text-xs tracking-widest uppercase mb-6 pb-4 border-b"
                style={{
                  color: "var(--olive-light)",
                  borderColor: "var(--olive-dark)",
                }}
              >
                Требования к кандидатам
              </div>
              {[
                { label: "Возраст", value: "18–40 лет" },
                { label: "Гражданство", value: "РФ" },
                { label: "Образование", value: "Не ниже среднего" },
                { label: "Физ. подготовка", value: "Высокий уровень" },
                { label: "Воинская обязанность", value: "Исполнена" },
              ].map((row, i) => (
                <div
                  key={i}
                  className="flex justify-between py-3 border-b"
                  style={{ borderColor: "rgba(74,85,40,0.2)" }}
                >
                  <span
                    className="font-body text-sm"
                    style={{ color: "var(--sand-muted)" }}
                  >
                    {row.label}
                  </span>
                  <span
                    className="font-display text-sm font-medium tracking-wide"
                    style={{ color: "var(--sand)" }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-10 px-6 md:px-12 border-t"
        style={{
          backgroundColor: "var(--dark-base)",
          borderColor: "var(--olive-dark)",
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-6 h-6 flex items-center justify-center border"
              style={{
                borderColor: "var(--olive-dark)",
                backgroundColor: "var(--dark-card)",
              }}
            >
              <span
                className="font-display font-bold text-xs"
                style={{ color: "var(--olive-light)" }}
              >
                ССО
              </span>
            </div>
            <span
              className="font-body text-xs tracking-wider uppercase"
              style={{ color: "var(--sand-muted)" }}
            >
              Силы специальных операций
            </span>
          </div>
          <div
            className="font-body text-xs"
            style={{ color: "var(--sand-muted)", opacity: 0.4 }}
          >
            Вооружённые Силы Российской Федерации
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
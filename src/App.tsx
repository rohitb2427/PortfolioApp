import { useState } from "react";
import aboutPortrait from "./assets/rohit-about.jpeg";
import portrait from "./assets/rohit-portrait.jpeg";
import tractoCover from "./assets/tracto-cover.png";
import changeAlertScreen from "./assets/travel-change-alert.png";
import changeAlertHiFi from "./assets/travel-hifi-change-alert.png";
import optionDetailHiFi from "./assets/travel-hifi-option-detail.png";
import optionsHiFi from "./assets/travel-hifi-options.png";
import reassessHiFi from "./assets/travel-hifi-reassess.png";
import todayHiFi from "./assets/travel-hifi-today.png";
import tripInfoHiFi from "./assets/travel-hifi-trip-info.png";
import updatedDayHiFi from "./assets/travel-hifi-updated-day.png";
import travelMateCover from "./assets/travel-mate-cover.png";
import optionDetailScreen from "./assets/travel-option-detail.png";
import optionsScreen from "./assets/travel-options.png";
import reassessScreen from "./assets/travel-reassess.png";
import todayScreen from "./assets/travel-today.png";
import updatedDayScreen from "./assets/travel-updated-day.png";

const solutionSteps = [
  {
    number: "01",
    title: "Notice",
    subtitle: "Your afternoon may need attention.",
    screen: "Today",
    lowFiImage: todayScreen,
    image: todayHiFi,
    body: "A lightweight alert surfaces a potential conflict without forcing the traveler to act.",
  },
  {
    number: "02",
    title: "Understand",
    subtitle: "Your afternoon may no longer fit.",
    screen: "Change alert",
    lowFiImage: changeAlertScreen,
    image: changeAlertHiFi,
    body: "The traveler sees what changed and why the original plan may be difficult.",
  },
  {
    number: "03",
    title: "Reassess",
    subtitle: "Let’s see what’s possible.",
    screen: "Reassess my day",
    lowFiImage: reassessScreen,
    image: reassessHiFi,
    body: "3:15 PM · Near Louvre · ~4 hours available · Dinner at 7:30 PM. The current situation becomes the starting point.",
  },
  {
    number: "04",
    title: "Explore",
    subtitle: "What fits your afternoon?",
    screen: "Options",
    lowFiImage: optionsScreen,
    image: optionsHiFi,
    body: "Instead of asking “What should I visit?”, the experience asks: “What makes sense right now?”",
  },
  {
    number: "05",
    title: "Understand Why",
    subtitle: "Recommendations with visible reasoning.",
    screen: "Option detail",
    lowFiImage: optionDetailScreen,
    image: optionDetailHiFi,
    body: "Travel time, visit duration, opening hours, existing plans, and saved places explain why an option fits.",
  },
  {
    number: "06",
    title: "Decide & Adapt",
    subtitle: "The traveler makes the final call.",
    screen: "Updated day",
    lowFiImage: updatedDayScreen,
    image: updatedDayHiFi,
    body: "Musée d’Orsay becomes the Louvre. The traveler decides, and the rest of the day stays intact.",
  },
];

function TravelMateCaseStudy({ onBack }: { onBack: () => void }) {
  return (
    <main className="min-h-screen bg-[#f8f8f5] text-[#171a18]">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#171a18]/10 bg-[#f8f8f5]/90 px-6 py-5 backdrop-blur-md sm:px-10 lg:px-16">
        <button
          type="button"
          onClick={onBack}
          className="text-lg font-semibold tracking-[-0.04em]"
        >
          Rohit.
        </button>
        <button
          type="button"
          onClick={onBack}
          className="rounded-full border border-[#171a18]/25 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-[#171a18] hover:text-white"
        >
          Back to work
        </button>
      </header>

      <section className="mx-auto max-w-[1280px] px-6 pb-20 pt-14 sm:px-10 sm:pt-20 lg:px-16">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#e45f3a]">
          UX / UI case study
        </p>
        <h1 className="max-w-4xl text-[clamp(4rem,9vw,8rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
          Travel Mate
        </h1>
        <p className="mt-8 max-w-3xl text-xl font-medium leading-relaxed sm:text-2xl">
          Helping travelers decide what to do when plans change.
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-[#171a18]/60 sm:text-lg">
          A mobile travel experience that helps travelers understand what is
          realistically possible next when unexpected changes disrupt their plans.
        </p>

        <div className="mt-10 grid max-w-3xl gap-6 border-y border-[#171a18]/15 py-6 text-sm sm:grid-cols-2">
          <div>
            <span className="case-meta-label">Role</span>
            <p className="mt-1 font-medium">UX Research · UX/UI Design · Product Design</p>
          </div>
          <div>
            <span className="case-meta-label">Scope</span>
            <p className="mt-1 font-medium">3 weeks · 7 participants · Figma</p>
          </div>
        </div>

        <img
          src={travelMateCover}
          alt="Travel Mate UX and UI case study cover"
          className="mt-14 w-full border border-[#171a18]/15 sm:mt-20"
        />
        <p className="mx-auto mt-14 max-w-3xl text-center text-2xl font-medium leading-snug tracking-[-0.03em] sm:text-4xl">
          Every great design starts with a story. This is mine.
        </p>
      </section>

      <section className="case-section bg-white">
        <div className="case-grid">
          <div>
            <p className="case-kicker">01 — The problem</p>
            <h2 className="case-heading">I thought the problem was scattered information.</h2>
          </div>
          <div className="case-copy">
            <p>
              Travelers use multiple apps for bookings, saved places, maps,
              messages, and notes.
            </p>
            <p>
              But before designing around that assumption, I wanted to understand:
            </p>
            <blockquote className="case-quote">
              How do travelers actually manage their trips when reality
              doesn&apos;t go according to plan?
            </blockquote>
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="case-grid">
          <div>
            <p className="case-kicker">02 — The research</p>
            <h2 className="case-heading">7 travelers. Different trips. Different planning styles.</h2>
          </div>
          <div className="case-copy">
            <div className="flex flex-wrap gap-2">
              {["Solo", "Couple", "Friends", "Family", "Group", "Self-planned", "Spontaneous", "Hosted", "Agency"].map((item) => (
                <span key={item} className="case-chip">{item}</span>
              ))}
            </div>
            <p>I interviewed travelers about:</p>
            <ul className="case-list">
              <li>How they plan and decide what to do</li>
              <li>Where they keep information</li>
              <li>What happens when plans change</li>
              <li>How they decide what to do next</li>
            </ul>
            <div className="case-highlight">
              <span>What surprised me</span>
              <h3>Travelers were already good at adapting.</h3>
              <p>
                They skipped activities, changed plans, asked locals, checked
                Maps, called operators, and improvised when needed.
              </p>
            </div>
            <p>The bigger friction appeared when they needed to know:</p>
            <blockquote className="case-quote">“What can I realistically do now?”</blockquote>
          </div>
        </div>
      </section>

      <section className="case-section bg-[#173c42] text-white">
        <div className="case-grid">
          <div>
            <p className="case-kicker !text-[#a9cabf]">03 — The turning point</p>
            <h2 className="case-heading">The problem wasn&apos;t planning.</h2>
          </div>
          <div className="case-copy !text-white/70">
            <p className="text-2xl font-medium leading-snug text-white sm:text-4xl">
              It was the gap between what travelers expected and what was actually possible.
            </p>
            <div className="case-flow">
              {["Plan", "Something changes", "Information becomes uncertain", "Search + verify", "Evaluate what’s feasible", "Decide what to do next"].map((item, index) => (
                <div key={item} className="contents">
                  <span>{item}</span>
                  {index < 5 && <b>→</b>}
                </div>
              ))}
            </div>
            <p className="font-medium text-white">This became the opportunity.</p>
          </div>
        </div>
      </section>

      <section className="case-section bg-white">
        <div className="mx-auto max-w-[1280px]">
          <p className="case-kicker">04 — The opportunity</p>
          <blockquote className="mt-6 max-w-5xl text-[clamp(2.2rem,5vw,5rem)] font-medium leading-[1.02] tracking-[-0.055em]">
            How might we help travelers confidently decide what to do next when their plans change?
          </blockquote>
          <div className="mt-14 grid border-l border-t border-[#171a18]/15 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Know", "What changed?"],
              ["Understand", "What is still possible?"],
              ["Decide", "What do I want to do?"],
              ["Adapt", "How should my plan change?"],
            ].map(([title, text], index) => (
              <div key={title} className="min-h-52 border-b border-r border-[#171a18]/15 p-7">
                <span className="text-xs text-[#171a18]/35">0{index + 1}</span>
                <h3 className="mt-10 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-[#171a18]/55">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="case-grid">
          <div>
            <p className="case-kicker">05 — The direction</p>
            <h2 className="case-heading">Recommend. Explain. Let the traveler decide.</h2>
          </div>
          <div className="case-copy">
            <p>I explored several ideas:</p>
            <div className="divide-y divide-[#171a18]/15 border-y border-[#171a18]/15">
              {[
                ["What can I still do?", "Show realistic options based on the current situation."],
                ["Recover my day", "Adjust the remaining itinerary after a disruption."],
                ["Nearby alternatives", "Find options that fit the remaining time."],
                ["Can I trust this?", "Make important information easier to verify."],
              ].map(([title, text]) => (
                <div key={title} className="py-5">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 !text-base">{text}</p>
                </div>
              ))}
            </div>
            <p>
              The product shouldn&apos;t automatically change someone&apos;s trip.
              It should provide the context needed to make a confident decision.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section bg-white">
        <div className="mx-auto max-w-[1280px]">
          <p className="case-kicker">06 — The core experience</p>
          <h2 className="case-heading mt-5 max-w-4xl">
            A traveler loses two hours, and their afternoon plan no longer fits.
          </h2>
          <div className="case-flow mt-10 !justify-start">
            {["Plan", "Change", "Reassess", "Explore", "Decide", "Update"].map((item, index) => (
              <div key={item} className="contents">
                <span>{item}</span>
                {index < 5 && <b>→</b>}
              </div>
            ))}
          </div>
          <p className="mt-14 text-xs font-semibold uppercase tracking-[0.16em] text-[#171a18]/40">
            Low-fidelity flow
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutionSteps.map((step) => (
              <figure key={step.screen} className="rounded-2xl bg-[#e9eee8] p-5 sm:p-7">
                <img
                  src={step.lowFiImage}
                  alt={`${step.screen} low-fidelity Travel Mate screen`}
                  className="mx-auto max-h-[620px] w-auto object-contain shadow-[0_18px_45px_rgba(26,40,34,0.14)]"
                />
                <figcaption className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#171a18]/45">
                  {step.screen}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section bg-[#ee803a]">
        <div className="mx-auto max-w-[1280px]">
          <p className="case-kicker !text-[#542714]/65">07 — The solution</p>
          <h2 className="case-heading mt-5">From disruption to a confident decision.</h2>
          <div className="mt-16 space-y-6">
            {solutionSteps.map((step, index) => (
              <article key={step.number} className="grid overflow-hidden rounded-2xl bg-[#fffaf4] lg:grid-cols-2">
                <div className={`flex items-center justify-center bg-[#e9eee8] p-10 ${index % 2 ? "lg:order-2" : ""}`}>
                  <img
                    src={step.image}
                    alt={`${step.screen} low-fidelity Travel Mate screen`}
                    className="max-h-[760px] w-auto object-contain shadow-[0_22px_60px_rgba(26,40,34,0.16)]"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <span className="text-xs font-semibold tracking-[0.14em] text-[#e45f3a]">{step.number}</span>
                  <h3 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">{step.title}</h3>
                  <p className="mt-3 text-xl font-medium">{step.subtitle}</p>
                  <p className="mt-6 max-w-lg leading-relaxed text-[#171a18]/60">{step.body}</p>
                  {step.number === "04" && (
                    <div className="mt-6 grid gap-2 text-sm">
                      <span>Louvre · 25 min · ~90 min · Fits your afternoon</span>
                      <span>Seine Walk · 10 min · ~60 min · Fits comfortably</span>
                      <span>Montmartre · 30 min · ~2 hrs · Fits, but tighter</span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section bg-white">
        <div className="case-grid">
          <div>
            <p className="case-kicker">08 — Supporting the trip</p>
            <h2 className="case-heading">Sometimes you don&apos;t need a recommendation. You just need the details.</h2>
          </div>
          <div className="case-copy">
            <p>
              Research also showed that important travel information could be
              difficult to retrieve while on the move.
            </p>
            <p>So, I designed a lightweight <strong>Trip Info</strong> space:</p>
            <div className="flex flex-wrap gap-2">
              {["Flights", "Accommodation", "Tickets", "Transport", "Important details"].map((item) => (
                <span key={item} className="case-chip">{item}</span>
              ))}
            </div>
            <div className="flex justify-center rounded-2xl bg-[#e9eee8] p-8">
              <img
                src={tripInfoHiFi}
                alt="Trip Information high-fidelity Travel Mate screen"
                className="max-h-[760px] w-auto object-contain shadow-[0_22px_60px_rgba(26,40,34,0.16)]"
              />
            </div>
            <p>The goal wasn&apos;t to replace every travel app. It was simply:</p>
            <blockquote className="case-quote">“I need this information right now. Where is it?”</blockquote>
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="mx-auto max-w-[1280px]">
          <p className="case-kicker">09 — Design principles</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              ["Context before recommendations", "Consider time, location, travel time, duration, and commitments."],
              ["Explain, don’t just recommend", "Show why an option fits."],
              ["Recommend, don’t decide", "The traveler remains in control."],
              ["Adapt without starting over", "Change what’s affected without rebuilding the whole day."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-[#171a18]/15 bg-white p-8">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-[#171a18]/55">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section bg-white">
        <div className="case-grid">
          <div>
            <p className="case-kicker">10 — Reality check</p>
            <h2 className="case-heading">Testing the idea, not declaring it finished.</h2>
          </div>
          <div className="case-copy">
            <p>
              I used follow-up conversations to validate the concept and
              terminology. Participants were comfortable with evaluating an
              activity against their current situation.
            </p>
            <blockquote className="case-quote">“Fits your current situation.”</blockquote>
            <p>
              The prototype has <strong>not yet gone through formal usability testing</strong>,
              so the next step would be testing during realistic travel scenarios.
            </p>
            <p className="font-semibold !text-[#171a18]">I&apos;d want to validate:</p>
            <ul className="case-list">
              <li>What factors matter most?</li>
              <li>Do travelers understand why something fits?</li>
              <li>How much automation would they trust?</li>
              <li>How should information reliability be communicated?</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="case-section bg-[#173c42] text-white">
        <div className="mx-auto max-w-[1280px]">
          <p className="case-kicker !text-[#a9cabf]">11 — What changed</p>
          <div className="mt-8 grid gap-5 text-[clamp(2.4rem,5vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.055em] lg:grid-cols-2">
            <p className="text-white/45">I started by designing a travel planner.</p>
            <p>I ended up designing a decision-support experience.</p>
          </div>
          <p className="mt-12 max-w-3xl text-lg leading-relaxed text-white/65">
            The research showed that travelers didn&apos;t necessarily need
            another tool to create the perfect itinerary. They needed help at the
            moment when the itinerary stopped matching reality.
          </p>
        </div>
      </section>

      <section className="case-section bg-[#f8f8f5]">
        <div className="mx-auto max-w-[1280px]">
          <p className="case-kicker">What I&apos;m taking forward</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["01", "Challenge the first assumption.", "Research should be allowed to change the problem."],
              ["02", "Design for reality.", "The interesting problems often appear when things go wrong."],
              ["03", "Help users decide.", "Good UX doesn’t always mean automating the decision."],
            ].map(([number, title, text]) => (
              <div key={number} className="border-t border-[#171a18]/20 pt-5">
                <span className="text-xs text-[#e45f3a]">{number}</span>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
                <p className="mt-3 leading-relaxed text-[#171a18]/55">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-24 border-t border-[#171a18]/15 pt-12 text-center">
            <p className="mx-auto max-w-4xl text-[clamp(2.2rem,5vw,5rem)] font-medium leading-[1.03] tracking-[-0.055em]">
              The trip doesn&apos;t have to go according to plan.
              <span className="mt-2 block text-[#e45f3a]">
                The traveler just needs to know what makes sense next.
              </span>
            </p>
            <button
              type="button"
              onClick={onBack}
              className="mt-12 inline-flex rounded-full bg-[#171a18] px-6 py-3 text-sm font-medium text-white"
            >
              Back to selected work
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const [isTravelMateCaseStudy, setIsTravelMateCaseStudy] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openTravelMateCaseStudy = () => {
    setIsTravelMateCaseStudy(true);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const closeTravelMateCaseStudy = () => {
    setIsTravelMateCaseStudy(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById("work")?.scrollIntoView({ behavior: "auto" });
      });
    });
  };

  const copyEmail = async () => {
    const email = "rohitb2427@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
    }

    setIsEmailCopied(true);
    window.setTimeout(() => setIsEmailCopied(false), 1000);
  };

  if (isTravelMateCaseStudy) {
    return <TravelMateCaseStudy onBack={closeTravelMateCaseStudy} />;
  }

  return (
    <main className="glazed-paper min-h-screen bg-[#173c42] text-white">
      <header className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-7 sm:px-10 lg:px-16">
        <a
          href="#"
          className="text-lg font-semibold tracking-[-0.04em]"
          aria-label="Rohit, home"
        >
          Rohit.
        </a>

        <nav
          aria-label="Primary navigation"
          className="fixed right-4 top-4 z-50 flex items-center gap-5 rounded-full border border-white/15 bg-[#102f36]/90 px-5 py-3 text-xs font-medium text-white shadow-[0_10px_35px_rgba(8,27,30,0.22)] backdrop-blur-md sm:right-8 sm:top-6 sm:gap-8 sm:px-6 sm:text-sm"
        >
          <button type="button" className="nav-link" onClick={() => scrollToSection("home")}>
            Home
          </button>
          <button type="button" className="nav-link" onClick={() => scrollToSection("work")}>
            Work
          </button>
          <button type="button" className="nav-link" onClick={() => scrollToSection("about")}>
            About
          </button>
          <button type="button" className="nav-link" onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </nav>
      </header>

      <section
        id="home"
        className="mx-auto grid min-h-[calc(100vh-96px)] max-w-[1280px] items-center gap-12 px-6 pb-14 pt-10 sm:px-10 sm:pb-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-16 lg:pb-20 lg:pt-6"
      >
        <div className="relative mx-auto w-full max-w-[380px] lg:justify-self-start">
          <div className="portrait-frame relative aspect-[9/16] overflow-hidden rounded-2xl border-[10px] border-[#f8eddf]/75 sm:border-[14px]">
            <img
              src={portrait}
              alt="Portrait of Rohit"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
          <h1 className="text-[clamp(4.25rem,9.5vw,9rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-white">
            Hi! I am
            <span className="block font-sans font-normal italic tracking-[-0.045em]">
              Rohit.
            </span>
          </h1>

          <div className="mx-auto mt-10 max-w-xl border-t border-white/30 pt-7 sm:mt-12 lg:mx-0">
            <p className="text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl">
              I&apos;m a UI/UX and Visual Designer.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white sm:text-lg">
              I love solving problems, creating delightful user experiences, and
              turning visions into reality.
            </p>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="relative bg-[#f8f8f5] px-6 py-20 text-[#171a18] sm:px-10 sm:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 sm:mb-16">
            <h2 className="section-title">
              Featured <span>Work</span>
            </h2>
          </div>

          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
            <article className="work-card">
              <div className="project-visual flex items-center bg-[#f4f4ef]">
                <img
                  src={travelMateCover}
                  alt="Travel Mate UX and UI case study cover"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="pt-4">
                <h3>Travel Mate</h3>
                <p>iOS app · UX research · UI design</p>
                <a
                  href="#travel-mate-case-study"
                  onClick={(event) => {
                    event.preventDefault();
                    openTravelMateCaseStudy();
                  }}
                >
                  View project <span>→</span>
                </a>
              </div>
            </article>

            <article className="work-card">
              <div className="project-visual flex items-center bg-[#f4f4ef]">
                <img
                  src={tractoCover}
                  alt="Tracto Healthcare product design cover"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="pt-4">
                <h3>Tracto Healthcare</h3>
                <p>Healthcare app · Product design · UX/UI</p>
                <a href="#contact">View project <span>→</span></a>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="relative overflow-hidden bg-[#e9eee8] px-6 py-20 text-[#171a18] sm:px-10 sm:py-28 lg:px-16"
      >
        <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full border-[80px] border-white/25" />
        <div className="mx-auto max-w-[1280px]">
          <div className="about-intro-grid grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-[2rem] border-[10px] border-white bg-[#d9d5ce] shadow-[0_24px_70px_rgba(16,47,54,0.16)]">
                <img
                  src={aboutPortrait}
                  alt="Rohit standing on a beach at sunset"
                  className="aspect-[4/5] h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div>
              <h2 className="section-title">
                About <span>Me</span>
              </h2>

              <div className="about-copy mt-10 space-y-5 text-base leading-relaxed text-[#171a18]/68 sm:text-lg">
                <p>
                  I&apos;m <strong>Rohit</strong>, a product-minded iOS
                  developer with 6+ years of experience building and shipping
                  mobile products with product, design, and engineering teams.
                </p>
                <p>
                  Building products made me curious about the thinking behind the
                  interface: the people using it, the problems it solves, and the
                  details that make it feel intuitive.
                </p>
                <p>
                  Today, I&apos;m exploring UI/UX by combining
                  <strong> product thinking, visual design, and technical
                  understanding</strong> to create experiences that are useful,
                  natural, and buildable.
                </p>
                <p className="font-medium text-[#173c42]">
                  I started by building experiences. Now I&apos;m learning to
                  shape them from the beginning.
                </p>
              </div>
            </div>
          </div>

          <div id="about-skills" className="mt-20 grid gap-y-12 border-t border-[#173c42]/20 pt-12 sm:mt-28 md:grid-cols-[1.2fr_1fr_0.75fr] md:gap-y-0">
            <div className="md:pr-10">
              <h3 className="text-3xl font-semibold tracking-[-0.045em] text-[#173c42]">Skills</h3>
              <div className="mt-4 h-0.5 w-10 bg-[#5f8c7d]" />
              <ul className="mt-7 grid gap-x-5 gap-y-3.5 text-sm font-medium text-[#173c42]/80 sm:grid-cols-2">
                {[
                  "UX Design",
                  "UI Design",
                  "Product Thinking",
                  "User Flows",
                  "Wireframing",
                  "Prototyping",
                  "Design Systems",
                  "Figma",
                  "iOS",
                  "Swift",
                  "SwiftUI",
                  "Product Development",
                ].map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#5f8c7d]" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:border-l md:border-[#173c42]/15 md:px-10">
              <h3 className="text-3xl font-semibold tracking-[-0.045em] text-[#173c42]">Tools</h3>
              <div className="mt-4 h-0.5 w-10 bg-[#5f8c7d]" />
              <ul className="mt-7 grid gap-3.5 text-sm font-medium text-[#173c42]/80">
                {["Figma", "FigJam", "Sketch", "Notion", "Xcode", "GitHub", "Jira and Confluence"].map((tool) => (
                  <li key={tool} className="flex items-center gap-2">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#5f8c7d]" />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:border-l md:border-[#173c42]/15 md:pl-10">
              <h3 className="text-3xl font-semibold tracking-[-0.045em] text-[#173c42]">Resume</h3>
              <div className="mt-4 h-0.5 w-10 bg-[#5f8c7d]" />
              <button
                type="button"
                className="mt-7 whitespace-nowrap rounded-full bg-[#173c42] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(23,60,66,0.18)] transition-colors hover:bg-[#245b59]"
              >
                Download resume
              </button>
            </div>
          </div>

          <div id="about-journey" className="mt-20 border-t border-[#173c42]/15 pt-14 sm:mt-28 sm:pt-16">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#467568]">
                  My background
                </p>
                <h3 className="mt-4 text-5xl font-semibold tracking-[-0.055em] text-[#173c42] sm:text-6xl">
                  Who am I?
                </h3>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#173c42]">
                  From code → product → design
                </h4>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-[#173c42]/65 sm:text-lg">
                  <p>
                    I&apos;ve spent 6+ years building mobile products as an iOS
                    developer. Along the way, I&apos;ve worked across the product
                    lifecycle — from understanding requirements and collaborating
                    with designers to building, shipping, and refining experiences.
                  </p>
                  <p>
                    That experience made me curious about the decisions behind the
                    screens, which led me to UI/UX.
                  </p>
                  <p>
                    Today, I combine my engineering background with product
                    thinking and design to create experiences that are useful,
                    intuitive, and actually buildable.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14">
              <h4 className="mb-7 text-sm font-semibold uppercase tracking-[0.16em] text-[#173c42]">
                My journey
              </h4>
              <div className="about-journey-grid grid border-l border-t border-[#173c42]/15 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["2019", "iOS Developer", "Built mobile apps & learned the craft of code"],
                  ["2021", "Mobile Developer", "Shipped features & collaborated with product teams"],
                  ["2023", "Product Builder", "Worked across product + tech & understood users"],
                  ["2026", "UI/UX Designer", "Designing experiences with a builder’s mindset"],
                ].map(([year, role, description]) => (
                  <article
                    key={year}
                    className="min-h-60 border-b border-r border-[#173c42]/15 bg-white/35 p-6"
                  >
                    <span className="text-xs font-semibold tracking-[0.14em] text-[#467568]">
                      {year}
                    </span>
                    <h5 className="mt-10 text-xl font-semibold tracking-[-0.035em] text-[#173c42]">
                      {role}
                    </h5>
                    <p className="mt-3 text-sm leading-relaxed text-[#173c42]/55">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
      <section
        id="contact"
        className="relative bg-[#102f36] px-6 pb-0 pt-20 text-white sm:px-10 sm:pb-0 sm:pt-28 lg:px-16"
      >
        <div className="mx-auto max-w-[1280px]">
          <h2 className="max-w-4xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
            Let&apos;s grow something,
            <span className="block font-serif font-normal italic text-[#a9cabf]">
              together.
            </span>
          </h2>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center">
            <div className="flex items-center justify-center gap-6 text-lg font-medium">
              <a
                href="https://www.linkedin.com/in/rohit-bhutkar-a52a72100/"
                target="_blank"
                rel="noreferrer"
                className="border-b border-white/35 pb-0.5 transition-colors hover:text-[#a9cabf]"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/super3liott?stkn=MTNmY2V6aGppdnhxMQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="border-b border-white/35 pb-0.5 transition-colors hover:text-[#a9cabf]"
              >
                Instagram
              </a>
            </div>

            <div className="flex items-center justify-center gap-3">
              <a
                href="mailto:rohitb2427@gmail.com"
                className="text-xl font-medium tracking-[-0.025em] transition-colors hover:text-[#a9cabf] sm:text-2xl"
              >
                rohitb2427@gmail.com
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-[#a9cabf] hover:text-[#a9cabf]"
                aria-label={isEmailCopied ? "Email copied" : "Copy email address"}
                title={isEmailCopied ? "Copied" : "Copy email"}
              >
                {isEmailCopied ? (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                ) : (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="8" y="8" width="11" height="11" rx="2" />
                    <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
                  </svg>
                )}
              </button>
              <span className="sr-only" aria-live="polite">
                {isEmailCopied ? "Email address copied" : ""}
              </span>
            </div>
          </div>

          <div className="mt-20 border-t border-white/15 py-5 text-sm text-white/45">
            © 2026 Rohit. Built with tea and code.
          </div>
        </div>
      </section>
    </main>
  );
}
